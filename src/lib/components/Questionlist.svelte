<script>
  export let vragenlijst = [];
  export let shortDate = "";
  export let format = (a) => {
    if (Array.isArray(a)) return a.join(", ");
    return a ?? "Geen antwoord ingevuld";
  };
</script>

<section 
  class="survey"
  aria-labelledby="survey-title"
>
  <h2 id="survey-title" class="survey-title">
    Jouw antwoorden op de vragenlijst op {shortDate}
  </h2>

  <!-- Desktop/tablet header -->
  <div class="survey-header" aria-hidden="true">
    <span class="question-column">Vraag</span>
    <span class="answer-column">Antwoord</span>
  </div>

  {#if vragenlijst && vragenlijst.length > 0}
    <ul class="survey-list">
      {#each vragenlijst as item}
        <li>
          <article class="survey-item">
            <h3 class="question-column">{item.vraag}</h3>
            <p class="answer-column">{format(item.antwoord)}</p>
          </article>
        </li>
      {/each}
    </ul>
  {:else}
    <p>Er zijn nog geen vragenlijstresultaten gekoppeld aan deze behandeling.</p>
  {/if}
</section>

<style>

/* =========================================================== */
/* Mobile – default                                             */
/* =========================================================== */

.survey {

  .survey-title {
    font-size: clamp(0.85rem, 2.8vw, var(--text-size-sm));
    color: var(--primary-color-dark);
    font-family: var(--font-medium);
    margin-bottom: 1rem;
    padding-inline: 1.25rem;
    text-align: left;
  }

  .survey-header {
    display: none;
  }

  .survey-list {
    list-style: none;
    padding: 0 1.20rem;
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;

    li {
      background: #eef6ff;
      width: 100%;
      padding: 1.25rem 1rem;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);

      /* Animatie */
      --delay: 0s;
      @supports (animation-delay: calc(sibling-index() * 0.1s)) {
        --delay: calc(sibling-index() * 0.1s);
      }
      animation: slideIn 0.4s var(--delay) ease-out both;

      h3 {
        margin: 0;
        font-family: var(--font-semibold);
        font-size: 1rem;
        color: var(--primary-color-dark);

        &::before {
          content: "Vraag";
          display: block;
          font-size: 0.75rem;
          color: #7aa6d9;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
      }

      p {
        margin: 0;
        font-size: 1rem;
        font-family: var(--font-medium);
        color: var(--primary-color-dark);

        strong {
          display: block;
          font-size: 0.75rem;
          color: #7aa6d9;
          font-weight: 600;
          margin-bottom: 0.1rem;
        }
      }
    }
  }

  .survey-item {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .question-column,
  .answer-column {
    text-align: left;
  }

  /* =========================================================== */
  /* Reduced Motion                                               */
  /* =========================================================== */

  @media (prefers-reduced-motion: reduce) {
    .survey-list li {
      animation: none;
      transform: none;
      opacity: 1;
    }
  }
}

/* =========================================================== */
/* Animatie                                                     */
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

/* =========================================================== */
/* Tablet (768–1023px)                                          */
/* =========================================================== */

@media (min-width: 768px) and (max-width: 1023px) {
  .survey {

    .survey-title {
      padding-inline: 2rem;
    }

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
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      gap: 0.75rem;

      li {
        display: grid;
        grid-template-columns: 1fr 150px;
        align-items: center;
        padding: 0.9rem 1.1rem;

        h3::before,
        p strong {
          display: none;
        }
      }
    }

    .survey-item {
      display: contents;
    }

    .question-column {
      grid-column: 1;
      text-align: left;
    }

    .answer-column {
      grid-column: 2;
      text-align: right;
    }
  }
}

/* =========================================================== */
/* Desktop                                                      */
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
      padding-left: 2rem;
      padding-right: 2rem;
      gap: 0.75rem;

      li {
        display: grid;
        grid-template-columns: 1fr 200px;
        align-items: center;
        padding: 1rem 1.25rem;

        h3::before,
        p strong {
          display: none;
        }
      }
    }

    .survey-item {
      display: contents;
    }

    .question-column {
      grid-column: 1;
      text-align: left;
    }

    .answer-column {
      grid-column: 2;
      text-align: right;
    }
  }
}

</style>