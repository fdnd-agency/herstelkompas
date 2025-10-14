<script>
  // Ontvangt data via props van de oudercomponent
  let { data } = $props();
  let behandelingen = data.behandelingen;

  // Importeer Sidebar en individuele Treatment component
  import { Sidebar, Treatment } from '$lib';
</script>

<div id="container">
  <!-- Sidebar navigatie -->
  <Sidebar />

  <main>
    <!-- Pagina titel en subtitel -->
    <h1>Behandelingen</h1>
    <p class="subtitle">Jouw overzicht</p>

    <!-- Tabelkop -->
    <div class="treatment-header">
      <span>Beschrijving</span>
      <span>Datum</span>
    </div>

    <!-- Dynamische behandelingslijst -->
    <div class="treatment-list">
      {#each behandelingen as behandeling}
        <Treatment behandeling={behandeling} />
      {/each}
    </div>
  </main>
</div>

<style>
  /* ===================================
     BASISSTIJLEN (Mobile First)
     =================================== */
  main {
    padding: 1.5rem;
    font-family: var(--font-regular);
    background-color: var(--color-white);
  }

  h1 {
    color: var(--primary-color-dark);
    font-family: var(--font-semibold);
    font-size: var(--text-size-xl);
    margin-bottom: 0.25rem;
  }

  .subtitle {
    color: var(--primary-color-dark);
    font-size: var(--text-size-sm);
    margin-bottom: 1rem; /* kleine spacing onder subtitel */
  }

  /* Kopje boven behandelingslijst */
  .treatment-header {
    display: flex;
    justify-content: space-between; /* Beschrijving links, datum rechts */
    color: color-mix(in srgb, var(--primary-color-dark) 70%, var(--color-white) 30%);
    font-size: var(--text-size-xs);
    font-family: var(--font-medium);
    margin-bottom: 0.5rem;
    border-bottom: 1px solid color-mix(in srgb, var(--primary-color-light) 40%, var(--color-white) 60%);
    padding-bottom: 0.25rem;
  }

  /* Lijst van behandelingen */
  .treatment-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem; /* ruimte tussen items */
  }

  /* ===================================
     MEDIA QUERIES (Tablet & Desktop)
     =================================== */
  @media (min-width: 768px) {
    .treatment-header {
      font-size: var(--text-size-sm);
      margin-bottom: 0.75rem;
    }

    .subtitle {
      margin-bottom: 2rem;
    }
  }
</style>
