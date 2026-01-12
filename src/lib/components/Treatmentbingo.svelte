<script>
  export let activiteit;
  export let Questionlist;

  const datum = new Date(activiteit.datum);

  const formattedDate = datum.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const tabs = [
    { id: "bingokaart", label: "Bingo kaart", icon: "/icons/brain.svg" },
    { id: "vragenlijst", label: "Vragenlijst", icon: "/icons/frame-2.svg" }
  ];

  let activeTab = "bingokaart";
  let tabButtons = [];

  function selectTab(index) {
    activeTab = tabs[index].id;
    tabButtons[index]?.focus();
  }

  function onTabKeydown(e, index) {
    const last = tabs.length - 1;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        selectTab(index === last ? 0 : index + 1);
        break;

      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        selectTab(index === 0 ? last : index - 1);
        break;

      case "Home":
        e.preventDefault();
        selectTab(0);
        break;

      case "End":
        e.preventDefault();
        selectTab(last);
        break;
    }
  }
</script>

<section class="behandeling">
  <!-- NAVIGATIE (TABS) -->
  <nav class="page-nav" aria-label="Behandeling tabs">
    <ul class="tablist" role="tablist" aria-orientation="horizontal">
      {#each tabs as tab, i (tab.id)}
        <li class="tabitem" role="presentation">
          <button
            bind:this={tabButtons[i]}
            type="button"
            class="tabbutton"
            class:active={activeTab === tab.id}
            role="tab"
            id={`${tab.id}-tab`}
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            tabindex={activeTab === tab.id ? 0 : -1}
            on:click={() => selectTab(i)}
            on:keydown={(e) => onTabKeydown(e, i)}
          >
            <img src={tab.icon} alt="" aria-hidden="true" />
            <span>{tab.label}</span>
          </button>
        </li>
      {/each}
    </ul>
  </nav>

  <!-- BINGOKAART -->
  <section
    id="bingokaart-panel"
    class="bingokaart"
    role="tabpanel"
    aria-labelledby="bingokaart-tab"
    hidden={activeTab !== "bingokaart"}
    tabindex="0"
  >
    <header class="bingokaart-header">
      <h2 class="bingokaart-title">{formattedDate}</h2>
      <p class="bingokaart-subtitle">
        Hieronder info over de bingokaart van {formattedDate}.
      </p>
    </header>

    <ul class="kaart-grid">
      {#each activiteit.bingokaart as item (item.activiteit)}
        <li class:checked={item.checked}>
          <span class="dot" aria-hidden="true"></span>
          <p>{item.activiteit}</p>
        </li>
      {/each}
    </ul>
  </section>

  <!-- VRAGENLIJST -->
  <section
    id="vragenlijst-panel"
    role="tabpanel"
    aria-labelledby="vragenlijst-tab"
    hidden={activeTab !== "vragenlijst"}
    tabindex="0"
  >
    <Questionlist vragenlijst={activiteit.vragenlijst} />
  </section>
</section>

<style>
 /* =========================
   BASE
========================= */
.behandeling {
  width: 100%;
  min-width: 0;
}

/* =========================
   NAVIGATIE (TABS)
========================= */
.page-nav {
  position: relative;
  padding-bottom: 1.25rem;
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

.tablist::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(220px, 60%, 520px);
  height: 5px;
  background-color: var(--color-neutral-lighter);
  border-radius: 3px;
}

.tabbutton {
  background: none;
  border: none;
  padding: 0.4rem 0.6rem;
  font-size: var(--text-size-xs);
  color: var(--color-neutral);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  cursor: pointer;
}

.tabbutton.active {
  color: var(--primary-color-dark);
  font-family: var(--font-semibold);
}

.tabbutton.active::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 5px;
  background-color: var(--primary-color-dark);
  border-radius: 3px;
  z-index: 1;
}

.tabbutton:focus-visible {
  outline: 3px solid var(--primary-color-light);
  outline-offset: 4px;
  border-radius: 6px;
}

/* =========================
   BINGOKAART CONTENT
========================= */
.bingokaart {
  max-width: clamp(320px, 85vw, 720px);
  /* padding: clamp(1rem, 3vw, 2rem); */
  margin: 0 auto;
  padding-top: clamp(2rem, 5vw, 3rem);
}

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
   GRID (3×3)
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

/* =========================
   BINGOKAART ITEMS + ANIMATIE
========================= */
.kaart-grid li {
  position: relative;
  width: var(--cell);
  height: calc(var(--cell) * 0.84);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(0.5rem, 1.2vmin, 0.9rem);
  text-align: center;

  background-color: var(--primary-color-light);

  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

/* Alleen animeren wanneer panel zichtbaar is */
.bingokaart:not([hidden]) .kaart-grid li {
  animation: card-in 420ms cubic-bezier(.2,.8,.2,1) forwards;
  animation-delay: calc(var(--i) * 80ms);
}

.bingokaart[hidden] .kaart-grid li {
  animation: none;
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

/* Animatie */
@keyframes card-in {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Sibling index (stagger) */
.kaart-grid li:nth-child(1) { --i: 0; }
.kaart-grid li:nth-child(2) { --i: 1; }
.kaart-grid li:nth-child(3) { --i: 2; }
.kaart-grid li:nth-child(4) { --i: 3; }
.kaart-grid li:nth-child(5) { --i: 4; }
.kaart-grid li:nth-child(6) { --i: 5; }
.kaart-grid li:nth-child(7) { --i: 6; }
.kaart-grid li:nth-child(8) { --i: 7; }
.kaart-grid li:nth-child(9) { --i: 8; }

/* =========================
   CONTENT
========================= */
.kaart-grid li p {
  margin: 0;
  font-size: clamp(0.6rem, 1.8vmin, 1rem);
  line-height: 1.25;
  font-family: var(--font-medium);
  color: var(--color-white);
  overflow-wrap: anywhere;
}

.dot {
  position: absolute;
  top: clamp(4px, 0.8vmin, 8px);
  left: clamp(4px, 0.8vmin, 8px);
  width: clamp(8px, 1.3vmin, 12px);
  height: clamp(8px, 1.3vmin, 12px);
  border-radius: 50%;
  border: 1px solid var(--color-white);
}

.kaart-grid li.checked {
  background-color: var(--color-green-accent);
}

.kaart-grid li.checked .dot {
  background-color: var(--color-white);
}

/* =========================
   ACCESSIBILITY
========================= */
.kaart-grid li:focus-visible {
  outline: 3px solid var(--primary-color-dark);
  outline-offset: 2px;
}

@media (prefers-contrast: more) {
  .kaart-grid li {
    border: 2px solid var(--color-neutral-darker);
  }
}

@media (prefers-reduced-motion: reduce) {
  .kaart-grid li {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}

/* =========================
   TABLET
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
    width: 300px;
  }

  .tabbutton {
    flex-direction: row;
    gap: 0.5rem;
    font-size: var(--text-size-sm);
  }

  .bingokaart {
    max-width: 920px;
    margin: 0;
  }

  .kaart-grid {
    --cell: clamp(110px, 12vmin, 165px);
    margin-inline: 0;
  }
}

/* =========================
   DESKTOP
========================= */
@media (min-width: 1024px) {
  .tabbutton {
    font-size: var(--text-size-lg);
  }

  .kaart-grid {
    --cell: clamp(130px, 25vmin, 190px);
  }

  .kaart-grid li p {
    font-size: var(--text-size-lg);
  }
}


/*  Quick Fix [Dylan] */
#vragenlijst-panel{
  padding-top: clamp(2rem, 5vw, 3rem);
}
</style>