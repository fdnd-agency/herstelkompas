<script>
  import RemoveFilterButton from '$lib/components/atoms/RemoveFilterButton.svelte';

  // Ontvangt de actieve filterperiode en sortering
  export let periode = null;
  export let sortering = null;

  // Koppelt de filterwaarden aan leesbare teksten
  const periodes = {
    '1': 'Deze maand',
    '3': 'Laatste 3 maanden',
    '6': 'Laatste 6 maanden'
  };

  // Zoekt de tekst die bij de gekozen periode hoort
  $: filterTekst = periodes[periode];

  // Verwijdert het periodefilter, maar behoudt de sortering
  $: verwijderUrl = sortering
    ? `/behandelingen?sort=${encodeURIComponent(sortering)}`
    : '/behandelingen';
</script>

{#if filterTekst}
  <div class="active-filter-chip">
    <span>Datum: {filterTekst}</span>
    <RemoveFilterButton href={verwijderUrl} />
  </div>
{/if}

<style>
  .active-filter-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;

    border-radius: 0.75rem;
    background-color: var(--color-blue-tint);
    color: #0B4989;

    font-weight: 600;
    margin-bottom: 2rem;
  }
</style>