

import { createDirectus, authentication } from '@directus/sdk';
import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_URL } from '$env/static/private';

const client = createDirectus(DIRECTUS_URL).with(authentication());
const token = await client.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD
});

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token.access_token}`
};

export async function load() {
    const res = await fetch(`${DIRECTUS_URL}/items/activiteit?limit=100&fields=id,label,state`, { headers });
    return { activiteiten: (await res.json()).data };
}

export const actions = {
    save: async ({ request }) => {
        const formData = await request.formData();

        const actRes = await fetch(`${DIRECTUS_URL}/items/activiteit?limit=100&fields=label`, { headers });
        const activiteiten = (await actRes.json()).data;

        const bingokaart = activiteiten.map((a, i) => {
            const state = Number(formData.get(`state-${i}`) ?? 0);
            return { activiteit: a.label, checked: state > 0 };
        });

        const today = new Date().toISOString().slice(0, 19);

        const res = await fetch(
            `${DIRECTUS_URL}/items/behandeling?filter[datum][_gte]=${today}&limit=1&sort=-datum`,
            { headers }
        );
        const bestaande = (await res.json()).data?.[0];

        if (bestaande) {
            await fetch(`${DIRECTUS_URL}/items/behandeling/${bestaande.id}`, {
                method: 'PATCH',
                headers,
                body: JSON.stringify({ bingokaart })
            });
        } else {
            await fetch(`${DIRECTUS_URL}/items/behandeling`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    beschrijving: 'N.v.t.',
                    datum: today,
                    bingokaart
                })
            });
        }

        return { success: true, message: 'Bingokaart opgeslagen!' };
    }
};