<script>
  import Spinner from '$lib/components/atoms/Spinner.svelte';
  import CheckIcon from '$lib/components/atoms/CheckIcon.svelte';

  let {
    type = 'loading',
    label = 'Bezig met laden...'
  } = $props();
</script>

<div class="status-message" class:success={type === 'success'} role="status">
 {#if type === 'success'}
  <CheckIcon />
  {:else}
  <Spinner />
{/if}

  <span>{label}</span>
</div>




<style>

.status-message {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background-color: var(--color-blue-tint);
    color: var(--primary-color-dark);
    border-radius: 0.75rem;
  }

  .success {
    
    background-color: var(--color-neutral-lighter);
    color: var(--color-green-800);
  }
</style>