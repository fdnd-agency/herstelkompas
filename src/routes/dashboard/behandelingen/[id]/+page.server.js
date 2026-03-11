import { createDirectus, authentication } from '@directus/sdk';
import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

const client = createDirectus(DIRECTUS_URL).with(authentication());
export async function load({ params }) {
  const { id } = params;

  // login for each request
  const { access_token } = await client.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD
  });

  const res = await fetch(
    `${DIRECTUS_URL}/items/behandeling/${id}?fields=*,scans.*,scans.scan_before.*,scans.scan_after.*`,
    {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    }
  );

  const data = await res.json();

  if (!data.data) {
    throw error(404, 'Activiteit niet gevonden');
  }

  return { activiteit: data.data };
}