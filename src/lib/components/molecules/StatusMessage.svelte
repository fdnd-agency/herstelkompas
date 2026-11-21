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

<style>
  .status-message {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.75rem 1rem;
    background-color: #ecf5ff;
    color: #174a79;
    border-radius: 0.75rem;
  }
</style>