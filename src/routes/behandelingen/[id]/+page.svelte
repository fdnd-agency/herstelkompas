<script>
  export let data;
  const activiteit = data.activiteit;

  // Datum formatteren (van Directus)
  const datum = new Date(activiteit.datum); // <-- veldnaam uit Directus
  const formattedDate = datum.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
</script>

<section class="behandeling">
  <header class="page-header">
    <h1>{formattedDate}</h1>
    <p>Hieronder info over de behandeling</p>
  </header>

  <nav aria-label="Hoofd navigatie" class="page-nav">
    <ul>
      <li>
        <a href="#" class="active">
          <img src="/icons/brain.svg" alt="" aria-hidden="true" />
          <span>Bingo kaart</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/frame-1.svg" alt="" aria-hidden="true" />
          <span>Scans</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/frame-2.svg" alt="" aria-hidden="true" />
          <span>Vragenlijst</span>
        </a>
      </li>
    </ul>
  </nav>

  <section aria-labelledby="bingokaart-titel" class="bingokaart">
    <h2 id="bingokaart-titel">
      De status van jouw bingokaart op {formattedDate}
    </h2>

    <ul class="kaart-grid">
      {#each activiteit.bingokaart as item}
        <li class:checked={item.checked}>
          <article>
            <header>
              <span class="dot" aria-hidden="true"></span>
            </header>
            <p>{item.activiteit}</p>
          </article>
        </li>
      {/each}
    </ul>
  </section>
</section>


<style>
  /* ===== Mobile-first (≥ 320 px) ===== */
  .behandeling {
    padding: 1.25rem 0.75rem;
    text-align: center;
    font-family: var(--font-regular);
  }

  
.page-header {
  text-align: left;
  align-items: flex-start;
  justify-items: start;
  padding-inline: 1.5rem; /* zorgt dat het uitlijnt met hamburger en logo */
  margin-top: 1.5rem;
}

.page-header h1 {
  color: var(--primary-color-dark);
  font-size: clamp(1.25rem, 4vw, var(--text-size-xl));
  font-family: var(--font-semibold);
  margin: 0; /* haalt standaardmarges weg */
}

.page-header p {
  color: var(--primary-color-dark);
  font-size: clamp(0.9rem, 3vw, var(--text-size-md));
  font-family: var(--font-medium);
  margin-top: 0.25rem;
  margin-bottom: 0; /* optioneel: voorkomt extra witruimte */
}

  /* ===== Navigatie ===== */
  .page-nav ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    padding: 0.5rem 0;
    margin: 1rem 0 1.25rem;
    border-bottom: 1px solid hsl(204, 33%, 85%);
  }

.page-nav a {
  display: flex;
  align-items: center; /* icoon + tekst verticaal gecentreerd */
  gap: 0.5rem; /* ruimte tussen icoon en tekst */
  text-decoration: none;
  color: var(--primary-color-dark);
  font-family: var(--font-semibold);
  font-size: clamp(0.7rem, 2.5vw, var(--text-size-sm));
  padding-bottom: 0.25rem;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease, filter 0.3s ease;
  padding-top: 2rem;
}

  .page-nav img {
    width: 18px;
    height: 18px;
    display: block;
    transition: filter 0.3s ease;
  }

  .page-nav a:hover {
    color: var(--primary-color-light);
  }

  .page-nav a:hover img {
    filter: brightness(1.2);
  }


  .page-nav a.active img {
    filter: brightness(1.4);
  }

  /* ===== Bingokaart ===== */
  .bingokaart h2 {
    font-size: clamp(0.85rem, 2.8vw, var(--text-size-sm));
    color: var(--primary-color-dark);
    font-family: var(--font-medium);
    margin-bottom: 1rem;
  }

.kaart-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
  gap: 0.5rem;
  justify-content: center;
  list-style: none;
  padding: 0 0.5rem;
  margin: 0 auto;
  max-width: 360px; /* voorkomt dat het te breed wordt */
  padding-top: 2.5rem;
}

.kaart-grid li {
  border-radius: 0.5rem;
  background-color: var(--primary-color-light);
  color: var(--color-white);
  display: grid;
  place-items: center;
  width: 100%;
  height: 89px;
  transition: background 0.3s, box-shadow 0.3s;
  position: relative;
}



  .kaart-grid li.checked {
    background-color: var(--color-green-accent);
   
  }

  .kaart-grid p {
    font-weight: 500;
    font-size: clamp(0.75rem, 2.5vw, var(--text-size-sm));
    padding: 0 0.25rem;
    font-family: var(--font-medium);
  }

  .dot {
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    width: 8px;
    height: 8px;
    background-color: var(--color-white);
    border-radius: 50%;
  }

/* ===== Desktop (≥ 1024 px) ===== */
@media (min-width: 1024px) {
  .behandeling {
    /* padding: 3rem 2rem; */
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
  }

  .page-header {
    text-align: left;
    margin-bottom: 1rem;
  }

  .page-header h1 {
    font-size: 1.5rem;
    color: var(--primary-color-dark);
    margin-bottom: 0.25rem;
  }

  .page-header p {
    color: var(--primary-color-dark);
    margin-bottom: 2rem;
  }

  /* Tabs bovenaan */
  .page-nav ul {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    list-style: none;
    border-bottom: 1px solid hsl(204, 33%, 85%);
    padding-bottom: 0.75rem;
    margin-bottom: 2rem;
  }

  .page-nav a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--primary-color-dark);
    font-size: 0.95rem;
    font-family: var(--font-semibold);
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease, color 0.3s ease;
  }

  .page-nav a.active {
    border-bottom-color: var(--primary-color-light);
  }

  .page-nav a:hover {
    color: var(--primary-color-light);
  }

  .page-nav img {
    width: 20px;
    height: 20px;
  }

  /* Bingokaart */
  .bingokaart {
    text-align: left;
  }

  .bingokaart h2 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color-dark);
  }


   @media (min-width: 1024px) {
    .kaart-grid {
      display: grid;
      grid-template-columns: repeat(3, 160px);
      grid-template-rows: repeat(3, 130px);
      gap: 1rem;
      justify-content: start;
    }

    .kaart-grid li {
      border-radius: 0.75rem;
      background-color: var(--primary-color-light);
      color: var(--color-white);
      width: 160px;
      height: 130px;
      display: grid;
      place-items: center;
      position: relative;
      transition: box-shadow 0.3s ease, transform 0.2s ease;
    }

    .kaart-grid li.checked {
      background-color: var(--color-green-accent);
      box-shadow: 0 0 16px rgba(19, 124, 38, 0.4);
    }

    .kaart-grid p {
      font-size: 0.85rem;
      text-align: center;
      font-family: var(--font-medium);
      padding: 0 0.4rem;
    }

    .dot {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      width: 8px;
      height: 8px;
      background-color: var(--color-white);
      border-radius: 50%;
    }
  }
}
</style>


