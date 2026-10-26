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

  }

  const json = await res.json();


  return {
    behandelingen: json.data 
  };
}
