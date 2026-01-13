
import { createDirectus, authentication } from '@directus/sdk';
import fs from 'fs/promises';
import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_URL } from '$env/static/private';
const client = createDirectus(DIRECTUS_URL).with(authentication());
const token = await client.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD
});
export const actions = {
  default: async ({ request }) => {
    if (!token?.access_token) {
      return { success: false, error: "No Directus token available" };
    }

    const data = await request.formData();
    const scanBefore = data.get('scan-before');
    const scanBeforeDesc = data.get('scan-before-desc');
    const scanAfter = data.get('scan-after');
    const scanAfterDesc = data.get('scan-after-desc');

    // Validation
    if (!scanBefore || typeof scanBefore === 'string' || !scanAfter || typeof scanAfter === 'string') {
      return { success: false, error: "Een of beide scans ontbreken" };
    }
    if (scanBefore.size > 8_000_000 || scanAfter.size > 8_000_000) {
      return { success: false, error: "Image too large. Max 8MB." };
    }

    const folderID = 'f30ac045-e1a4-4e94-a286-dd9b34879fe3';

    // Upload function
    async function uploadToDirectus(file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fd = new FormData();
      fd.append('folder', folderID);
      fd.append('file', new Blob([buffer], { type: file.type }), file.name);

      const res = await fetch(`${DIRECTUS_URL}/files`, { method: 'POST', body: fd });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Upload failed (${file.name}): ${res.status} - ${text}`);
      }
      const json = await res.json();
      return json.data.id;
    }

    // Upload files in parallel
    const [beforeId, afterId] = await Promise.all([
      uploadToDirectus(scanBefore),
      uploadToDirectus(scanAfter)
    ]);

    const today = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    const toLocalISOString = (d) => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    const startString = toLocalISOString(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0,0,0));
    const endString = toLocalISOString(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23,59,59));

    // Fetch today's behandeling
    const behandelingRes = await fetch(`${DIRECTUS_URL}/items/behandeling?filter[datum][_between]=${startString},${endString}&limit=1&sort=-datum`);
    const behandelingJson = await behandelingRes.json();
    let behandelingId;

    if (!behandelingJson.data || behandelingJson.data.length === 0) {
      // Get last bingokaart as fallback
      const lastBingoRes = await fetch(`${DIRECTUS_URL}/items/behandeling?filter[bingokaart][_nnull]=true&limit=1&sort=-datum`);
      const lastBingoJson = await lastBingoRes.json();
      const lastBingoCard = lastBingoJson.data[0]?.bingokaart ?? [];

      const todaydatetime = today.toISOString().slice(0, 19);
      const createBehandelingRes = await fetch(`${DIRECTUS_URL}/items/behandeling`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.access_token}`
        },
        body: JSON.stringify({
          beschrijving: "Geen beschrijving",
          datum: todaydatetime,
          bingokaart: lastBingoCard
        })
      });
      const createBehandelingJson = await createBehandelingRes.json();
      behandelingId = createBehandelingJson.data.id;
    } else {
      behandelingId = behandelingJson.data[0].id;
    }

    // Create scan record linked to behandeling
    const scanRecord = {
      scan_before: beforeId,
      scan_before_desc: scanBeforeDesc,
      scan_after: afterId,
      scan_after_desc: scanAfterDesc,
      behandeling: behandelingId
    };

    const scanRes = await fetch(`${DIRECTUS_URL}/items/scans`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access_token}`
      },
      body: JSON.stringify(scanRecord)
    });

    const scanResult = await scanRes.json();
    console.log('Scan created:', scanResult.data);

    return {
      success: true,
      message: "Scans geupdatet!",
      scanId: scanResult.data.id,
      behandelingId
    };
  }
};