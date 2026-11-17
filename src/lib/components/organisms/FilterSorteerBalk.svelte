<script>
  import FilterMenu from '$lib/components/molecules/FilterMenu.svelte';
  import SorteerSelect from '$lib/components/atoms/SorteerSelect.svelte';
  import ActiveFilterChip from '$lib/components/molecules/ActiveFilterChip.svelte';

  // Ontvang de actieve periode en sortering van de pagina
  export let periode = null;
  export let sortering = null;
</script>

<div class="filter-sorteer-balk">
  <FilterMenu {sortering} />

  <SorteerSelect {periode} {sortering} />
</div>

<ActiveFilterChip period={periode} sortOrder={sortering} />

<style>

div{
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