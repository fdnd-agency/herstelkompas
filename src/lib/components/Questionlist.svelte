<script>
  export let vragenlijst = [];

  export let format = (a) => {
    if (Array.isArray(a)) return a.join(", ");
    return a ?? "Geen antwoord ingevuld";
  };

  $: safeVragenlijst = Array.isArray(vragenlijst) ? vragenlijst : [];
</script>

<section class="survey" aria-label="Vragenlijst resultaten">
  <table class="survey-table" aria-describedby="survey-desc">
    <!-- Beschrijving voor screenreaders -->
    <caption id="survey-desc" class="sr-only">
      Overzicht van vragen en bijbehorende antwoorden. Tab om per item te navigeren.
    </caption>

    <thead class="survey-header">
      <tr>
        <th id="col-vraag" class="question-column" scope="col">Vraag</th>
        <th id="col-antwoord" class="answer-column" scope="col">Antwoord</th>
      </tr>
    </thead>

    <tbody class="survey-list">
      {#each safeVragenlijst as item, i (item?.vraag)}
        <tr
          class="survey-item"
          tabindex="0"
          aria-label={`Item ${i + 1}: ${item.vraag}`}
        >
          <td class="question-column" headers="col-vraag">
            {item.vraag}
          </td>

          <td class="answer-column" headers="col-antwoord">
            {format(item.antwoord)}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
/* Screenreader-only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ===========================================================
   SURVEY – MOBILE FIRST
=========================================================== */
.survey {
  max-width: none;
  margin: 0;
  /* padding-left: 0.2rem;
  padding-right: 0.2rem; */
}


.survey-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

  .survey-title {
    font-size: clamp(0.85rem, 2.8vw, var(--text-size-sm));
    color: var(--primary-color-dark);
    font-family: var(--font-medium);
    margin-bottom: 1rem;
    /* padding-inline: 1.25rem; */
    text-align: left;
  }


/* verberg de kop op mobiel  */
.survey-header {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.survey-list {
  display: block;
}


/* =========================
   CARD (tr)
========================= */
.survey-item {
  display: block;
  width: 100%;
  background-color: var(--color-blue-tint);
  border-radius: 0.9rem;
  padding: 1rem;
  margin: 0 0 0.75rem;

  /* Gebruik tbody zoals je eerst ul gebruikte */
  .survey-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 0 2rem 0;
  }



  border: 2px solid transparent;

 
  opacity: 0;
  transform: translateY(12px) scale(0.98);

  --delay: 0s;
  @supports (animation-delay: calc(sibling-index() * 80ms)) {
    --delay: calc(sibling-index() * 160ms);
  }

  animation: card-in 920ms var(--delay) cubic-bezier(.2,.8,.2,1) forwards;
}

/* Focus voor toetsenbord */
.survey-item:focus,
.survey-item:focus-visible {
  outline: none;
  border-color: #143a8b;
  box-shadow: 0 0 0 4px rgba(20, 58, 139, 0.25);
}


.survey-item:focus:not(:focus-visible) {
  box-shadow: none;
  border-color: transparent;
}

.question-column,
.answer-column {
  display: block;
  padding: 0;
  border: 0;
}

/* Labels */
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

    .survey-title {
      padding-inline: 0
    }

    /* TABELHEADER ZICHTBAAR */
    .survey-header {
      display: block;
      border-bottom: 1px solid #dbe6f5;
      color: #6d8bb8;
      font-family: var(--font-medium);
      font-size: 0.95rem;
      margin-top: 1rem;
    }
    .survey-header tr{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    }
    .survey-header tr th{
      text-align: left;
    }
    .survey-list {
      padding: 0;
      gap: 0.75rem;
      padding-top: 3rem;
    }

    /* TR wordt 2-koloms layout zoals jouw oude li-grid */
    .survey-list tr {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  padding: 1rem 1.25rem;
 background-color: #eef6ff; 
  border-radius: 12px;
    }

/* Tekst */
.question-column,
.answer-column {
  font-size: 0.95rem;
  font-weight: 700;
  color: #143a8b;
  line-height: 1.25;
}

/* =========================
   REDUCED MOTION
========================= */
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
   TABLET – 
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

    .survey-title {
      padding-inline: 0rem;
    }

    .survey-header {
      display: block;
      border-bottom: 1px solid #dbe6f5;
      color: #6d8bb8;
      font-family: var(--font-medium);
      font-size: 1rem;
      margin-top: 1rem;
    }
    .survey-header tr{
      padding: 0.75rem 24px;
    }
        .survey-header tr th{
      text-align: left;
    }
    .survey-list {
      padding: 0 0rem;
      gap: 0.75rem;
      padding-top: 3rem;
    }

   .survey-list tr {

  padding: 1.2rem 1.5rem;
  background-color: #eef6ff; /* ← DIT TOEVOEGEN */
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