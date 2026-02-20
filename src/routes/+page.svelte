<script>
  import { ButtonLink, InfoCard } from "$lib";
</script>
<header>
    <a href="/">
        <img src="/img/logozzazsingle.png" alt="Logo">
    </a>

    <nav>
        <ul>
            <li><a href="/dashboard" data-sveltekit-prefetch>Afspraken</a></li> 
            <li><a href="/dashboard/scans" data-sveltekit-prefetch>Scans</a></li>
            <li><a href="/dashboard/behandelingen" data-sveltekit-prefetch>Behandelingen</a></li>
        </ul>
    </nav>

    <ButtonLink name="Mijn Zelf Zorg" src="#" variant="secondary" />
    <ButtonLink name="Contact" src="#" variant="primary" />

</header>

<main>
    <section title="zelfzorg">
        <h2>ZELFZORG AAN ZEE</h2>
        <p>Surftherapie voor hersenletsel, long-covid en burn-out</p>
        <div>
            <div>
                <h3>Nieuw bij Zelfzorg aan Zee?</h3>
                <p>Plan direct een kennismaking of intake. Wij begeleiden je van eerste golf tot duurzaam herstel.</p>
                <ButtonLink name="Maak een afspraak"  src="#" variant="primary"/>
            </div>
            <div>
                <h3>Al deelnemer?</h3>
                <p>Log in op jouw persoonlijke dashboard en bekijk jouw voortgang.</p>
                <ButtonLink name="inlogen"  src="#" variant="secondary"/>
            </div>
        </div>
    </section>

    <section title="herstelomgeving" style="background-color: #D6EAF5;">
        <h2>Jouw herstelomgeving</h2>
        <p>Als deelnemer van Zelfzorg aan Zee krijg je toegang tot jouw persoonlijke herstelomgeving. Hier vind je in één oogopslag de drie belangrijkste onderdelen van jouw traject:</p>
        <InfoCard
	        title="Scans"
	        text="Bekijk jouw Bekijk jouw 3D-EEG hersenbeelden en zie hoe jouw hersenactiviteit verandert tijdens het programma. Inzicht in je voortgang, zichtbaar gemaakt.3D-EEG hersenbeelden..."
	        img="/img/brain.svg"
	        alt="brain icon"
	        href="/"
        />
        <InfoCard
	        title="Behandelingen"
	        text="Overzicht van jouw surfsessies, gesprekken en opdrachten. Je ziet wat je hebt gedaan en wat de volgende stap is in jouw herstelplan."
	        img="/img/brain.svg"
	        alt="Behandelingen icon"
	        href="/"
        />
        <InfoCard
	        title="Vragenlijsten"
	        text="Regelmatig meten we jouw ervaringen en klachten. Vul eenvoudig jouw vragenlijsten in en volg hoe klachten afnemen en energie toeneemt."
	        img="/img/brain.svg"
	        alt="Vragenlijsten icon"
	        href="/"
        />
        
        <div>
            <h3>Terugkerende deelnemer?</h3>
            <p>Klik direct op een van de blokken hierboven en je gaat meteen naar die pagina. Of klik op de 'Mijn Zelf Zorg' button rechtsboven op de pagina. Nog niet ingelogd? Je wordt automatisch doorgestuurd naar de inlogpagina.</p>
        </div>

    </section>

    <section title="over zelfzorg aan zee">
        <h2>Over Zelfzorg aan Zee</h2>
        <p>Zelfzorg aan Zee biedt een uniek revalidatieprogramma voor mensen met hersenletsel, long-covid of burn-out. Wij combineren fysieke therapie (surfen), inzichtgevende opdrachten en de kracht van blauw water (Blue Mind).</p>    
        <p>Ons doel? Niet alleen herstel van klachten, maar terugkeer naar zinvol leven: werk, vrijwilligerswerk, zelfstandig wonen of het najagen van je dromen.</p>
    </section>

</main>
