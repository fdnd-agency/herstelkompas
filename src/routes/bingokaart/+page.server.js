/// AUTHENTICATIE

import { createDirectus, authentication } from '@directus/sdk';
import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_URL } from '$env/static/private';
const client = createDirectus(DIRECTUS_URL).with(authentication());
const token = await client.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD
});

////

export async function load({}){
    const behandelingenReponse = await fetch('https://fdnd-agency.directus.app/items/behandeling?limit=1&sort=-datum') // meest recent
    const behandelingenReponseData = await behandelingenReponse.json()
    let behandeling = behandelingenReponseData.data[0] 
    let bingokaart = behandeling.bingokaart ? behandeling.bingokaart : [];
    return { bingokaart };
}
export const actions = {
    default: async ({ request }) => {
        // Maak een nieuw array aan voor een nieuwe bingokaart. Plaats hier de gecheckde en niet gecheckde velden in na submit. hier komen objecten in per vakje
        let newCardState = [];

        // haal alle gecheckte veldfen op van het formulier
        const data = await request.formData();
        let checkedFields = data.getAll('bingocard-field');
        const behandelingenReponse = await fetch('https://fdnd-agency.directus.app/items/behandeling?limit=1&sort=-datum') // haal meest recente behandeling op. Als er meer op een datum zijn, dan de laatste
        const behandelingenReponseData = await behandelingenReponse.json()
        let behandelingen = behandelingenReponseData.data[0]
        // Haal de bingokaart op van de laatste behandeling
        let lastbingokaart = behandelingen.bingokaart

        // loop door activiteiten van huidige bingokaart. Is activiteit ook aanwezig in de gecheckte velden, voeg dan een object toe waar de waarde checked true is, anders een met de waarde checked false.
        lastbingokaart.forEach(bingosquare => {
            if(checkedFields.includes(bingosquare.activiteit)){
                newCardState.push({activiteit: bingosquare.activiteit,checked: true })
            }else{
               newCardState.push({activiteit: bingosquare.activiteit,checked: false })
            }
        });
        // Thanks, chat, voor het genereren van de huidige datum en daarvan het begin en het eind van de dag, van jouw eigen tijdzone
            const today = new Date();

            const start = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                0, 0, 0, 0
            );

            const end = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                23, 59, 59, 999
            );
            function toLocalISOString(date) {
                const pad = (n) => n.toString().padStart(2, '0');
                return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
            }

            const startString = toLocalISOString(start);
            const endString = toLocalISOString(end);
        //

        // zoek naar de meest recente behandeling van vandaag
        const url = `https://fdnd-agency.directus.app/items/behandeling?filter[datum][_between]=${startString},${endString}&limit=1&sort=-datum`;
        const todayBehandeling =  await fetch(url)
        const todayBehandelingReponseData = await todayBehandeling.json()
        let todayBehandelingData = todayBehandelingReponseData.data;

        // als er vandaag geen behandeling was, posten, anders pas de bingokaart aan van de meest recente behandeling
        if(!todayBehandelingReponseData.data || todayBehandelingData.length == 0){
            const todaydatetime = today.toISOString().slice(0, 19);
            /// POSTEN
            const recordResponse = await fetch('https://fdnd-agency.directus.app/items/behandeling', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token.access_token
                },
                body: JSON.stringify({
                    beschrijving: "Geen beschrijving",
                    datum: todaydatetime,
                    bingokaart: newCardState
                }),
            });
        }
        else{
            // PATCH de bingokaart
            const recordId = todayBehandelingData[0].id;
            const patchRes = await fetch(`https://fdnd-agency.directus.app/items/behandeling/${recordId}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': token.access_token
                },
                body: JSON.stringify({
                    bingokaart: newCardState 
                })
            });
            const patchResult = await patchRes.json();
        }
        return {
            success: true,
            message: "Yay!!",
            newCardState
        };
    }
};