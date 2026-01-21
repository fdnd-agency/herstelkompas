# Handover – Herstelkompas

Dit document is bedoeld als overdracht voor het volgende team dat verder werkt aan het project **Herstelkompas**.

---

## Huidige status van het project

De **MVP is afgerond voor één gebruiker**.
De applicatie is functioneel, maar er zijn nog enkele **kleine verbeterpunten** naar aanleiding van:

* professionele reviews
* de sprint review van sprint 17

Daarnaast is er **nog geen inlogsysteem** geïmplementeerd. Hierdoor kan momenteel slechts **één cliënt** gebruikmaken van de applicatie.

---

## Werkende features

De volgende kernfunctionaliteiten werken:

* **Herstel-bingokaart**
  Cliënten kunnen activiteiten afvinken die hun voortgang tonen.

* **Scans uploaden**
  Upload van scans vóór en na een sessie.

* **Vragenlijst**
  Cliënten vullen een vragenlijst in per sessie.

* **Overzicht per behandeling**
  De bingokaart, scans en vragenlijst zijn per behandeling terug te lezen.

---

## Grootste aandachtspunten / uitdagingen

* **Authenticatie & autorisatie**
  Er is nog geen inlogsysteem. Dit is nodig om meerdere cliënten en behandelaars te ondersteunen. De huidige setup is gebouwd voor één gebruiker.

---

## Aanbevolen eerste stap voor het volgende team

Stel een `.env` in met jouw inloggegevens van Directus op basis van de `.env.example`

Zorg ervoor dat:

* de juiste Directus-URL is ingesteld
* de Directus credentials correct zijn ingevuld

Dit is noodzakelijk om de verbinding met de **Directus-omgeving te autoriseren** en de applicatie lokaal of in een nieuwe omgeving te laten werken.

Mochten er vragen zijn, de docenten zijn er om je te helpen. Mocht je er dan nog steeds niet uitkomen, kan je ons altijd bereiken via de FDND Discord!
