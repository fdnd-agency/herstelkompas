<script>
  import { goto } from "$app/navigation";

  export let vragenlijst = [];

  export let format = (a) => {
    if (Array.isArray(a)) return a.join(", ");
    return a ?? "Geen antwoord ingevuld";
  };

  $: safeVragenlijst = Array.isArray(vragenlijst) ? vragenlijst : [];

  let showOverlay = false;

  function startSurvey() {
    if (showOverlay) return;
    showOverlay = true;
    setTimeout(() => goto("/vragenlijst"), 1600);
  }
</script>

<section class="survey">
  {#if safeVragenlijst.length === 0}
    <button type="button" class="btn-primary" on:click={startSurvey}>
      Vul de vragenlijst in
    </button>

    {#if showOverlay}
      <div class="overlay">
        <p class="overlayText">Onderweg naar de vragenlijst!</p>

        <div class="orb">
          <div class="wave one"></div>
          <div class="wave two"></div>
          <div class="wave three"></div>
        </div>
      </div>
    {/if}
  {:else}
    <table class="survey-table">
      <tbody class="survey-list">
        {#each safeVragenlijst as item (item?.vraag)}
          <tr class="survey-item">
            <td class="question-column">{item.vraag}</td>
            <td class="answer-column">{format(item.antwoord)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</section>

<style>
/* overlay + animatie */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  gap: 16px;
  padding: 24px;
  background: rgba(4, 22, 55, 0.55);
  backdrop-filter: blur(6px);
}

.overlayText {
  margin: 0;
  color: var(--color-white);
  font-weight: 700;
  text-align: center;
  font-size: var(--text-size-xl);
}

.orb {
  position: relative;
  width: min(16rem, 72vw);
  height: min(16rem, 72vw);
  overflow: hidden;
  border-radius: 50%;
  background-color: var(--color-neutral-lighter);
  box-shadow: 0 18px 60px rgba(0,0,0,0.25);
}

.wave {
  position: absolute;
  top: 72%;
  left: -50%;
  width: 48rem;
  height: 48rem;
  border-radius: 35%;
  animation:
    waves var(--spin, 9000ms) linear infinite,
    rise 1600ms ease-in forwards;
  transform-origin: center;
}

.wave.one { background: var(--primary-color-dark); opacity: 0.40; --spin: 7000ms; }
.wave.two { background: var(--primary-color-light); opacity: 0.55; --spin: 9000ms; }
.wave.three { background: var(--primary-color-dark); opacity: 0.28; --spin: 12000ms; }

@keyframes waves { to { transform: rotate(360deg); } }
@keyframes rise { to { top: 8%; } }

@media (prefers-reduced-motion: reduce) {
  .overlay .orb,
  .overlay .wave {
    animation: none;
    display: none;
  }
}

/* ===========================================================
   SURVEY – MOBILE FIRST
=========================================================== */
.survey {
  max-width: none;
  margin: 0;
}

.survey-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.survey-list {
  display: block;
}

/* =========================
   CARD STYLE (tr)
========================= */
.survey-item {
  display: block;
  width: 100%;
  background-color: var(--color-blue-tint);
  border-radius: 0.9rem;
  padding: 1rem;
  margin: 0 0 0.75rem;

  border: 2px solid transparent;

  opacity: 0;
  transform: translateY(12px) scale(0.98);

  --delay: 0s;
  @supports (animation-delay: calc(sibling-index() * 80ms)) {
    --delay: calc(sibling-index() * 160ms);
  }

  animation: card-in 920ms var(--delay) cubic-bezier(.2,.8,.2,1) forwards;
}

.question-column,
.answer-column {
  display: block;
  padding: 0;
  border: 0;
}

.question-column::before,
.answer-column::before {
  display: block;
  font-size: var(--text-size-xs);
  font-weight: 500;
  letter-spacing: 0.01em;
  color: var(--color-neutral);
  margin-bottom: 0.15rem;
}

.question-column::before { content: "Vraag"; }

.answer-column::before {
  content: "Antwoord";
  margin-top: 0.75rem;
}

.question-column,
.answer-column {
  font-size: 0.95rem;
  font-weight: 700;
  color: #143a8b;
  line-height: 1.25;
}

@media (prefers-reduced-motion: reduce) {
  .survey-item {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

@keyframes card-in {
  to { opacity: 1; transform: translateY(0) scale(1); }
}

/* ===========================================================
   TABLET
=========================================================== */
@media (min-width: 768px) {
  .survey {
    max-width: 520px;
    margin-left: 0;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
  }

  .survey-list {
    display: grid;
    gap: 5px;
  }

  .survey-list tr {
    padding: 1.2rem 1.5rem;
    background-color: #eef6ff;
    border-radius: 12px;
  }

  .survey-item {
    margin: 0;
    padding: 1.1rem 1.2rem;
    border-radius: 1rem;
  }

  .question-column::before,
  .answer-column::before {
    font-size: var(--text-size-xs);
    margin-bottom: 0.25rem;
  }
}
</style>