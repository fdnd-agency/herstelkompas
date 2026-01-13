<script>
  import TreatmentBingo from '$lib/components/Treatmentbingo.svelte';
  import Questionlist from '$lib/components/Questionlist.svelte';
  import ScansDetail from '$lib/components/ScansDetail.svelte';
  export let data;
</script>

<TreatmentBingo 
  activiteit={data.activiteit}
  Questionlist={Questionlist}
  ScansDetail={ScansDetail}
/>
