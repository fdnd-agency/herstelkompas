<script>
  import { TreatmentBingo } from '$lib';
  import { QuestionList } from '$lib';
  import { ScansDetail } from '$lib';
  export let data;
</script>

<TreatmentBingo 
  activiteit={data.activiteit}
  QuestionList={QuestionList}
  ScansDetail={ScansDetail}
/>
