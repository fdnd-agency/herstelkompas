

import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_URL } from '$env/static/private';

async function directusAuth() {
	const loginRes = await fetch(`${DIRECTUS_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email: DIRECTUS_EMAIL, password: DIRECTUS_PASSWORD })
	});
	const { data } = await loginRes.json();
	return `Bearer ${data.access_token}`;
}

export async function load() {
	const token = await directusAuth();

	const res = await fetch(`${DIRECTUS_URL}/items/activiteit?limit=100&fields=id,label,state`, {
		headers: { Authorization: token }
	});

	return { activiteiten: (await res.json()).data };
}

export const actions = {
	save: async ({ request }) => {
		const formData = await request.formData();
		const token = await directusAuth();

		const actRes = await fetch(`${DIRECTUS_URL}/items/activiteit?limit=100&fields=label`, {
			headers: { Authorization: token }
		});
		const activiteiten = (await actRes.json()).data;

		const bingokaart = activiteiten.map((a, i) => {
			const state = Number(formData.get(`state-${i}`) ?? 0);
			return { activiteit: a.label, checked: state > 0 };
		});

		const today = new Date().toISOString().slice(0, 19);

		const res = await fetch(
			`${DIRECTUS_URL}/items/behandeling?filter[datum][_gte]=${today}&limit=1&sort=-datum`,
			{ headers: { Authorization: token } }
		);
		const bestaande = (await res.json()).data?.[0];

		if (bestaande) {
			await fetch(`${DIRECTUS_URL}/items/behandeling/${bestaande.id}`, {
				method: 'PATCH',
				headers: { Authorization: token, 'Content-Type': 'application/json' },
				body: JSON.stringify({ bingokaart })
			});
		} else {
			await fetch(`${DIRECTUS_URL}/items/behandeling`, {
				method: 'POST',
				headers: { Authorization: token, 'Content-Type': 'application/json' },
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
