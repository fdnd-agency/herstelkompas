<script>
  import { Treatment } from '$lib';

  export let data;
  const behandelingen = data.behandelingen;
</script>

<section class="treatment-section" aria-labelledby="behandelingstitel">
  <header class="page-header">
    <h1 id="behandelingstitel">Behandelingen</h1>
    <p class="subtitle">Jouw overzicht</p>
  </header>

  <!-- Kolomtitels – alleen zichtbaar op tablet en desktop -->
  <header class="treatment-header" role="group" aria-label="Kolomnamen">
    <span>Beschrijving</span>
    <span>Datum</span>
  </header>

  <!-- Lijst van behandelingen -->
  <ul class="treatment-list" role="list">
    {#each behandelingen as behandeling (behandeling.id)}
      <li role="listitem">
        <a
          href={`/behandelingen/${behandeling.id}`}
          class="treatment-card"
          aria-labelledby={`titel-${behandeling.id}`}
          aria-describedby={`datum-${behandeling.id}`}
        >
          <article>
            <header class="treatment-info">
              <p class="label">Beschrijving</p>
              <h2 id={`titel-${behandeling.id}`} class="title">
                {behandeling.beschrijving || 'Geen beschrijving'}
              </h2>
            </header>

            <section class="date-block">
              <p class="label">Datum</p>
              <time
                id={`datum-${behandeling.id}`}
                class="date"
                datetime={behandeling.datum}
              >
                {new Date(behandeling.datum).toLocaleDateString('nl-NL')}
              </time>
            </section>

            <span class="arrow" aria-hidden="true">→</span>
          </article>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
.treatment-section {
  padding: 1rem;
  font-family: var(--font-regular);

  /* ===== Pagina header ===== */
  .page-header {
    margin-bottom: 3em;

    h1 {
      color: var(--primary-color-dark);
      font-family: var(--font-semibold);
      font-size: var(--text-size-xl);
      margin: 0 0 0.25rem 0;
    }

    .subtitle {
      color: var(--primary-color-dark);
      font-size: var(--text-size-sm);
      margin: 0;
    }
  }

  /* ===== Kolomtitels ===== */
  .treatment-header {
    display: none;
  }

  /* ===== Behandelingskaarten ===== */
  .treatment-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .treatment-card {
      display: block;
      background-color: var(--color-blue-tint);
      border-radius: 0.75rem;
      padding: 1rem;
      text-decoration: none;
      color: var(--primary-color-dark);
      position: relative;
      transition: background-color 0.3s ease, transform 0.2s ease;

      &:hover {
        background-color: color-mix(in srgb, var(--primary-color-light) 30%, white 70%);
        transform: translateY(-1px);
      }

      &:focus-visible {
        outline: 2px solid var(--primary-color-dark);
        outline-offset: 3px;
      }

      article {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .label {
        font-size: var(--text-size-xs);
        color: color-mix(in srgb, var(--primary-color-dark) 60%, white 40%);
        margin: 0 0 0.25rem 0;
      }

      .title {
        font-size: var(--text-size-md);
        font-family: var(--font-semibold);
        color: var(--primary-color-dark);
        margin: 0;
      }

      .date-block {
        display: flex;
        flex-direction: column;

        .date {
          font-size: var(--text-size-sm);
          font-family: var(--font-medium);
          color: var(--primary-color-dark);
          margin: 0;
        }
      }

      .arrow {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.25rem;
        color: var(--primary-color-dark);
      }
    }
  }

  /* ===== TABLET / DESKTOP ===== */
  @media (min-width: 640px) {
    .treatment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-medium);
      font-size: var(--text-size-xs);
      color: color-mix(in srgb, var(--primary-color-dark) 70%, white 30%);
      border-bottom: 1px solid color-mix(in srgb, var(--primary-color-light) 40%, white 60%);
      padding-inline: 1.5rem;
      padding-bottom: 0.25rem;
      margin-bottom: 0.75rem;
    }

    .treatment-list {
      .treatment-card {
        display: grid;
        grid-template-columns: 1fr auto 20px;
        align-items: center;
        gap: 1rem;
        padding: 1.25rem 1.5rem;

        article {
          display: contents;
        }

        .label {
          display: none;
        }

        .date-block {
          justify-self: center;

          .date {
            text-align: center;
          }
        }

        .arrow {
          position: static;
          transform: none;
          justify-self: end;
        }
      }
    }
  }
}
</style>
