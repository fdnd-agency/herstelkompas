<script>
  export let activiteit;
  export let Questionlist; // komt vanuit page.svelte

  const datum = new Date(activiteit.datum);

  const formattedDate = datum.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const shortDate = datum.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long'
  });

  let activeTab = 'bingokaart';

  const tabs = [
    { id: 'bingokaart', label: 'Bingo kaart', icon: '/icons/brain.svg' },
    { id: 'vragenlijst', label: 'Vragenlijst', icon: '/icons/frame-2.svg' }
  ];

  $: pageTitle = formattedDate;

  $: pageSubtitle =
    activeTab === 'bingokaart'
      ? 'Hieronder vind je informatie over deze behandeling.'
      : 'Hieronder vind je jouw antwoorden op de vragenlijst.';
</script>


<section class="behandeling">
  <header class="page-header">
    <h1>{pageTitle}</h1>
    <p>{pageSubtitle}</p>
  </header>

  <nav aria-label="Navigatie" class="page-nav">
    <ul role="tablist">
      {#each tabs as tab}
        <li>
          <button
            type="button"
            role="tab"
            on:click={() => activeTab = tab.id}
            class:active={activeTab === tab.id}
          >
            <img src={tab.icon} alt="" />
            <span>{tab.label}</span>
          </button>
        </li>
      {/each}
    </ul>
  </nav>

  <!-- Bingo -->
  <section
    id="bingokaart-panel"
    role="tabpanel"
    hidden={activeTab !== 'bingokaart'}
    class="bingokaart"
  >
    <h2>De status van jouw bingokaart op {formattedDate}</h2>

    <ul class="kaart-grid">
      {#each activiteit.bingokaart as item}
        <li class:checked={item.checked}>
          <article>
            <header>
              <span class="dot"></span>
            </header>
            <p>{item.activiteit}</p>
          </article>
        </li>
      {/each}
    </ul>
  </section>

  <!-- Vragenlijst -->
  <section
    id="vragenlijst-panel"
    role="tabpanel"
    hidden={activeTab !== 'vragenlijst'}
    class="vragenlijst"
  >
    <Questionlist
      vragenlijst={activiteit.vragenlijst}
      shortDate={shortDate}
    />
  </section>
</section>

<style>
/* ===== Baseline (Mobile first) ===== */
.behandeling {
  padding: 1.25rem 0.75rem;
  text-align: center;
  font-family: var(--font-regular);
}

/* Focus */
:focus-visible {
  outline: 3px solid var(--primary-color-dark);
  outline-offset: 3px;
}

/* Header */
.page-header {
  text-align: left;
  padding-inline: 1.5rem;
  margin-top: 1.5rem;
}

.page-header h1 {
  color: var(--primary-color-dark);
  font-size: clamp(1.25rem, 4vw, var(--text-size-xl));
  font-family: var(--font-semibold);
  margin: 0;
}

.page-header p {
  color: var(--primary-color-dark);
  font-size: clamp(0.9rem, 3vw, var(--text-size-md));
  font-family: var(--font-medium);
  margin-top: 0.25rem;
}

/* Tabs */
.page-nav ul {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  list-style: none;
  padding: 0.5rem 0;
  margin: 1rem 0 1.25rem;
  border-bottom: 1px solid hsl(204, 33%, 85%);
}

.page-nav button {
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color-dark);
  font-family: var(--font-semibold);
  font-size: clamp(0.7rem, 2.5vw, var(--text-size-sm));
  padding-block: 2rem 0.25rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.page-nav button.active {
  border-bottom-color: var(--primary-color-light);
}

.page-nav img {
  width: 18px;
  height: 18px;
}

/* Bingo */
.bingokaart h2 {
  font-size: clamp(0.85rem, 2.8vw, var(--text-size-sm));
  color: var(--primary-color-dark);
  font-family: var(--font-medium);
  margin-bottom: 1rem;
}

/* Grid */
.kaart-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  list-style: none;
  padding: 2.5rem 0.5rem 0;
  margin: 0 auto;
  width: 300px;
  height: 300px;
}

.kaart-grid li {
  border-radius: 0.5rem;
  background-color: var(--primary-color-light);
  color: var(--color-white);
  display: grid;
  place-items: center;
  position: relative;
  transition: 0.3s;
}

.kaart-grid li.checked {
  background-color: var(--color-green-accent);
  box-shadow: 0 0 20px rgba(19, 124, 38, 0.4);
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

/* Tablet */
@media (min-width: 640px) {
  .kaart-grid {
    gap: 0.75rem;
    width: 360px;
    height: 360px;
  }

  .bingokaart h2 {
    text-align: left;
    padding-inline: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .kaart-grid {
    gap: 1rem;
    width: 420px;
    height: 420px;
  }

  .bingokaart h2 {
    text-align: left;
    padding-inline: 4rem;
  }

  .page-header {
    padding-inline: 4rem;
  }

  .page-nav ul {
    justify-content: flex-start;
    padding-left: 4rem;
    gap: 2rem;
  }
}
</style>
