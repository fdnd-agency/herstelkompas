<script>
  import Spinner from '$lib/components/atoms/Spinner.svelte';
  import CheckIcon from '$lib/assets/CheckIcon.svelte';
  import ErrorIcon from '$lib/assets/ErrorIcon.svelte';

  let {
    type = 'loading',
    label = 'Bezig met laden...'
  } = $props();
</script>

<div class="status-message" class:success={type === 'success'} role="status">
 {#if type === 'success'}
  <CheckIcon />
  {:else if type === 'error'}
  <ErrorIcon />
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
    border: 0.1px solid var(--color-neutral-400);
}
  
</style>