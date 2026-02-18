<script>
  // Props passed into this component
  export let activiteit;
  export let QuestionList;
  export let ScansDetail;

  // Parse the activity date
  const datum = new Date(activiteit.datum);

  // Full date (e.g. "20 januar)
  const formattedDate = datum.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  // Short date (e.g. "20 januari")
  const shortDate = datum.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long"
  });

  // Tab configuration (id + label + icon)
  const tabs = [
    { id: "bingokaart", label: "Bingo kaart", icon: "/icons/bingo.svg" },
    { id: "vragenlijst", label: "Vragenlijst", icon: "/icons/ordenedlist.svg" },
    { id: "scans", label: "Scans", icon: "/icons/brain.svg" }
  ];


  let activeTab = "bingokaart";

  
  const toBool = (v) => v === true || v === 1 || v === "1" || v === "true";


  $: scans = activiteit?.scans ?? [];
  $: vragenlijst = activiteit?.vragenlijst ?? null;

 
  $: bingokaart = (activiteit?.bingokaart ?? []).map((item) => ({
    ...item,
    checked: toBool(item.checked)
  }));
</script>

<section class="behandeling">

  <nav class="page-nav">
    <fieldset class="tabs-fieldset">
      <legend class="sr-only">Behandeling tabs</legend>

      <ul class="tablist">
        {#each tabs as tab (tab.id)}
          <li class="tabitem">
            <input
              class="tab-radio"
              type="radio"
              name="behandeling-tabs"
              id={`tab-${tab.id}`}
              value={tab.id}
              bind:group={activeTab}
            />

            <label class="tabbutton" for={`tab-${tab.id}`}>
              <img height="19" src={tab.icon} alt="" />
              <span>{tab.label}</span>
            </label>
          </li>
        {/each}
      </ul>
    </fieldset>
  </nav>

  <!-- BINGO CARD PANEL -->
  <section
    id="bingokaart-panel"
    class="bingokaart"
    hidden={activeTab !== "bingokaart"}
  >
    <header class="bingokaart-header">
      <h2 class="bingokaart-title">{formattedDate}</h2>
      <p class="bingokaart-subtitle">
        Hieronder info over de bingokaart van {formattedDate}.
      </p>
    </header>


    <ul class="kaart-grid">
      {#each bingokaart as item, i (item.activiteit)}
        <li style={`--i:${i}`}>
          <article class="kaart-card" class:checked={item.checked}>
            <span class="dot"></span>

            <!-- Status in dezelfde tekstflow, zodat SR dit netjes meeleest -->
            <p class="kaart-text">
              {item.activiteit}
              <span class="sr-only">
                {item.checked ? ", afgevinkt" : ", niet afgevinkt"}
              </span>
            </p>
          </article>
        </li>
      {/each}
    </ul>
  </section>

  <!-- SURVEY (QUESTION LIST) PANEL -->
  <section
    id="vragenlijst-panel"
    class="bingokaart"
    hidden={activeTab !== "vragenlijst"}
  >
    <header class="bingokaart-header">
      <h2 class="bingokaart-title">{formattedDate}</h2>

      {#if vragenlijst}
        <p class="bingokaart-subtitle">
          Hieronder zie je jouw antwoorden op de vragenlijst van {formattedDate}.
        </p>
      {:else}
        <p class="bingokaart-subtitle">
          Op {formattedDate} is er nog geen vragenlijst ingevuld.
        </p>
      {/if}
    </header>

<QuestionList vragenlijst={vragenlijst ?? []} />
  </section>

  <!-- SCANS PANEL -->
  <section
    id="scans-panel"
    class="bingokaart scans {activeTab !== 'scans' ? 'hidden' : ''}"
  >
    <ScansDetail scans={scans} shortDate={shortDate} formattedDate={formattedDate} />
  </section>
</section>

<style>
/* Screen-reader-only utility class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

/* =========================
   TABS NAVIGATION
========================= */
.page-nav {
  position: relative;
  padding-bottom: 10px;
}

.tabs-fieldset {
  border: 0;
  padding: 0;
  margin: 0;
}

.tablist {
  display: flex;
  justify-content: center;
  gap: clamp(1rem, 3vw, 2rem);
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;
}

.bingokaart-header {
  margin-right: auto;
}

/* Baseline underline for the tab bar */
.tablist::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(220px, 60%, 520px);
  height: 5px;
  background-color: var(--color-neutral-lighter);
  border-radius: 3px;
}

.tabitem {
  position: relative;
}

/* Radio visually hidden but still focusable */
.tab-radio {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}

/* Tab button styling (label) */
.tabbutton {
  background: none;
  border: none;
  padding: 0.4rem 0.6rem 10px;
  font-size: var(--text-size-xs);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-neutral);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  cursor: pointer;
}

/* Inactive tab appearance */
.tab-radio:not(:checked) + .tabbutton {
  opacity: 0.75;
}

/* Active tab appearance */
.tab-radio:checked + .tabbutton {
  opacity: 1;
  color: var(--primary-color-dark);
}

/* Active tab underline indicator */
.tab-radio:checked + .tabbutton::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 5px;
  background-color: var(--primary-color-dark);
  border-radius: 3px;
  z-index: 1;
}

/* Visible focus ring for keyboard users */
.tab-radio:focus-visible + .tabbutton {
  outline: 3px solid var(--primary-color-light);
  outline-offset: 4px;
  border-radius: 6px;
}

/* =========================
   BINGO CARD CONTENT
========================= */
.bingokaart {
  max-width: clamp(320px, 85vw, 720px);
  margin: 0 auto;
  padding-top: clamp(2rem, 5vw, 3rem);
}

/* Title + subtitle typography */
.bingokaart-title {
  font-size: var(--text-size-md);
  margin: 0.75rem 0 0.25rem;
  color: var(--primary-color-dark);
}

.bingokaart-subtitle {
  font-size: var(--text-size-sm);
  margin: 0 0 1rem;
  color: var(--color-neutral);
}

/* =========================
   BINGO GRID (3x3)
========================= */
.kaart-grid {
  --cell: clamp(93px, 16vmin, 150px);
  --gap: clamp(0.25rem, 1vmin, 0.75rem);

  display: grid;
  grid-template-columns: repeat(3, var(--cell));
  gap: var(--gap);

  width: fit-content;
  margin-inline: auto;
  padding: 0;
  list-style: none;
}

.kaart-grid li {
  width: var(--cell);
  height: calc(var(--cell) * 0.84);
  list-style: none;
}

/* =========================
   CARD (READ-ONLY)
========================= */
.kaart-card {
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(0.5rem, 1.2vmin, 0.9rem);
  text-align: center;

  background-color: var(--primary-color-dark);
  border: 2px solid transparent;
  border-radius: 5px;

  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

/* Only animate when the panel is visible */
.bingokaart:not([hidden]) .kaart-card {
  animation: card-in 420ms cubic-bezier(.2,.8,.2,1) forwards;
  animation-delay: calc(var(--i) * 80ms);
}

/* Reset animation when panel is hidden */
.bingokaart[hidden] .kaart-card {
  animation: none;
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

/* Enter animation */
@keyframes card-in {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Card text */
.kaart-text {
  margin: 0;
  font-size: clamp(0.6rem, 1.8vmin, 1rem);
  line-height: 1.25;
  font-family: var(--font-medium);
  color: var(--color-white);
  overflow-wrap: anywhere;
}

/* Corner dot indicator */
.dot {
  position: absolute;
  top: clamp(4px, 0.8vmin, 8px);
  left: clamp(4px, 0.8vmin, 8px);

  width: clamp(6px, 1.1vmin, 8px);
  height: clamp(6px, 1.1vmin, 8px);

  border-radius: 20%;
  border: 1px solid var(--color-white);
}

/* Slightly larger dot on wider screens */
@media (min-width: 600px) {
  .dot {
    width: clamp(9px, 1.3vmin, 11px);
    height: clamp(9px, 1.3vmin, 11px);
  }
}

/* Checked state */
.kaart-card.checked {
  background-color: var(--color-green-accent);
}

.kaart-card.checked .dot {
  background-color: var(--color-white);
}

/* Optional hover effect */
.kaart-card:hover {
  filter: brightness(0.98);
}

/* =========================
   ACCESSIBILITY PREFERENCES
========================= */
@media (prefers-contrast: more) {
  .kaart-card {
    border-color: var(--color-neutral-darker);
  }
}

/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .kaart-card {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}

/* =========================
   TABLET LAYOUT
========================= */
@media (min-width: 768px) {
  .page-nav {
    padding: 0 0rem 0.75rem;
  }

  /* Align tabs to the left on larger screens */
  .tablist {
    justify-content: flex-start;
    gap: 2rem;
  }

  /* Move baseline underline to the left */
  .tablist::after {
    left: 0;
    transform: none;
    width: 460px;
  }

  /* Tabs become horizontal (icon + text) */
  .tabbutton {
    flex-direction: row;
    gap: 0.5rem;
    font-size: var(--text-size-sm);
  }

  /* Wider panel on tablet */
  .bingokaart {
    max-width: 950px;
    margin: 0;
  }

  /* Slightly larger grid cells */
  .kaart-grid {
    --cell: clamp(110px, 12vmin, 165px);
    margin-inline: 0;
  }
}

/* =========================
   DESKTOP LAYOUT
========================= */
@media (min-width: 1024px) {
  .tabbutton {
    font-size: var(--text-size-lg);
  }

  .kaart-grid {
    --cell: clamp(130px, 25vmin, 190px);
  }

  .kaart-text {
    font-size: var(--text-size-lg);
  }
}

/* Quick Fix [Dylan]
   Make the survey panel scrollable within the viewport */
#vragenlijst-panel {
  padding-top: clamp(2rem, 5vw, 3rem);
  overflow-y: auto;
  height: calc(100vh - 150px);
}

/* =========================
   SCANS LAYOUT
========================= */
section.scans {
  display: flex;
  gap: 2rem;
  row-gap: 20px;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
}

/* Hide scans panel when not active */
section.scans.hidden {
  display: none;
}
</style>