// export async function load() {
//   const res = await fetch('https://fdnd-agency.directus.app/items/behandeling');

//   if (!res.ok) {
//     throw new Error(`Fout bij ophalen: ${res.status}`);
//   }

//   const json = await res.json();


//   return {
//     behandelingen: json.data 
//   };
// }


export async function load({ url }) {

  // sort in periode die ik in me html input en select gebruik 
  // url.searchparams.get() zoeken naar een speciefieke waarde in de url
  const sortering = url.searchParams.get('sort');
  const periode = url.searchParams.get('periode');




  // de sorteervolgorde bepalen
  // value="oudste"
  // datum voor oudste -datum voor nieuwste


  const volgorde = sortering === 'oudste' ? 'datum' : '-datum';

    
   
  // 3. Maak de Directus URL
  let apiUrl = `https://fdnd-agency.directus.app/items/behandeling?sort=${volgorde}`;

  

  // 4. Filter op periode (als er een gekozen is)
  if (periode) {
    const datum = new Date();

    datum.setMonth(datum.getMonth() - Number(periode));

    apiUrl += `&filter[datum][_gte]=${datum.toISOString()}`;
  }

  // 5. Haal de behandelingen op
  const res = await fetch(apiUrl);
  const json = await res.json();
  console.log(json.data.map(behandeling => behandeling.datum));

  return {
    behandelingen: json.data
  };
}