<script>
  // Props: the survey data (array of { vraag, antwoord })
  export let vragenlijst = [];

  // Formatter for answers:
  // - Arrays become comma-separated strings
  // - null/undefined becomes a fallback string
  export let format = (a) => {
    if (Array.isArray(a)) return a.join(", ");
    return a ?? "Geen antwoord ingevuld";
  };

  // Safety: ensure we always loop over an array
  $: safeVragenlijst = Array.isArray(vragenlijst) ? vragenlijst : [];
</script>

<section class="survey" aria-label="Vragenlijst resultaten">
  <table class="survey-table" aria-describedby="survey-desc">
    <!-- Screen reader description for the table -->
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
          <!-- Question cell -->
          <td class="question-column" headers="col-vraag">
            {item.vraag}
          </td>

          <!-- Answer cell -->
          <td class="answer-column" headers="col-antwoord">
            {format(item.antwoord)}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
/* Screen-reader-only utility class */
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
}

/* Base table layout */
.survey-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}


/* Title styling (if used elsewhere in markup) */
.survey-title {
  font-size: clamp(0.85rem, 2.8vw, var(--text-size-sm));
  color: var(--primary-color-dark);
  font-family: var(--font-medium);
  margin-bottom: 1rem;
  /* padding-inline: 1.25rem; */
  text-align: left;
}

/* Hide the table header on mobile (visually) */
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

/* Make tbody behave like a block container on mobile */
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

  /* NOTE: This nested rule seems intended for .survey-list layout,
     but it's currently placed inside .survey-item (CSS nesting).
     Keep as-is if you rely on nesting support. */
  .survey-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 0 2rem 0;
  }

  /* Default border (focus will override) */
  border: 2px solid transparent;

  /* Entry animation defaults */
  opacity: 0;
  transform: translateY(12px) scale(0.98);

  /* Staggered delay (with sibling-index support if available) */
  --delay: 0s;
  @supports (animation-delay: calc(sibling-index() * 80ms)) {
    --delay: calc(sibling-index() * 160ms);
  }

  animation: card-in 920ms var(--delay) cubic-bezier(.2,.8,.2,1) forwards;
}


/* Keyboard focus styling for the row "card" */
.survey-item:focus,
.survey-item:focus-visible {
  outline: none;
  border-color: #143a8b;
  box-shadow: 0 0 0 4px rgba(20, 58, 139, 0.25);
}

/* Remove focus styles when focus isn't keyboard (mouse click) */
.survey-item:focus:not(:focus-visible) {
  box-shadow: none;
  border-color: transparent;
}

/* On mobile, make cells stack vertically */
.question-column,
.answer-column {
  display: block;
  padding: 0;
  border: 0;
}

/* "Label" text shown above the cell content (mobile) */
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

/* Remove inline padding for the title (if used) */
.survey-title {
  padding-inline: 0;
}

/* Make table header visible (override the "hidden" header) */
.survey-header {
  display: block;
  border-bottom: 1px solid #dbe6f5;
  color: #6d8bb8;
  font-family: var(--font-medium);
  font-size: 0.95rem;
  margin-top: 1rem;
}

/* Header row layout */
.survey-header tr {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.survey-header tr th {
  text-align: left;
}

/* Spacing between items */
.survey-list {
  padding: 0;
  gap: 0.75rem;
  /* padding-top: 3rem; */
}

/* Turn each TR into a "card" (mobile layout) */
.survey-list tr {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 1rem 1.25rem;
  background-color: #eef6ff;
  border-radius: 12px;
}

/* Typography for question + answer text */
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

/* Card entry animation */
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

  /* Use a grid layout on tablet */
  .survey-list {
    display: grid;
    gap: 5px;
  }

  .survey-title {
    padding-inline: 0rem;
  }


  /* Show header row on tablet */
  .survey-header {
    display: block;
    border-bottom: 1px solid #dbe6f5;
    color: #6d8bb8;
    font-family: var(--font-medium);
    font-size: 1rem;
    margin-top: 1rem;
  }


  .survey-header tr {
    padding: 0.75rem 24px;
  }

  .survey-header tr th {
    text-align: left;
  }

  .survey-list {
    padding: 0 0rem;
    gap: 0.75rem;
    /* padding-top: 3rem; */
  }

  /* Card styling for each row */
  .survey-list tr {
    padding: 1.2rem 1.5rem;
    background-color: #eef6ff; /* Added background color */
    border-radius: 12px;
  }

  .survey-item {
    margin: 0;
    padding: 1.1rem 1.2rem;
    border-radius: 1rem;
  }

  /* Slightly adjust label sizes on tablet */
  .question-column::before,
  .answer-column::before {
    font-size: var(--text-size-xs);
    margin-bottom: 0.25rem;
  }
}
</style>