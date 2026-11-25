

export async function load({ url }) {

  // sort in periode die ik in me html input en select gebruik 
  // url.searchparams.get() zoeken naar een speciefieke waarde in de url
  const sortering = url.searchParams.get('sort');
  const periode = url.searchParams.get('periode');

  // de sorteervolgorde bepalen
  // value="oudste"
  // datum voor oudste -datum voor nieuwste
  // datum te vindne in de data base
  
  const volgorde = sortering === 'oudste' ? 'datum' : '-datum';

  // 3. Maak de Directus URL
  let apiUrl = `https://fdnd-agency.directus.app/items/behandeling?sort=${volgorde}`;

   // 4. Filter op periode (als er een gekozen is)
  if (periode) {
    const datum = new Date();

    datum.setMonth(datum.getMonth() - Number(periode));

    apiUrl += `&filter[datum][_gte]=${datum.toISOString()}`;
  }

try {
  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error('Behandelingen laden mislukt');
  }

  const json = await res.json();

  return {
    behandelingen: json.data,
    periode,
    sortering,
    status: 'success'
  };

} catch (error) {
  console.error(error);

  return {
    behandelingen: [],
    periode,
    sortering
  };
}
}