<script>
  import RemoveFilterButton from '$lib/components/atoms/RemoveFilterButton.svelte';

  // Ontvangt de actieve filterperiode en sortering
  export let periode = null;
  export let sortering = null;
  export let period = null;
  export let sortOrder = null;

  // Koppelt de filterwaarden aan leesbare teksten
  const periodes = {
    '1': 'Deze maand',
    '3': 'Laatste 3 maanden',
    '6': 'Laatste 6 maanden'
  };

  // Zoekt de tekst die bij de gekozen periode hoort
  $: filterTekst = periodes[periode];
  $: filterText = periodLabels[period];

  // Verwijdert het periodefilter, maar behoudt de sortering
  $: verwijderUrl = sortering
    ? `/behandelingen?sort=${encodeURIComponent(sortering)}`
  $: removeUrl = sortOrder
    ? `/behandelingen?sort=${encodeURIComponent(sortOrder)}`
    : '/behandelingen';
</script>

{#if filterText}
  <div class="active-filter-chip">
    <span>Datum: {filterText}</span>
    <RemoveFilterButton href={removeUrl} />
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
