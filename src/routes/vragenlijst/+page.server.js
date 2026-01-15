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
    let questions = vragenReponseData.data
    let agreementsScales = [
        { text: "Oneens", align: "left" },
        { text: "Neutraal", align: "center" },
        { text: "Eens", align: "right" },
    ];
    var s = questions.sort(func);  
    function func(a, b) {  
        return 0.5 - Math.random();
    }  
    const sortedQuestions = [];
    const added = {};
    for (const question of questions) {
    switch (question.stofje) {
        case '1':
        if (!added['1']) {
            sortedQuestions.push(question);
            added['1'] = true;
        }
        break;
        case '2':
        if (!added['2']) {
            sortedQuestions.push(question);
            added['2'] = true;
        }
        break;
        case '3':
        if (!added['3']) {
            sortedQuestions.push(question);
            added['3'] = true;
        }
        break;
        case '4':
        if (!added['4']) {
            sortedQuestions.push(question);
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
    return { questions: sortedQuestions, agreementsScales };
}


export const actions = {
    default: async ({ request, cookies  }) => {
        // Maak een nieuw array aan voor een nieuwe antwoorden op de vragenlijst.
        let newQuestionsarray = [];
        const questions = JSON.parse(cookies.get('sortedQuestions') || '[]');
        // haal alle gecheckte veldfen op van het formulier
        const data = await request.formData();
        let questionsAmount = questions.length;
        questions.forEach( (question, i) =>{
            let curQuestionValue = data.getAll('q-'+ (i + 1));
            let relativeValue;
            switch(true){
                case curQuestionValue <= 33:
                    relativeValue = "Oneens"
                    break;
                case curQuestionValue > 33 && curQuestionValue < 66:
                    relativeValue = "Neutraal"
                    break;
                case curQuestionValue >= 66:
                    relativeValue = "Eens"
                    break;
                default:
                    relativeValue = "Neutraal"
                    break;
            }
            newQuestionsarray.push({vraag: question.vraag, antwoord: relativeValue})
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

        function countPositive(questionlist = []) {
            const weights = {
                "Eens": 1,
                "Neutraal": 0.5
            };
            return questionlist.reduce(
                (sum, v) => sum + (weights[v.antwoord] || 0),
                0
            );
        }
        function getFeedback(currentCount, previousCount) {
            if (currentCount <= 2 && previousCount <= 2) {
                return "Nagaan of de impuls voldoende is, of surfen de juiste stimulus is, kijken naar andere uitdagende activiteiten.";
            }

            if (currentCount == 4) {
                return "Perfecte sessie, op naar de volgende.";
            }

            if (currentCount >= 3) {
                return "Mooi resultaat, voor de begeleiding volgende sessie wel scherp blijven op verkrijgen van succeservaringen.";
            }

            if (currentCount >= 2) {
                return "Misschien een mindere sessie, kan gebeuren. Geen probleem als de volgende sessie weer beter is.";
            }

            if (currentCount >= 0) {
                return "Nagaan of de impuls voldoende is, of surfen de juiste stimulus is, kijken naar andere uitdagende activiteiten.";
            }

        }

        // latest question list
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);

        const latestQuestionlistURL = `https://fdnd-agency.directus.app/items/behandeling?filter[datum][_lt]=${todayStart.toISOString()}&filter[vragenlijst][_nnull]=true&sort=-datum&limit=1`;
        const latestTreatmentWithQuestionListFetch =  await fetch(latestQuestionlistURL)
        const latestTreatmentWithQuestionListReponseData = await latestTreatmentWithQuestionListFetch.json()
        let latestTreatmentWithQuestionListData = latestTreatmentWithQuestionListReponseData.data;

        let countPositivePrevious = countPositive(latestTreatmentWithQuestionListData[0].vragenlijst)
        let countPositiveCurrent = countPositive(newQuestionsarray)
        let feedbackMessage = getFeedback(countPositiveCurrent, countPositivePrevious);
        if (!feedbackMessage) {
            feedbackMessage = "Feedback is niet beschikbaar.";
        }

        let lastbingokaart;
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

        // als er vandaag geen behandeling was, posten, anders pas de vragenlijst aan van de meest recente behandeling
        if(!todayBehandelingReponseData.data || todayBehandelingData.length == 0){
            const lastBingoCardurl = `https://fdnd-agency.directus.app/items/behandeling?filter[bingokaart][_nnull]=true&limit=1&sort=-datum`;
            const lastBingoCardFetch =  await fetch(lastBingoCardurl)
            const lastBingoCardFetchJson = await lastBingoCardFetch.json()
            const lastBingoCardFetchData = lastBingoCardFetchJson.data;
            lastbingokaart = lastBingoCardFetchData[0].bingokaart;
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
            message: feedbackMessage,
        };
    }
};