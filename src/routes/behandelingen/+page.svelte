<script>
  // Ontvangt data via props van de oudercomponent
  let { data } = $props();
  let behandelingen = data.behandelingen;

  // Importeer Sidebar en individuele Treatment component
  import { Sidebar, Treatment } from '$lib';
</script>
<header class="page-header">
  <h1>Behandelingen</h1>
  <p class="subtitle">Jouw overzicht</p>
</header>

<section class="treatment-section">
  <!-- Header van de behandelingslijst: kolomlabels -->
  <header class="treatment-header">
    <span>Beschrijving</span>
    <span>Datum</span>
  </header>

  <!-- Semantische lijst van behandelingen -->
  <ul class="treatment-list">
    {#each behandelingen as behandeling (behandeling.id)}
      <li>
        <article class="treatment-item-wrapper">
          <Treatment behandeling={behandeling} />
        </article>
      </li>
    {/each}
  </ul>
</section>

<style>

/* Hoofdcontent */
main {
  font-family: var(--font-regular);
  background-color: var(--color-white);
}

/* Pagina header */
.page-header h1 {
  color: var(--primary-color-dark);
  font-family: var(--font-semibold);
  font-size: var(--text-size-xl);
  margin-bottom: 0.25rem;
  margin-left: 1rem;

}

.page-header .subtitle {
  color: var(--primary-color-dark);
  font-size: var(--text-size-sm);
  margin-bottom: 1rem;
      margin-left: 1rem;

}

/* Behandelingslijst header: kolomnamen */
.treatment-header {
  display: flex;
  justify-content: space-between;
  color: color-mix(in srgb, var(--primary-color-dark) 70%, var(--color-white) 30%);
  font-size: var(--text-size-xs);
  font-family: var(--font-medium);
  margin-bottom: 0.5rem;
  border-bottom: 1px solid color-mix(in srgb, var(--primary-color-light) 40%, var(--color-white) 60%);
  padding-bottom: 0.25rem;
}

/* Lijst van behandelingen */
.treatment-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.treatment-list li {
  margin: 0;
}

/* =========================== MEDIA QUERIES (Tablet & Desktop) =========================== */
@media (min-width: 768px) {
  .treatment-header {
    font-size: var(--text-size-sm);
    margin-bottom: 0.75rem;
  }
  .page-header .subtitle {
    margin-bottom: 2rem;
  }
}
</style>

