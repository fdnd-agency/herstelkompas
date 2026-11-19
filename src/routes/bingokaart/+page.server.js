

import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_URL } from '$env/static/private';

export async function load() {
    const loginRes = await fetch(`${DIRECTUS_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: DIRECTUS_EMAIL, password: DIRECTUS_PASSWORD })
    });
    const { data } = await loginRes.json();

    const res = await fetch(`${DIRECTUS_URL}/items/activiteit?limit=100&fields=id,label,state`, {
        headers: { Authorization: `Bearer ${data.access_token}` }
    });

    return { activiteiten: (await res.json()).data };
}