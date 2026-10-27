<script>

import FilterMenu from "../molecules/FilterMenu.svelte";
import SorteerSelect from "../atoms/SorteerSelect.svelte";

</script>
<div>
 <FilterMenu />
  <SorteerSelect />



</div>

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