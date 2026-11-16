# 🤝 Afspraken over samenwerking

## Communicatie
- Overleg vindt plaats via **Microsoft Teams**.  
- Iedereen reageert binnen **24 uur**.  
- Feedback verloopt via **GitHub Issues** (alleen bij hoge urgentie via Microsoft Teams).  

## Samenwerking
- Iedereen is verantwoordelijk voor zijn eigen rol.  
- We helpen elkaar waar nodig om het gezamenlijke doel te bereiken.  

## Besluitvorming
- Belangrijke keuzes nemen we **samen**.  
- Wanneer er geen consensus is, hakt de **SCRUM Master** de knoop door.  

## Kwaliteit & Deadlines
- Werk wordt **op tijd** opgeleverd.  
- We controleren elkaars werk op **kwaliteit** voordat het wordt ingeleverd.  

## Respect & Betrokkenheid
- We luisteren naar ieders mening en ideeën.  
- Iedereen krijgt de kans om actief bij te dragen.  
- We respecteren elkaars minder sterke kanten en gaan daar op een constructieve manier mee om.  

## (Code) Conventies
- Bij het aanmaken van nieuwe class names, maken we gebruik van kebab-case
- Gebruik maken componenten en partials
- Net gebruik van white space ( 4 lijnen ) en comments waar nodig
- Duidelijke commits gekoppeld aan de issues
- Regelmatig gebruik van code refactoring
- We houden drie dagen per week een stand-up om onze voortgang en eventuele problemen te bespreken.
- We gebruiken GitHub Issues om taken en voortgang bij te houden.
- We werken met branches en commits volgens de FDND-conventies.
- We vragen feedback via pull requests en code reviews.
- We documenteren schetsen, technische keuzes en feedback in de bijbehorende issues.
- We helpen elkaar waar nodig, bijvoorbeeld door samen aan een probleem te werken.

## Legenda MoSCoW

| Label | Betekenis |
|---|---|
| **Must have** | Essentiële functionaliteiten die nodig zijn om ons sprintdoel te behalen. Deze moeten deze sprint worden afgerond. |
| **Should have** | Belangrijke verbeteringen die bijdragen aan het sprintdoel, maar niet noodzakelijk zijn om de belangrijkste functionaliteiten werkend te krijgen. |
| **Could have** | Extra verbeteringen die we oppakken als er tijd over is, zoals subtiele animaties en visuele aanpassingen. |
| **Won't have** | Functionaliteiten of verbeteringen die we bewust uitstellen naar een volgende sprint. |

We bepalen de MoSCoW-labels gezamenlijk op basis van ons sprintdoel. Als we meerdere Must haves hebben, bespreken we tijdens de stand-ups welke we als eerste oppakken.

## Puntenschaal pokerplanning

| Punten | Tijd | Complexiteit |
|---|---|---|
| 1 | 0,5 dag | Heel makkelijk |
| 2 | 1 dag | Makkelijk |
| 3 | 2 dagen | Klein |
| 4 | 3 dagen | Redelijk makkelijk |
| 5 | 4–5 dagen | Gemiddeld |
| 6 | 6–7 dagen | Redelijk complex |
| 7 | 8–9 dagen | Complex |
| 8 | 10–11 dagen | Erg complex |
| 9 | 12–14 dagen | Zeer complex |
| 10 | 15 dagen | Hele sprint |

## Gitflow
We werken deze sprints volgens de Git Flow workflow strategie:

<img width="559" height="648" alt="492315217-0568b305-f1d8-4c78-962b-0f9d34342331" src="https://github.com/user-attachments/assets/ed577032-d00c-4be2-ac94-d2a7072f1a09" />

## Branches & Commits

### Branches
Maak branches altijd automatischvanuit een GitHub Issue of handmatig op de juiste manier

**Formaat:**
```
[nummer]-[korte-beschrijving]
```
**Voorbeeld:**
```
12-fix-image-upload
```
---

### Commits
Commits moeten altijd naar het issue verwijzen.

**Formaat:**
```
#[nummer] beschrijving van de wijziging
```

**Voorbeelden:**
```
#12 Fixed image upload
#12 Fixed image upload, also #22 added support for multiple formats
```

## Samenwerking met GIT.

We werken enkel in featurebranches en maken een pull request naar de dev branch. Als we genoeg user stories hebben kunnen verwerkenm gaan we samen de website intensief testen zodat we een goede pull request kunnen opstellen naar de main branch


### Pull Requests

Maak voor elke wijziging een Pull Request vanuit de issue-branch.

**Vereisten:**
- Gebruik het vaste PR-template
- Koppel minimaal één issue (`Resolves #nummer`)
- PR wordt pas gemerged na review

**PR-template:**
```
## What does this change?

Resolves issue #xxxxx

[livesite](https://livesite.com)

## How Has This Been Tested?

* [ ] User test
* [ ] Accessibility test
* [ ] Performance test
* [ ] Responsive Design test
* [ ] Device test
* [ ] Browser test

## Images

## How to review
```
**Reviewregels:**
- Minimaal één reviewer
- Geen directe merge door de auteur
- Feedback moet verwerkt zijn vóór merge

## 📌 Team Canvas

<img width="1765" height="1232" alt="Screenshot (568)" src="https://private-user-images.githubusercontent.com/13772434/708120844-ca11f442-41a6-4ecc-9681-7034e5e3c5b4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTQ4NTc4MTYsIm5iZiI6MTc5NDg1NzUxNiwicGF0aCI6Ii8xMzc3MjQzNC83MDgxMjA4NDQtY2ExMWY0NDItNDFhNi00ZWNjLTk2ODEtNzAzNGU1ZTNjNWI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjExMTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMTE2VDE5MzE1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMwMWE3Nzk2MzkzNzQ0YTg5ODdhMjZjNzc4NjVmOWNhZGVkODk4M2ViOWNmNzNjMjRjNDQ3ZjVmZTA1ZGUwYjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.SXuH-1CHD0G6Y-0EG8HG7HdU1-EgsSuU6wpa1nKbP_k" />


## Nieuwe afspraken [DATUM RETROSPECT]

op basis van de retrospect van sprint 16: [LINK RETROSCPECT S16 ISSUE] zijn er afspraken gemaakt voor komende sprints

## DoD en DoR


### DoR (Definition of Ready)
	•	Poker Done
	•	Assigned aan de juiste persoon
	•	Duidelijke Beschrijving
	•	Capaciteit Beschikbaar
	•	Deadline


### DoD (Definition of Done)
- De acceptatiecriteria zijn behaald.
- De code voldoet aan de FDND-conventies.
- De functionaliteit is getest.
- Belangrijke keuzes en eventuele schetsen zijn gedocumenteerd.
- De pull request is gereviewd.
- Het issue en de bijbehorende PR zijn aan elkaar gekoppeld.

## Postmortem
We steken de koppen bij elkaar en gaan samen af:
- Wat er goed ging
- Waarom we een post-mortem houden (wat ging er mis)
- Wat we kunnen verbeteren

# Sprintdoelen

## Sprint 16

Tijdens deze sprint willen we onze samenwerking als team verbeteren en de belangrijkste functionaliteiten van Herstelkompas verder maekn

We richten ons op:

- **Samenwerking:** Taken beter verdelen, elkaar helpen en tijdens stand-ups bespreken welke taken we als eerste oppakken.
- **Loading states en success states:** Gebruikers duidelijke feedback geven tijdens en na een actie.
- **Bingokaart:** De belangrijkste functionaliteiten afronden, zodat gebruikers hun voortgang kunnen bijhouden.
- **Magic link:** Inloggen via een magic link mogelijk maken voor patiënten en behandelaars.