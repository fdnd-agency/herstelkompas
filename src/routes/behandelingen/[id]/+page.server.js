// src/routes/behandelingen/[id]/+page.server.js
export async function load({ params }) {
  const { id } = params;

  const res = await fetch(`https://fdnd-agency.directus.app/items/behandeling/${id}`);
  const data = await res.json();

  if (!data.data) {
    return {
      status: 404,
      error: new Error('Activiteit niet gevonden')
    };
  }

  return {
    activiteit: data.data
  };
}
