
# Herstelkompas – Technische Documentatie

## 1. Projectoverzicht

**Projectnaam:** Herstelkompas  

Herstelkompas is een webapplicatie voor cliënten van *Zelfzorg aan Zee*.  
De applicatie toont de voortgang van cliënten per behandeling door:

- Het afvinken van activiteiten op een **herstel-bingokaart**
- Het invullen van een **vragenlijst** (om inzicht te krijgen in vrijgekomen hersenstofjes)
- Het uploaden van **scans vóór en na** een sessie

Op basis hiervan krijgen zowel de **cliënt** als de **behandelaar** inzicht in de progressie per behandeling.

---

## 2. Techstack

### Front-end
- **Framework:** SvelteKit
- **Taal:** HTML / JavaScript
- **Build tool:** Vite
- **Hosting:** Netlify

### Back-end / CMS
- **CMS:** Directus (headless)
- **API:** REST
- **Authenticatie:** Directus SDK (email + password)

### Dependencies (belangrijkste)
- `@sveltejs/kit`
- `svelte`
- `vite`
- `@directus/sdk`
---

## 3. Projectstructuur

De applicatie volgt de standaard SvelteKit-structuur.

### Belangrijke mappen

```

/routes
├─ +page.svelte
├─ +page.server.js
└─ ...
/lib
└─ components
/docs
└─ README.md
/static
/datamodel.png

````

### Toelichting
- **`/routes`**  
  Bevat alle pagina’s en server-side logica.  
  Elke route kan een eigen `+page.server.js` hebben voor data fetching.

- **`/lib/components`**  
  Herbruikbare Svelte-componenten zoals kaarten, lijsten en formulieren.

- **`/docs`**  
  Bevat deze technische documentatie.

- **`/datamodel.png`**  
  Visualisatie van het datamodel zoals ingericht in Directus.

---

## 4. Codeconventies

Het project volgt de **FDND code conventies**:
- Duidelijke bestandsnamen
- Scheiding tussen data, logica en presentatie
- Herbruikbare componenten in `/lib/components`

---

## 5. Datamodel

Het volledige datamodel is vastgelegd in een afbeelding:

**Zie:** <a href="https://github.com/fdnd-agency/herstelkompas/blob/dev/docs/datamodel.png" target="_blank">datamodel.png</a>

Het datamodel wordt beheerd in **Directus** en bevat onder andere:
- Relaties tussen behandelingen
- Bingo-activiteiten
- Vragenlijsten
- Scan-uploads (voor en na)

Voor documentatie-doeleinden wordt het datamodel op **hoog niveau** beschreven; de exacte velddefinities zijn te vinden in Directus.

---

## 6. Belangrijke Componenten

### Kerncomponenten

#### `QuestionListClient`
- Toont de vragenlijst aan de cliënt
- Stuurt antwoorden naar Directus
- Gebruikt REST API calls

#### `BingoCard`
- Visualiseert de herstel-bingokaart
- Activiteiten kunnen worden afgevinkt
- Status wordt opgeslagen in Directus

#### `Treatment`
- Een behandeling in de lijst in het overzicht van behandelingen

#### `TreatmentBingo`
- Overzicht van één behandeling
- Combineert:
  - Bingo-voortgang
  - Vragenlijstresultaten
  - Uploads van scans

---

## 7. Authenticatie & Autorisatie

Authenticatie verloopt via **Directus** met de officiële SDK.

### Voorbeeld authenticatiecode

```js
import { createDirectus, authentication } from '@directus/sdk';
import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_URL } from '$env/static/private';

const client = createDirectus(DIRECTUS_URL).with(authentication());

const token = await client.login({
  email: DIRECTUS_EMAIL,
  password: DIRECTUS_PASSWORD
});
````

### Uitleg

* Inloggegevens worden veilig opgeslagen in **environment variables**
* Authenticatie gebeurt server-side
* Het verkregen token wordt gebruikt voor API-calls naar Directus

---

## 8. CMS-configuratie (Directus)

### Type CMS

* **Headless CMS:** Directus

### Contenttypes

De exacte contenttypes zijn te vinden in het datamodel, maar bestaan o.a. uit:

* Inputvelden
* Bestandsuploads (scans)
* Relaties (one-to-many, many-to-one)
* Afbeeldingen

### Contentbeheer

* Content wordt beheerd door **developers**
* Content wijzigt dynamisch wanneer:

  * Cliënten hun bingo aanpassen
  * Behandelaars behandelingen bijwerken

### Koppeling met front-end

* Communicatie via **REST API**
* Data wordt opgehaald in `+page.server.js`

---

## 9. API-gebruik

* Er worden **geen externe API’s** gebruikt
* Alleen de **Directus REST API**
* Geen aparte API-documentatie nodig buiten Directus zelf

---

## 10. Samenvatting voor nieuwe developers

1. Bekijk eerst `/routes`
2. Leer de componenten in `/lib/components` kennen
3. Bestudeer `datamodel.png`
4. Controleer Directus voor contenttypes en relaties
5. Gebruik de Directus SDK voor data en authenticatie


```

