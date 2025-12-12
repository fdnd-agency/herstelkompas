<script>
  import TreatmentBingo from '$lib/components/Treatmentbingo.svelte';
  import Questionlist from '$lib/components/Questionlist.svelte';

  export let data;
</script>

<TreatmentBingo 
  activiteit={data.activiteit}
  Questionlist={Questionlist}
/>

<style>
  :global(body) {
    margin: 0;
    height: 100dvh;

    background-image:
      repeating-conic-gradient(
        from var(--angle1, 0deg),
        transparent 0 3.5%, 
        rgb(245, 122, 136) 0 5%
      ),
      repeating-conic-gradient(
        from var(--angle, 0deg),
        lightpink 0 1.5%, 
        deeppink 0 5%
      );

    animation:
      draai 10s linear infinite,
      draai1 10s linear infinite;
  }

  @keyframes draai {
    0% { --angle: 0deg; }
    100% { --angle: 360deg; }
  }

  @keyframes draai1 {
    0% { --angle1: 0deg; }
    100% { --angle1: -360deg; }
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @property --angle1 {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
</style>