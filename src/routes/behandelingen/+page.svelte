<script>
  import FilterSorteerBalk from '$lib/components/organisms/FilterSorteerBalk.svelte';
  import StatusMessage from '$lib/components/molecules/StatusMessage.svelte';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import { onDestroy } from 'svelte';

  export let data;

  $: behandelingen = data.behandelingen;

  let status = 'idle';
  let timer;
  let startTime;

  // Controleer of de gebruiker filtert of sorteert
  function isFilterSortNavigation(from, to) {
    return (
      from?.url.pathname === '/behandelingen' &&
      to?.url.pathname === '/behandelingen' &&
      (
        (
          to.url.searchParams.has('periode') &&
          from.url.searchParams.get('periode') !==
          to.url.searchParams.get('periode')
        ) ||
        from.url.searchParams.get('sort') !==
        to.url.searchParams.get('sort')
      )
    );
  }

  // Start de Loading State
  beforeNavigate(({ from, to }) => {
    clearTimeout(timer);

    if (isFilterSortNavigation(from, to)) {
      status = 'loading';
      startTime = Date.now();
    } else {
      status = 'idle';
    }
  });

  // Wanneer de navigatie is afgerond
  afterNavigate(({ from, to }) => {
    if (!isFilterSortNavigation(from, to)) return;

    // Toon de Error State bij een mislukte request
    if (data.status === 'error') {
      status = 'error';
      return;
    }

    // Sluit het filtermenu
    const filterMenu = document.getElementById('filtermenu');

    if (filterMenu?.hidePopover && filterMenu.matches(':popover-open')) {
      filterMenu.hidePopover();
    }

    // Loading State minimaal 3 seconden tonen
    const remainingTime = Math.max(
      0,
      3000 - (Date.now() - startTime)
    );

    timer = setTimeout(() => {
      status = 'success';

      // Success State 2 seconden tonen
      timer = setTimeout(() => {
        status = 'idle';
      }, 2000);

    }, remainingTime);
  });

  // Timer opruimen bij het verlaten van de pagina
  onDestroy(() => {
    clearTimeout(timer);
  });
</script>


<section class="treatment-section" aria-labelledby="behandelingstitel">
  <!-- Page header -->
  <header class="page-header">
    <h1 id="behandelingstitel">Behandelingen</h1>
    <p class="subtitle">Jouw overzicht</p>
  </header>



<FilterSorteerBalk
  periode={data.periode}
  sortering={data.sortering}
  showActiveFilter={status === 'idle' && data.status !== 'error'}
/>

{#if status === 'loading'}
  <StatusMessage
    type="loading"
    label="Behandelingen bijwerken..."
  />
{:else if data.status === 'error'}
  <StatusMessage
    type="error"
    label="Behandelingen laden mislukt. Probeer opnieuw."
  />
{:else if status === 'success'}
  <StatusMessage
    type="success"
    label="Overzicht bijgewerkt"
  />
{/if}



  <!-- Column labels – only visible on tablet and desktop -->
  <header class="treatment-header" role="group" aria-label="Kolomnamen">
    <span>Beschrijving</span>
    <span>Datum</span>
  </header>

  <!-- Treatments list -->
  <ul class="treatment-list" role="list">
    {#each behandelingen as behandeling (behandeling.id)}
      <li role="listitem">
        <!-- Card links to treatment detail page -->
        <a
          href={`/behandelingen/${behandeling.id}`}
          class="treatment-card"
          aria-labelledby={`titel-${behandeling.id}`}
          aria-describedby={`datum-${behandeling.id}`}
        >
          <article>
            <!-- Description block -->
            <header class="treatment-info">
              <p class="label">Beschrijving</p>
              <h2 id={`titel-${behandeling.id}`} class="title">
                {behandeling.beschrijving || 'Geen beschrijving'}
              </h2>
            </header>

            <!-- Date block -->
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

            <!-- Decorative arrow indicator -->
            <span class="arrow" aria-hidden="true">→</span>
          </article>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
/* Page wrapper */
.treatment-section {
  font-family: var(--font-regular);

  /* ===== Page header ===== */
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

  /* ===== Column headers (hidden on mobile) ===== */
  .treatment-header {
    display: none;

    span{

      font-weight: 700;
      font-size: var(--text-size-xs);
      color: var(--primary-color-dark);
    }
  }

  /* ===== Treatment cards list ===== */
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

      /* Hover state */
      &:hover {
        background-color: color-mix(in srgb, var(--primary-color-light) 30%, white 70%);
        transform: translateY(-1px);
      }

      /* Visible focus ring for keyboard users */
      &:focus-visible {
        outline: 2px solid var(--primary-color-dark);
        outline-offset: 3px;
      }

      /* Mobile layout: stacked content */
      article {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      /* Small field label (shown on mobile) */
      .label {
        font-size: var(--text-size-xs);
        color: color-mix(in srgb, var(--primary-color-dark) 60%, white 40%);
        margin: 0 0 0.25rem 0;
      }

      /* Treatment title */
      .title {
        font-size: var(--text-size-md);
        font-family: var(--font-semibold);
        color: var(--primary-color-dark);
        margin: 0;
      }

      /* Date block */
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

      /* Arrow icon positioning (mobile) */
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

  /* ===== TABLET / DESKTOP LAYOUT ===== */
  @media (min-width: 640px) {
    /* Show column header row */
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

    /* Card becomes a grid with 3 columns (description / date / arrow) */
    .treatment-list {
      .treatment-card {
        display: grid;
        grid-template-columns: 1fr auto 20px;
        align-items: center;
        gap: 1rem;
        padding: 1.25rem 1.5rem;

        /* Use "contents" so the grid is applied to inner elements */
        article {
          display: contents;
        }

        /* Hide field labels on larger screens (since columns are visible) */
        .label {
          display: none;
        }

        /* Center the date column */
        .date-block {
          justify-self: center;

          .date {
            text-align: center;
          }
        }

        /* Arrow sits in the last column */
        .arrow {
          position: static;
          transform: none;
          justify-self: end;
        }
      }
    }
  }

  /* Enable scrolling for the list on larger screens */
  @media (min-width: 850px) {
    .treatment-list {
      overflow-y: scroll;
      height: calc(100vh - 215px);
    }
  }
}
</style>