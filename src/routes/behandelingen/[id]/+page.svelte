<script>
  export let data;
  const activiteit = data.activiteit;

  // Datum formatteren vanuit Directus
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

  // Actieve tab
  let activeTab = 'bingokaart';

  const tabs = [
    { id: 'bingokaart', label: 'Bingo kaart', icon: '/icons/brain.svg' },
    { id: 'vragenlijst', label: 'Vragenlijst', icon: '/icons/frame-2.svg' }
  ];

  // Helper om antwoord altijd als string te krijgen
  const toAnswerString = (answer) => {
    if (Array.isArray(answer)) {
      return answer.join(', ');
    }
    return answer ?? 'Geen antwoord ingevuld';
  };

  // Titel = alleen datum
  $: pageTitle = formattedDate;

  // Subtitel verandert per tab
  $: pageSubtitle =
    activeTab === 'bingokaart'
      ? 'Hieronder vind je informatie over deze behandeling.'
      : 'Hieronder vind je jouw antwoorden op de vragenlijst.';
</script>

<section class="behandeling">
  <!-- Dynamische header -->
  <header class="page-header">
    <h1>{pageTitle}</h1>
    <p>{pageSubtitle}</p>
  </header>

  <!-- Toegankelijke tab-navigatie -->
  <nav aria-label="Behandelingsnavigatie" class="page-nav">
    <ul role="tablist">
      {#each tabs as tab}
        <li>
          <button
            type="button"
            role="tab"
            id={`${tab.id}-tab`}
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            on:click={() => (activeTab = tab.id)}
            class:active={activeTab === tab.id}
          >
            <img src={tab.icon} alt="" aria-hidden="true" />
            <span>{tab.label}</span>
          </button>
        </li>
      {/each}
    </ul>
  </nav>

  <!-- Bingo kaart TAB -->
  <section
    id="bingokaart-panel"
    role="tabpanel"
    aria-labelledby="bingokaart-tab"
    hidden={activeTab !== 'bingokaart'}
    class="bingokaart"
    aria-live="polite"
  >
    <h2 id="bingokaart-titel">
      De status van jouw bingokaart op {formattedDate}
    </h2>

    <ul class="kaart-grid">
      {#each activiteit.bingokaart as item, index}
        <li
          class:checked={item.checked}
          tabindex="0"
          aria-label={`Vakje ${index + 1}: ${item.activiteit} — ${
            item.checked ? 'is voltooid' : 'nog niet voltooid'
          }`}
        >
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

  <!-- Vragenlijst TAB -->
  <section
    id="vragenlijst-panel"
    role="tabpanel"
    aria-labelledby="vragenlijst-tab"
    hidden={activeTab !== 'vragenlijst'}
    class="vragenlijst"
    aria-live="polite"
  >
    <h2 id="vragenlijst-titel">
      Jouw antwoorden op de vragenlijst op {shortDate}
    </h2>

    {#if activiteit.vragenlijst && activiteit.vragenlijst.length > 0}
      <ul class="vragenlijst-lijst">
        {#each activiteit.vragenlijst as item}
          <li>
            <article>
              <h3>{item.vraag}</h3>
              <p>
                <strong>Antwoord:</strong>
                {' '}{toAnswerString(item.antwoord)}
              </p>
            </article>
          </li>
        {/each}
      </ul>
    {:else}
      <p>Er zijn nog geen vragenlijstresultaten gekoppeld aan deze behandeling.</p>
    {/if}
  </section>
</section>

<style>
/* ===== Baseline (Mobile first) ===== */
.behandeling {
  padding: 1.25rem 0.75rem;
  text-align: center;
  font-family: var(--font-regular);
}

/* Globale focus zichtbaar maken */
:focus-visible {
  outline: 3px solid var(--primary-color-dark);
  outline-offset: 3px;
}

/* ===== Header ===== */
.page-header {
  text-align: left;
  align-items: flex-start;
  justify-items: start;
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
  margin-bottom: 0;
}

/* ===== Navigatie / Tabs ===== */
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

.page-nav button {
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--primary-color-dark);
  font-family: var(--font-semibold);
  font-size: clamp(0.7rem, 2.5vw, var(--text-size-sm));
  padding-block: 2rem 0.25rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.page-nav button:hover,
.page-nav button:focus-visible {
  color: var(--primary-color-light);
}

.page-nav button.active,
.page-nav button[aria-selected='true'] {
  border-bottom-color: var(--primary-color-light);
}

.page-nav img {
  width: 18px;
  height: 18px;
}

/* ===== Bingo kaart ===== */
.bingokaart h2 {
  font-size: clamp(0.85rem, 2.8vw, var(--text-size-sm));
  color: var(--primary-color-dark);
  font-family: var(--font-medium);
  margin-bottom: 1rem;
  text-align: center;
}

/* 3x3 grid */
.kaart-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
  justify-content: center;
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
  transition: background 0.3s, box-shadow 0.3s;
  position: relative;
  cursor: default;
  aspect-ratio: 1.15 / 1;
}

.kaart-grid li.checked {
  background-color: var(--color-green-accent);
  box-shadow: 0 0 20px rgba(19, 124, 38, 0.4);
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

/* ===== Tablet layout ===== */
@media (min-width: 640px) {
  .kaart-grid {
    gap: 0.75rem;
    width: 360px;
    height: 360px;
  }

  .kaart-grid li {
    aspect-ratio: 1.3 / 1;
  }

  .bingokaart h2 {
    text-align: left;
    padding-inline: 2rem;
  }

  .page-nav ul {
    justify-content: center;
    gap: 1.5rem;
  }
}

/* ===== Desktop layout ===== */
@media (min-width: 1024px) {
  .kaart-grid {
    gap: 1rem;
    width: 420px;
    height: 420px;
  }

  .kaart-grid li {
    aspect-ratio: 1.3 / 1;
  }

  .bingokaart h2 {
    text-align: left;
    padding-inline: 4rem;
  }

  .page-header {
    text-align: left;
    padding-inline: 4rem;
  }

  .page-nav ul {
    justify-content: flex-start;
    padding-left: 4rem;
    gap: 2rem;
  }
}
</style>
