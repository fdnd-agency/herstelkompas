<script>
    let { data } = $props();
    let behandelingen = data.behandelingen
</script>

<!-- <div id="container">
  <Sidebar />

  <main>
    <h1>Behandelingen</h1>
    <a href="#" class="overview-link">Jouw overzicht</a>

    <div class="treatment-header">
      <span>Beschrijving</span>
      <span>Datum</span>
    </div>

    <div class="treatment-list">
      {#each data.behandelingen as behandeling}
        <Treatment behandeling={behandeling} />
      {/each}
    </div>
  </main>
</div> -->
<!-- 
<style>
  main {
    padding: 2rem;
    font-family: var(--font-regular);
    background-color: var(--color-white);
  }

  h1 {
    color: var(--primary-color-dark);
    font-family: var(--font-semibold);
    font-size: var(--text-size-xl);
    margin-bottom: 0.25rem;
  }

  .overview-link {
    color: var(--primary-color-dark);
    font-family: var(--font-medium);
    text-decoration: underline;
    display: inline-block;
    margin-bottom: 1.5rem;
    font-size: var(--text-size-sm);
  }

  .treatment-header {
    display: flex;
    justify-content: space-between;
    color: var(--primary-color-dark);
    font-family: var(--font-medium);
    font-size: var(--text-size-sm);
    border-bottom: 1px solid hsl(0 0% 90%);
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  .treatment-list {
    display: flex;
    flex-direction: column;
  }
</style> -->
