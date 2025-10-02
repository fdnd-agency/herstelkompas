import { createDirectus, authentication } from '@directus/sdk';
import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_URL } from '$env/static/private';
const client = createDirectus(DIRECTUS_URL).with(authentication());
const token = await client.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD
});
export async function load({}){
    const behandelingenReponse = await fetch('https://fdnd-agency.directus.app/items/behandeling?limit=1&sort=-datum') // meest recent
    const behandelingenReponseData = await behandelingenReponse.json()
    let behandelingen = behandelingenReponseData.data[0]

    return { behandelingen: behandelingenReponseData.data, bingokaart: behandelingen.bingokaart};
}
export const actions = {
    default: async ({ request }) => {
        console.log("test1")
        let newCardState = [];
        const data = await request.formData();
        let checkedFields = data.getAll('bingocard-field');

        const behandelingenReponse = await fetch('https://fdnd-agency.directus.app/items/behandeling/1') // nog meest recente ophalen hier
        const behandelingenReponseData = await behandelingenReponse.json()
        let behandelingen = behandelingenReponseData.data
        let lastbingokaart = behandelingen.bingokaart
        lastbingokaart.forEach(bingosquare => {
            if(checkedFields.includes(bingosquare.activiteit)){
                newCardState.push({activiteit: bingosquare.activiteit,checked: true })
            }else{
               newCardState.push({activiteit: bingosquare.activiteit,checked: false })
            }
        });
        console.log(newCardState)
        const todayBehandeling =  await fetch('https://fdnd-agency.directus.app/items/behandeling?filter={"datum":%20"2025-10-01T12:00:00"}') // Hier moet huidige datum in
        const todayBehandelingReponseData = await todayBehandeling.json()
        let todayBehandelingData = todayBehandelingReponseData.data;
        const recordId = todayBehandelingData[0].id;

        const now = new Date();
        const todaydatetime = now.toISOString().slice(0, 19);
        console.log(todaydatetime); 
        if(todayBehandelingData.length == 0){
            console.log("leeg")
            /// POSTEN
            const recordResponse = await fetch('https://fdnd-agency.directus.app/items/behandeling', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token.access_token
                },
                body: JSON.stringify({
                    beschrijving: "Leeg",
                    datum: todaydatetime,
                    bingokaart: newCardState
                }),
            });
        }
        else{
            // PATCH the bingokaart
            console.log(recordId)
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
            console.log(patchResult);
        }
        return {
            success: true,
            message: "Yay!!",
            newCardState
        };
    }
};
