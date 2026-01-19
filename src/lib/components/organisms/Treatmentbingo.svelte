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
    const shortDate = datum.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long'
  });
  const tabs = [
    { id: 'bingokaart', label: 'Bingo kaart', icon: '/icons/bingo.svg' },
    { id: 'vragenlijst', label: 'Vragenlijst', icon: '/icons/ordenedlist.svg' },
    { id: 'scans', label: 'Scans', icon: '/icons/brain.svg' }
  ];
  let activeTab = "bingokaart";
  let tabButtons = [];
  let scans = activiteit.scans
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
            <img height="19" src={tab.icon} alt="" aria-hidden="true" />
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

    <ul class="kaart-grid" role="list" aria-label={`Bingokaart items van ${formattedDate}`}>
      {#each activiteit.bingokaart as item, i (item.activiteit)}
        <li style={`--i:${i}`}>
          <button
            type="button"
            class="kaart-btn"
            class:checked={item.checked}
            aria-pressed={item.checked}
            aria-label={`${item.activiteit}. ${item.checked ? "Afgevinkt" : "Niet afgevinkt"}`}
          >
            <span class="dot" aria-hidden="true"></span>
            <span class="kaart-text">{item.activiteit}</span>
          </button>
        </li>
      {/each}
    </ul>
  </section>

  <!-- VRAGENLIJST -->
  <section
    id="vragenlijst-panel"
    class="bingokaart"
    role="tabpanel"
    aria-labelledby="vragenlijst-tab"
    hidden={activeTab !== "vragenlijst"}
    tabindex="0"
  >

    <header class="bingokaart-header">
      <h2 class="bingokaart-title">{formattedDate}</h2>
      
      {#if activiteit.vragenlijst}
        <p class="bingokaart-subtitle">Hieronder zie je jouw antwoorden op de vragenlijst van {formattedDate}.</p>
      {:else}
        <p class="bingokaart-subtitle">Op {formattedDate} is er nog geen vragenlijst ingevuld.</p>
        <a href="/vragenlijst" class="btn-primary">Vul de vragenlijst in</a>
      {/if}
    </header>
    {#if activiteit.vragenlijst}
      <QuestionList vragenlijst={activiteit.vragenlijst ?? []} />
    {/if}
  </section>
  <!--  SCANS PANEL -->
    <section
      id="scans-panel"
      role="tabpanel"
      aria-labelledby="scans-tab"
      class="bingokaart scans {activeTab !== 'scans' ? 'hidden' : ''}"
    >

    <ScansDetail
      scans = {scans}
      shortDate={shortDate}
      formattedDate={formattedDate}
    />
    </section>
</section>

<style>
/* =========================
   NAVIGATIE (TABS)
========================= */
.page-nav {
  position: relative;
  padding-bottom: 10px;
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
.bingokaart-header{
  margin-right: auto;
}
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

.tabbutton:not(.active) {
  opacity: 0.75;
}

.tabbutton.active {
  opacity: 1;
  color: var(--primary-color-dark);
}

.tabbutton.active::after {
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

.kaart-grid li {
  width: var(--cell);
  height: calc(var(--cell) * 0.84);
  list-style: none;
}

/* =========================
   KAART BUTTON 
========================= */
.kaart-btn {
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(0.5rem, 1.2vmin, 0.9rem);
  text-align: center;

  background-color: var(--primary-color-light);
  border: 2px solid transparent;
  border-radius: 5px;

  cursor: pointer;

  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

/* Alleen animeren wanneer panel zichtbaar is */
.bingokaart:not([hidden]) .kaart-btn {
  animation: card-in 420ms cubic-bezier(.2,.8,.2,1) forwards;
  animation-delay: calc(var(--i) * 80ms);
}

.bingokaart[hidden] .kaart-btn {
  animation: none;
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

@keyframes card-in {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Tekst */
.kaart-text {
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

.kaart-btn.checked,
.kaart-btn[aria-pressed="true"] {
  background-color: var(--color-green-accent);
}

.kaart-btn.checked .dot,
.kaart-btn[aria-pressed="true"] .dot {
  background-color: var(--color-white);
}

/* Focus voor toetsenbord */
.kaart-btn:focus-visible {
  outline: none;
  border-color: var(--primary-color-dark);
  box-shadow: 0 0 0 4px rgba(20, 58, 139, 0.25);
}

/* Hover (optioneel) */
.kaart-btn:hover {
  filter: brightness(0.98);
}

/* =========================
   REDUCED 
========================= */
@media (prefers-contrast: more) {
  .kaart-btn {
    border-color: var(--color-neutral-darker);
  }
}

@media (prefers-reduced-motion: reduce) {
  .kaart-btn {
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
   DESKTOP
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
.survey-list{
  
}

/*  Quick Fix [Dylan] */
#vragenlijst-panel{
  padding-top: clamp(2rem, 5vw, 3rem);
      overflow-y: auto;
    height: calc(100vh - 150px);
}

/* SCANS */
section.scans{
    display: flex;
    gap: 2rem;
    row-gap: 20px;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
}
section.scans.hidden {
  display: none;
}
</style>