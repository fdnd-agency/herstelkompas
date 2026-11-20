<div class="spinner" aria-hidden="true"></div>



<style>
  .spinner {
    width: 1.5rem;
    height: 1.5rem;

    border: 3px solid #bcd9f5;
    border-top-color: #1769aa;
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
