<script>
  import FilterMenu from '$lib/components/molecules/FilterMenu.svelte';
  import SorteerSelect from '$lib/components/atoms/SorteerSelect.svelte';
  import ActiveFilterChip from '$lib/components/molecules/ActiveFilterChip.svelte';

  export let periode = null;
  export let sortering = null;
  export let showActiveFilter = true;
</script>

<div class="filter-sorteer-balk">
  <FilterMenu {sortering} />

  <SorteerSelect {periode} {sortering} />
</div>

{#if showActiveFilter}
  <ActiveFilterChip
    period={periode}
    sortOrder={sortering}
  />
{/if}

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 2rem;

    @media (min-width: 700px) {
      flex-direction: row;
      align-items: center;
    }
  }
</style>