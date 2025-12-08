
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
            return {
                success: false,
                error: "No Directus token available"
            };
        }
        let scansJSON        = [];
        /// Thanks, chad!
        const data           = await request.formData();

        const scanBefore     = data.get('scan-before');
        const scanBeforeDesc = data.get('scan-before-desc');
        const scanAfter      = data.get('scan-after');
        const scanAfterDesc  = data.get('scan-after-desc');
        console.log(scanBeforeDesc)
       if (
            !scanBefore || typeof scanBefore === 'string' ||
            !scanAfter  || typeof scanAfter  === 'string'
        ) {
            return {
                success: false,
                error: "Een of beide scans ontbreken"
            };
        }

        if (scanBefore.size > 8_000_000 || scanAfter.size > 8_000_000) {
            return {
                success: false,
                error: "Image too large. Max 8MB."
            };
        }

        const folderID = 'f30ac045-e1a4-4e94-a286-dd9b34879fe3';

        async function uploadToDirectus(file) {
            const buffer = Buffer.from(await file.arrayBuffer());

            const fd = new FormData();
            fd.append('folder', folderID);
            fd.append(
                'file',
                new Blob([buffer], { type: file.type }),
                file.name
            );

            const res = await fetch('https://fdnd-agency.directus.app/files', {
                method: 'POST',
                body: fd,
                // headers: { Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}` }
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Upload failed (${file.name}): ${res.status} - ${text}`);
            }

            const json = await res.json();
            return json.data.id;
        }

        const [beforeId, afterId] = await Promise.all([
            uploadToDirectus(scanBefore),
            uploadToDirectus(scanAfter),
        ]);

        scansJSON.push({scanBefore: beforeId, scanBeforeDesc: scanBeforeDesc, scanAfter: afterId, scanAfterDesc: scanAfterDesc})
        const prettyScansJSON = JSON.stringify(scansJSON, null, 2);
        const today = new Date();

            const start = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                0, 0, 0, 0
            );

            const end = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                23, 59, 59, 999
            );
            function toLocalISOString(date) {
                const pad = (n) => n.toString().padStart(2, '0');
                return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
            }

            const startString = toLocalISOString(start);
            const endString = toLocalISOString(end);
        //

        // zoek naar de meest recente behandeling van vandaag
        const url = `https://fdnd-agency.directus.app/items/behandeling?filter[datum][_between]=${startString},${endString}&limit=1&sort=-datum`;
        const todayBehandeling =  await fetch(url)
        const todayBehandelingReponseData = await todayBehandeling.json()
        let todayBehandelingData = todayBehandelingReponseData.data;
        let lastbingokaart;
        if(!todayBehandelingReponseData.data || todayBehandelingData.length == 0){
            
            const lastBingoCardurl = `https://fdnd-agency.directus.app/items/behandeling?filter[bingokaart][_nnull]=true&limit=1&sort=-datum`;
            const lastBingoCardFetch =  await fetch(lastBingoCardurl)
            const lastBingoCardFetchJson = await lastBingoCardFetch.json()
            const lastBingoCardFetchData = lastBingoCardFetchJson.data;
            lastbingokaart = lastBingoCardFetchData[0].bingokaart;
            const todaydatetime = today.toISOString().slice(0, 19);
            /// POSTEN
            const recordResponse = await fetch('https://fdnd-agency.directus.app/items/behandeling', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token.access_token
                },
                body: JSON.stringify({
                    beschrijving: "Geen beschrijving",
                    datum: todaydatetime,
                    bingokaart: lastbingokaart,
                    scans: prettyScansJSON
                }),
            });
        }
        else{
            // PATCH de scans
            const recordId = todayBehandelingData[0].id;
            // If for some reason a treatment has no bingocard and no questions answers
            if(!todayBehandelingData.bingokaart){
                const lastBingoCardurl = `https://fdnd-agency.directus.app/items/behandeling?filter[bingokaart][_nnull]=true&limit=1&sort=-datum`;
                const lastBingoCardFetch =  await fetch(lastBingoCardurl)
                const lastBingoCardFetchJson = await lastBingoCardFetch.json()
                const lastBingoCardFetchData = lastBingoCardFetchJson.data;
                lastbingokaart = lastBingoCardFetchData[0].bingokaart;
            }
            else{
                lastbingokaart = todayBehandelingData[0].bingokaart;
            }
            ///
            const patchRes = await fetch(`https://fdnd-agency.directus.app/items/behandeling/${recordId}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': token.access_token
                },
                body: JSON.stringify({
                    bingokaart: lastbingokaart,
                    scans: prettyScansJSON 
                })
            });
            const patchResult = await patchRes.json();
        }
        return {
            success: true,
            message: "Yay!!",
        };
    }
};
