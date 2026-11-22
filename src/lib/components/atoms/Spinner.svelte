<div class="spinner" aria-hidden="true"></div>



<style>
  .spinner {
    width: 1.5rem;
    height: 1.5rem;
    border: 3px solid var(--color-primary-400);
    border-top-color: var(--primary-color-dark);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation: none;
    }
  }

</style>
