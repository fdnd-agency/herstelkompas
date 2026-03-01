<script>
  export let activiteit;
  export let QuestionList;
  export let ScansDetail;

  const datum = new Date(activiteit.datum);

  const formattedDate = datum.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const shortDate = datum.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long"
  });

  const tabs = [
    { id: "bingokaart", label: "Bingo kaart", icon: "/icons/bingo.svg" },
    { id: "vragenlijst", label: "Vragenlijst", icon: "/icons/ordenedlist.svg" },
    { id: "scans", label: "Scans", icon: "/icons/brain.svg" }
  ];

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
      <input
        class="tab-radio"
        type="radio"
        name="behandeling-tabs"
        id="tab-bingokaart"
        checked
      />
      <input
        class="tab-radio"
        type="radio"
        name="behandeling-tabs"
        id="tab-vragenlijst"
      />
      <input class="tab-radio" type="radio" name="behandeling-tabs" id="tab-scans" />

      <ul class="tablist">
        {#each tabs as tab (tab.id)}
          <li class="tabitem">
            <label class="tabbutton" for={`tab-${tab.id}`}>
              <img height="19" src={tab.icon} alt="" />
              <span>{tab.label}</span>
            </label>
          </li>
        {/each}
      </ul>

      <div class="tabpanels">
        <section id="bingokaart-panel" class="bingokaart tabpanel">
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
                  <p class="kaart-text">{item.activiteit}</p>
                </article>
              </li>
            {/each}
          </ul>
        </section>

        <section id="vragenlijst-panel" class="bingokaart tabpanel">
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

        <section id="scans-panel" class="bingokaart scans tabpanel">
          <ScansDetail scans={scans} shortDate={shortDate} formattedDate={formattedDate} />
        </section>
      </div>
    </fieldset>
  </nav>
</section>

<style>
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

/* Radio visually hidden but still focusable */
.tab-radio {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
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
  width: clamp(270px, 60%, 520px);
  height: 5px;
  background-color: var(--color-neutral-lighter);
  border-radius: 3px;
}

.tabitem {
  position: relative;
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
  opacity: 0.75;
}

/* Active tab appearance (based on checked input) */
#tab-bingokaart:checked ~ .tablist label[for="tab-bingokaart"],
#tab-vragenlijst:checked ~ .tablist label[for="tab-vragenlijst"],
#tab-scans:checked ~ .tablist label[for="tab-scans"] {
  opacity: 1;
  color: var(--primary-color-dark);
}

/* Active tab underline indicator */
#tab-bingokaart:checked ~ .tablist label[for="tab-bingokaart"]::after,
#tab-vragenlijst:checked ~ .tablist label[for="tab-vragenlijst"]::after,
#tab-scans:checked ~ .tablist label[for="tab-scans"]::after {
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

/* =========================
   PANELS 
========================= */
.tabpanels .tabpanel {
  display: none;
}

#tab-bingokaart:checked ~ .tabpanels #bingokaart-panel {
  display: block;
}

#tab-vragenlijst:checked ~ .tabpanels #vragenlijst-panel {
  display: block;
}

#tab-scans:checked ~ .tabpanels #scans-panel {
  display: block;
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
  --cell: clamp(95px, 14vmin, 150px);
  --gap: clamp(0.2rem, 0.8vmin, 0.75rem);

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
  height: auto;
  min-height: calc(var(--cell) * 0.84);
  list-style: none;
}

/* =========================
   CARD (READ-ONLY)
========================= */
.kaart-card {
  width: 100%;
  height: auto;
  min-height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(0.55rem, 1.8vmin, 1rem);
  text-align: center;

  background-color: var(--primary-color-dark);
  border: 2px solid transparent;
  border-radius: 6px;

  opacity: 0;
  transform: translateY(12px) scale(0.98);
  animation: none;
}

/* Animate only when Bingo panel is active */
#tab-bingokaart:checked ~ .tabpanels #bingokaart-panel .kaart-card {
  animation: card-in 420ms cubic-bezier(.2,.8,.2,1) forwards;
  animation-delay: calc(var(--i) * 80ms);
}

@keyframes card-in {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Card text */
.kaart-text {
  margin: 0;
  font-size: clamp(0.5rem, 1.5vmin, 1rem);
  line-height: 1.2;
  font-family: var(--font-medium);
  color: var(--color-white);
  overflow-wrap: anywhere;
  word-break: break-word;
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

  .tablist {
    justify-content: flex-start;
    gap: 2rem;
  }

  .tablist::after {
    left: 0;
    transform: none;
    width: 460px;
  }

  .tabbutton {
    flex-direction: row;
    gap: 0.5rem;
    font-size: var(--text-size-sm);
  }

  .bingokaart {
    max-width: 950px;
    margin: 0;
  }

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

</style>
