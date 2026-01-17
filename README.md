# Herstelkompas (Zelfzorg aan zee)

[🇬🇧 Read this in English](README.md)

## Over het project
**Herstelkompas (Zelfzorg aan zee)** is een online platform voor cliënten met **long COVID** en andere omstandigheden, zoals **burn-out** en **letselschade**. Het platform helpt cliënten om hun hersteltraject overzichtelijk te volgen, met ondersteuning rondom (begeleide) activiteiten zoals **surfen**.

Surfen kan bijdragen aan herstel doordat het **fysieke activiteit** (endorfines, minder stress), **natuurbeleving** (water, zonlicht) en een **mentale reset** (focus op het nu, doorbreken van routines) combineert. In sommige trajecten wordt dit ingezet als **surfterapie**, waarbij professionele begeleiding belangrijk is.

## Wat hebben we gebouwd?
Een cliëntomgeving waarin gebruikers:
- **Behandelingen** kunnen inzien
- **Scans / documenten** kunnen toevoegen
- Een **bingokaart** kunnen invullen als motivatietool (voortgang bijhouden en afronden stimuleren)

## Screenshots

### Client → Behandelingen → Bingokaart
<img width="716" height="322" alt="Bingokaart" src="https://github.com/user-attachments/assets/876379f4-0bdd-4f92-a453-77435a75776d" />

### Client → Behandelingen → Vragenlijst (FAQ-stijl)
<img width="754" height="274" alt="Vragenlijst" src="https://github.com/user-attachments/assets/7083f7b3-01c3-4ee5-847c-92a3575ad1f3" />

## Ontwerpkeuzes & inspiratie
- **Thema:** surfen, zee, rust
- **Kleuren:** blauw en wit (aansluitend bij water/vertrouwen)
- **Layout:** onderdelen zijn rustig en scanbaar opgezet in een **FAQ-achtige stijl**
- **Bingokaart-overzicht:** links gecentreerd om de FAQ-layout consistent te houden

## Tech stack
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Directus](https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge&logo=directus&logoColor=white)
![SvelteKit](https://img.shields.io/badge/sveltekit-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Team & opdracht
Dit platform is ontwikkeld als afstudeerproject door FDND-studenten:
- **Kerem Tutucu**
- **Dylan [Achternaam]** *(TODO)*
- **Ties [Achternaam]** *(TODO)*

Begeleiding: **Joost [Achternaam]** *(TODO)*  
Opdrachtgevers: **Rosalie Denneman** en **[Naam]** *(TODO)*

## Installatie & runnen

### Vereisten
- Node.js (LTS aangeraden)
- Toegang tot een Directus instance (URL + credentials/token)

### Installeren
```bash
npm install

Development server

npm run dev

Build (production)

npm run build
npm run preview

Environment variables

Maak een .env bestand aan in de root van het project:

PUBLIC_DIRECTUS_URL=
DIRECTUS_TOKEN=

Code & data-verwerking (Directus)

Voorbeeld (pas aan naar jullie implementatie):
	•	Data wordt opgehaald uit Directus via de REST API (collections zoals clients, treatments, bingo_cards, uploads/scans).
	•	Rollen/rechten bepalen welke data een cliënt ziet.
	•	Uploads worden gekoppeld aan een cliënt en zijn terug te vinden onder Scans.
	•	Bingokaart-items slaan status op (bijv. done, date, notes) zodat voortgang zichtbaar blijft.

Projectstructuur (voorbeeld)

src/
  routes/
  lib/
static/
  icons/

Contributing
	1.	Maak een branch: feat/naam-van-feature
	2.	Commit met duidelijke messages
	3.	Open een merge request / pull request met uitleg + screenshots (indien UI)

Licentie

TODO – voeg hier jullie licentie toe (bijv. MIT) of laat dit weg als het intern blijft.

