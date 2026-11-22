

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

async function getActiviteiten(fields) {
	const token = await directusAuth();
	const res = await fetch(`${DIRECTUS_URL}/items/activiteit?limit=100&fields=${fields}`, {
		headers: { Authorization: token }
	});
	return (await res.json()).data;
}

export async function load() {
	const activiteiten = await getActiviteiten('id,label,state');
	return { activiteiten };
}

export const actions = {
	save: async ({ request }) => {
		const formData = await request.formData();
		const token = await directusAuth();

		const activiteiten = await getActiviteiten('label');

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

		const saveBody = { ...bingokaart };

		if (!bestaande) {
			saveBody.beschrijving = 'N.v.t.';
			saveBody.datum = today;
		}

		const url = `${DIRECTUS_URL}/items/behandeling`;
		let urlWithId = url;
		let method = 'POST';
		if (bestaande) {
			urlWithId = `${url}/${bestaande.id}`;
			method = 'PATCH';
		}

		const saveRes = await fetch(urlWithId, {
			method,
			headers: { Authorization: token, 'Content-Type': 'application/json' },
			body: JSON.stringify(saveBody)
		});
		if (!saveRes.ok) {
			return { success: false, message: 'Opslaan bingokaart is mislukt. Probeer het opnieuw!' };
		}

		return { success: true, message: 'Bingokaart opgeslagen!' };
	}
};
