<script>
  import RemoveFilterButton from '$lib/components/atoms/RemoveFilterButton.svelte';

  // Ontvangt de actieve filterperiode en sortering van de bovenliggende component
  export let periode = null;
  export let sortering = null;

  // Koppelt de waarden uit de URL aan leesbare teksten
  const periodes = {
    '1': 'Deze maand',
    '3': 'Laatste 3 maanden',
    '6': 'Laatste 6 maanden'
  };

  // Zoekt de tekst die bij de gekozen periode hoort
  // $: berekent dit opnieuw wanneer de periode verandert
  $: filterTekst = periodes[periode];

  // Maakt een URL zonder het periodefilter, maar behoudt de sortering
  // Bijvoorbeeld: /behandelingen?periode=3&sort=oudste
  // Wordt: /behandelingen?sort=oudste
  $: verwijderUrl = sortering
    ? `/behandelingen?sort=${encodeURIComponent(sortering)}`
    : '/behandelingen';
</script>

<!-- Toon de chip alleen wanneer er een actief periodefilter is -->
{#if filterTekst}
  <div class="active-filter-chip">
    <span>{filterTekst}</span>
    <RemoveFilterButton href={verwijderUrl} />
  </div>
{/if}

<style>
  .active-filter-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 2rem;
    background-color: var(--color-blue-tint);
  }
</style>