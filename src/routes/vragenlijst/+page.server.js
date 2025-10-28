/// AUTHENTICATIE

import { createDirectus, authentication } from '@directus/sdk';
import { serialize } from 'cookie';
import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_URL } from '$env/static/private';
const client = createDirectus(DIRECTUS_URL).with(authentication());
const token = await client.login({
    email: DIRECTUS_EMAIL,
    password: DIRECTUS_PASSWORD
});

////

export async function load({ cookies }){
    const vragenReponse = await fetch('https://fdnd-agency.directus.app/items/vraag') // meest recent
    const vragenReponseData = await vragenReponse.json()
    let vragen = vragenReponseData.data
    let agreementsScales = [
        { text: "Zeer mee oneens" },
        { text: "Oneens" },
        { text: "Neutraal" },
        { text: "Eens" },
        { text: "Zeer mee eens" },
    ];
    var s = vragen.sort(func);  
    function func(a, b) {  
        return 0.5 - Math.random();
    }  
    console.log(vragen)
    const sortedQuestions = [];
    const added = {};
    for (const vraag of vragen) {
    switch (vraag.stofje) {
        case '1':
        if (!added['1']) {
            sortedQuestions.push(vraag);
            added['1'] = true;
        }
        break;
        case '2':
        if (!added['2']) {
            sortedQuestions.push(vraag);
            added['2'] = true;
        }
        break;
        case '3':
        if (!added['3']) {
            sortedQuestions.push(vraag);
            added['3'] = true;
        }
        break;
        case '4':
        if (!added['4']) {
            sortedQuestions.push(vraag);
            added['4'] = true;
        }
        break;
        default:
        break;
    }

    // stop early if you already have one per stofje
    if (sortedQuestions.length === 4) break;

    }
    
    sortedQuestions.sort((q1, q2) => {
    return q1.stofje - q2.stofje;
    });
    console.log(sortedQuestions)
    cookies.set('sortedQuestions', JSON.stringify(sortedQuestions), {
        path: '/',
        httpOnly: true
    });
    return { vragen: sortedQuestions, agreementsScales };
}


export const actions = {
    default: async ({ request, cookies  }) => {
        // Maak een nieuw array aan voor een nieuwe antwoorden op de vragenlijst.
        let newQuestionsarray = [];
        const vragen = JSON.parse(cookies.get('sortedQuestions') || '[]');
        // haal alle gecheckte veldfen op van het formulier
        const data = await request.formData();
        let vragenAmount = vragen.length;
        vragen.forEach( (vraag, i) =>{
            let curQuestionValue = data.getAll('q-'+ (i + 1));
            newQuestionsarray.push({vraag: vraag.vraag, antwoord: curQuestionValue})
        })
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
        let lastbingokaart;
        console.log(todayBehandelingReponseData.data);
        // if(!todayBehandelingData.bingokaart){
        //     const lastBingoCardurl = `https://fdnd-agency.directus.app/items/behandeling?filter[bingokaart][_nnull]=true&limit=1&sort=-datum`;
        //     const lastBingoCardFetch =  await fetch(lastBingoCardurl)
        //     const lastBingoCardFetchJson = await lastBingoCardFetch.json()
        //     const lastBingoCardFetchData = lastBingoCardFetchJson.data;
        //     lastbingokaart = lastBingoCardFetchData[0].bingokaart;
        // }
        // else{
        //     lastbingokaart = todayBehandelingData[0].bingokaart;
        // }

        // als er vandaag geen behandeling was, posten, anders pas de vragenlijst aan van de meest recente behandeling
        if(!todayBehandelingReponseData.data || todayBehandelingData.length == 0){
            const lastBingoCardurl = `https://fdnd-agency.directus.app/items/behandeling?filter[bingokaart][_nnull]=true&limit=1&sort=-datum`;
            const lastBingoCardFetch =  await fetch(lastBingoCardurl)
            const lastBingoCardFetchJson = await lastBingoCardFetch.json()
            const lastBingoCardFetchData = lastBingoCardFetchJson.data;
            lastbingokaart = lastBingoCardFetchData[0].bingokaart;
            console.log(lastbingokaart)
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
                    bingokaart: lastbingokaart,
                    vragenlijst: newQuestionsarray
                }),
            });
        }
        else{
            // PATCH de vragenlijst
            const recordId = todayBehandelingData[0].id;
            // If for some reason a treatment has no bingocard and no questions answers
            if(!todayBehandelingData.bingokaart){
                const lastBingoCardurl = `https://fdnd-agency.directus.app/items/behandeling?filter[bingokaart][_nnull]=true&limit=1&sort=-datum`;
                const lastBingoCardFetch =  await fetch(lastBingoCardurl)
                const lastBingoCardFetchJson = await lastBingoCardFetch.json()
                const lastBingoCardFetchData = lastBingoCardFetchJson.data;
                lastbingokaart = lastBingoCardFetchData[0].bingokaart;
            }
            else{
                lastbingokaart = todayBehandelingData[0].bingokaart;
            }
            ///
            const patchRes = await fetch(`https://fdnd-agency.directus.app/items/behandeling/${recordId}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': token.access_token
                },
                body: JSON.stringify({
                    bingokaart: lastbingokaart,
                    vragenlijst: newQuestionsarray 
                })
            });
            const patchResult = await patchRes.json();
        }
        return {
            success: true,
            message: "Yay!!",
        };
    }
};