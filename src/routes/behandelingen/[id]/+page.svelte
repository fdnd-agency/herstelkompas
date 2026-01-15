<script>
  import { TreatmentBingo } from '$lib';
  import { Questionlist } from '$lib';
  import { ScansDetail } from '$lib';
  export let data;
</script>

<TreatmentBingo 
  activiteit={data.activiteit}
  Questionlist={Questionlist}
  ScansDetail={ScansDetail}
/>
