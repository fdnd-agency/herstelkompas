
# Herstelkompas

Herstelkompas is een digitaal webplatform, ontwikkeld met SvelteKit, dat cliënten met Long COVID (en aanverwante klachten zoals burn-out en letselschade) ondersteunt bij het monitoren van herstel. Het platform maakt herstel inzichtelijk met een visuele, toegankelijke en persoonlijke weergave van voortgang. Hierdoor kunnen zorgverleners beter volgen hoe het traject verloopt en worden cliënten extra gemotiveerd om consequent aan hun herstel te werken.

Het project is gerealiseerd binnen FDND (Front-End Design & Development) door Kerem Tutucu, Dylan van Nierop en Ties Beeftink, in opdracht van Zelfzorg aan Zee.


# Demovideo

Hieronder een demovideo waarin de applicatie wordt laten zien

[Demovideo](https://vimeo.com/1157505344?share=copy&fl=sv&fe=ci)


---

🔗 Live / Repo


Repository: https://github.com/fdnd-agency/herstelkompas


Live link: [herstelkompas.netlify.app](herstelkompas.netlify.app)

---

## Opdrachtgever: Zelfzorg aan Zee

Zelfzorg aan Zee combineert fysiotherapie, gerichte oefeningen en de kracht van water (Blue Mind Theory) om herstel te bevorderen. Het programma ondersteunt mensen met hersenletsel, Long COVID en burn-out bij het verbeteren van zowel cognitieve als fysieke functies.

Een medisch gespecialiseerd revalidatieteam werkt samen met ervaren ervaringsdeskundigen om deelnemers te begeleiden richting een betekenisvolle terugkeer naar werk, vrijwilligerswerk of persoonlijke doelen. Het traject is pas afgerond wanneer de deelnemer tevreden is met het resultaat.

---

### Design challenge

Ontwerp en ontwikkel een intuïtieve en gebruiksvriendelijke webtool waarmee cliënten en zorgverleners herstel kunnen volgen. De tool moet:
	•	Visueel aantrekkelijk en eenvoudig navigeerbaar zijn
	•	Betrouwbare en inzichtelijke hersteldata tonen
	•	Personaliseerbare inzichten en aanbevelingen ondersteunen op basis van individuele trajecten

---

### Team & rollen

Het team bestaat uit Ties, Kerem en Dylan. Ieder teamlid ontwikkelde een eigen ontwerpconcept; uiteindelijk is gekozen voor het ontwerp van Ties, omdat dit het beste aansloot bij de doelstellingen en doelgroep. Vervolgens werkte het team gezamenlijk aan de technische implementatie en verbetering van de gebruikerservaring.

Bijdragen (o.a.)	
* Kerem - herontwerp en ontwikkeling van Client → Behandelingen → Bingokaart
* Kerem - Herwerking van Vragenlijst naar een duidelijke FAQ-achtige layout
* Dylan - Ontwikkeling van vragenlijst, Sidebar/Mobile Menu en Scans
* Ties & Kerem → (Door)ontwikkeling van het ontwerp en de visuele richting
* Team → Gezamenlijke front-end implementatie, optimalisaties en toegankelijkheid

---

### Ontwerpkeuzes & inspiratie
* Kleuren
* De huisstijl van Zelfzorg aan Zee is zo goed mogelijk benaderd.
* De originele gele kleur gaf onvoldoende contrast met witte tekst; daarom is deze vervangen door groen (aanpasbaar indien gewenst).
* Vormtaal
* Afgeronde hoeken zorgen voor een vriendelijke, benaderbare uitstraling en verwijzen subtiel naar de golven van de zee.
* Navigatie
* Een linkersidebar biedt snelle toegang tot Home, Bingokaart, Behandelingen, Scans en Vragenlijst.
* Op desktop is de sidebar altijd zichtbaar; op tablet en mobiel verandert deze in een hamburgermenu.

---

### Functionaliteitsoverzicht

#### Welkompagina
* Verwelkomingspagina

#### Vragenlijst
* Interactieve pagina waarop een vragenlijst kan worden beantwoord. Deze vragen komen uit de database. Deze vragen zijn gebaseert op vier hormonen waarvan ze gewenst zijn vrij te komen tijdens de sessies. Van elke stof wordt willekeurig een vraag uitgekozen. In totaal beantwoord de client 4 vragen. Als deze vragenlijst wordt opgeslagen komt dit onder de behandeling van vandaag te staan.

#### Scans
* Interactieve pgina waaorp twee scans (voor en na behandeling) en een bijbehorende beschrijving kunne worden ingevuld en verzonden. Deze worden per behandeloing opgeslagen


#### Bingokaart
* Interactieve bingokaart waarmee cliënten doelen kunnen afvinken.
* Elk vakje heeft een kleine vierkant linksboven die vult bij selectie; het vakje verandert van kleur (nu groen) zodra het voltooid is.
* De status wordt per behandeling/dag opgeslagen; als er nog geen behandeling bestaat voor de dag, wordt automatisch een nieuwe entry aangemaakt.
* Bij 3, 5 of 7 vakjes afgekruist heeft de cliënt bingo en opent er met een confetti animatie een popup met daarin de gewonnen prijs.

#### Behandelingen (overzicht)
* Interactieve bingokaart waarmee cliënten doelen kunnen afvinken.
* Overzicht van alle behandelingen als gestapelde balken met datum en korte omschrijving.
* Een pijl per item geeft aan dat je kunt doorklikken naar details.


#### Behandeling detail
* Toont de status van de bingokaart, scans en vragenlijst voor die specifieke datum.
* Onder de bingokaart staat een opslaanknop met loading- en success-states voor duidelijke feedback.

---

### Tech stack & libraries

#### SvelteKit

SvelteKit is een modern framework bovenop Svelte, met ondersteuning voor routing, server-side rendering (SSR), data fetching en build-optimalisatie. Door compile-time rendering levert het doorgaans kleinere en snellere bundels op dan veel alternatieven.

@directus/sdk

@directus/sdk biedt een toegankelijke interface om de Directus API te gebruiken en ondersteunt authenticatie voor acties die afgeschermd zijn.

---

Installatie
	1.	Clone de repository:

git clone https://github.com/fdnd-agency/herstelkompas.git


	2.	Ga naar de projectmap:

cd herstelkompas


	3.	Installeer dependencies:

npm install


	4.	Start de development server:

npm run dev


	5.	Open in je browser:
	•	http://localhost:5173 (kan afwijken, check je terminal output)

---

### Scripts

npm run dev       # Start dev server
npm run build     # Build voor productie
npm run preview   # Preview van productiebuild


⸻

### Toegankelijkheid

We hebben gedurende ontwikkeling rekening gehouden met toegankelijkheid, o.a. door:
	•	Duidelijke navigatiestructuur (desktop sidebar / mobiel menu)
	•	Visuele feedback (loading/success states)
	•	Contrastkeuzes (huisstijl aangepast voor betere leesbaarheid)

---

### Bijdragen

Wil je bijdragen?
	1.	Maak een branch:

git checkout -b feature/jouw-feature


	2.	Commit je wijzigingen:

git commit -m "feat: beschrijving van wijziging"


	3.	Push naar GitHub en open een Pull Request.

---
