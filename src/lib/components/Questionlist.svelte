<script>
  // De vragen die binnenkomen uit de parent-component (array van objecten)
  export let vragenlijst = [];

  // De datum waarop de vragenlijst is ingevuld
  export let shortDate = "";

  // Functie die een antwoord netjes formatteert:
  // - Arrays worden omgezet naar een string met komma's (bijv. meerdere keuzes)
  // - Null/undefined antwoorden worden vervangen door "Geen antwoord ingevuld"
  export let format = (a) => {
    if (Array.isArray(a)) return a.join(", ");
    return a ?? "Geen antwoord ingevuld";
  };
</script>

<!-- Hoofdcontainer van deze pagina-sectie -->
<section class="survey">
  

  <!-- Toegankelijke tabel voor vraag/antwoord-overzicht -->
  <table class="survey-table">


    <!-- Tabelbody waar de dynamische data wordt ingevuld -->
    <tbody class="survey-list">
      {#each vragenlijst as item}
        <tr class="survey-item">
          
          <!-- Cel voor de vraag -->
          <td class="question-column">{item.vraag}</td>

          <!-- Cel voor het antwoord, geformatteerd door de format() functie -->
          <td class="answer-column">{format(item.antwoord)}</td>

        </tr>
      {/each}
    </tbody>

  </table>
</section>


<style>
.survey {

  .survey-title {
    font-size: clamp(0.85rem, 2.8vw, var(--text-size-sm));
    color: var(--primary-color-dark);
    font-family: var(--font-medium);
    margin-bottom: 1rem;
    padding-inline: 1.25rem;
    text-align: left;
  }

  /* TABLE RESET */
  .survey-table {
    width: 100%;
    border-collapse: collapse;
  }

  .survey-header {
    display: none;
  }


  .survey-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1.25rem 2rem 1.25rem;
  }

  /* === MOBIEL CARD  === */
  .survey-list tr {
    width: 100%;
    padding: 1.25rem 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    border: 3px solid rgba(255, 255, 255, 0.35);

    /* Gradient background */
    background: linear-gradient(-45deg, #ff3c00, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientMove 1s ease infinite, slideIn 0.1s var(--delay) ease-out both;

    /* Sibling-index delay */
    --delay: 0s;
    @supports (animation-delay: calc(sibling-index() * 0.1s)) {
      --delay: calc(sibling-index() * 0.1s);
    }
  }

  .survey-list td {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: var(--font-medium);
    color: var(--primary-color-dark);
    text-align: left;
  }

  .survey-list td.question-column::before {
    content: "Vraag";
    display: block;
    font-size: 0.75rem;
    color: #7aa6d9;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .survey-list td.answer-column::before {
    content: "Antwoord";
    display: block;
    font-size: 0.75rem;
    color: #7aa6d9;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  /* =========================================================== */
  /* Reduced Motion                                               */
  /* =========================================================== */
  @media (prefers-reduced-motion: reduce) {
    .survey-list tr {
      animation: none;
      transform: none;
      opacity: 1;
    }
  }
}

/* =========================================================== */
/* Animatie Keyframes                                           */
/* =========================================================== */

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* =========================================================== */
/* Tablet (768–1023px)                                          */
/* =========================================================== */
@media (min-width: 768px) and (max-width: 1023px) {
  .survey {

    .survey-title {
      padding-inline: 2rem;
    }

    /* Header zichtbaar */
    .survey-header {
      display: grid;
      grid-template-columns: 1fr 150px;
      padding: 0.75rem 2rem;
      border-bottom: 1px solid #dbe6f5;
      color: #6d8bb8;
      font-family: var(--font-medium);
      font-size: 0.95rem;
      margin-top: 1rem;
    }

    .survey-list {
      padding: 0 1.5rem;
      gap: 0.75rem;
      padding-top: 3rem;
    }

    /* Kaarten worden tabel-achtige rijen */
    .survey-list tr {
      display: grid;
      grid-template-columns: 1fr 150px;
      align-items: center;
      padding: 1rem 1.25rem;

      /* Gradient blijft gelden */
      background: linear-gradient(-45deg, #ff3c00, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradientMove 2s ease infinite;
      border-radius: 12px;
    }
  }
}

/* =========================================================== */
/* Desktop (1024px+)                                            */
/* =========================================================== */
@media (min-width: 1024px) {
  .survey {

    .survey-title {
      padding-inline: 4rem;
    }

    .survey-header {
      display: grid;
      grid-template-columns: 1fr 200px;
      padding: 0.75rem 4rem;
      border-bottom: 1px solid #dbe6f5;
      color: #6d8bb8;
      font-family: var(--font-medium);
      font-size: 1rem;
      margin-top: 1rem;
    }

    .survey-list {
      padding: 0 2rem;
      gap: 0.75rem;
      padding-top: 3rem;
    }

    /* Desktop layout */
    .survey-list tr {
      display: grid;
      grid-template-columns: 1fr 200px;
      align-items: center;
      padding: 1.2rem 1.5rem;

      /* Gradient blijft bestaan */
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradientMove 2s ease infinite;

      border-radius: 12px;
    }
  }
}
</style>