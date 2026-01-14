export async function load() {
  const res = await fetch('https://fdnd-agency.directus.app/items/behandeling');

  if (!res.ok) {
    throw new Error(`Fout bij ophalen: ${res.status}`);
  }

  const json = await res.json();


  return {
    behandelingen: json.data 
  };
}
