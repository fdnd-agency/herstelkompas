<script>
  import Spinner from '$lib/components/atoms/Spinner.svelte';

  let {
    label = 'Bezig met laden...'
  } = $props();
</script>

<div class="status-message" role="status">
  <Spinner />
  <span>{label}</span>
</div>
