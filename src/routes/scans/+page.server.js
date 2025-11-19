
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

        /// Thanks, chad!
        const data = await request.formData();
        const scanBefore = data.get('scanBefore');
        console.log("ddd");

        if (!scanBefore || typeof scanBefore === 'string') {
            return { error: 'Geen bestand ontvangen' };
        }

        // Convert file to buffer
        const buffer = Buffer.from(await scanBefore.arrayBuffer());

        // Build FormData for Directus
        const fd = new FormData();
        fd.append('file', new Blob([buffer], { type: scanBefore.type }), scanBefore.name);

        // Upload to Directus
        const uploadResponse = await fetch('https://fdnd-agency.directus.app/files', {
            method: 'POST',
            body: fd
        });

        if (!uploadResponse.ok) {
            const text = await uploadResponse.text();
            throw new Error(`Upload failed: ${uploadResponse.status} - ${text}`);
        }

        const uploaded = await uploadResponse.json();
        const fileId = uploaded.data.id;
        console.log('Uploaded Directus file ID:', fileId);
        return { success: true, fileId };
    }
};
