<script>
  export let href;
</script>

<a href={href} aria-label="Verwijder datumfilter">
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
</a>

<style>
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    color: #0B4989;
    text-decoration: none;
  }

  svg {
    display: block;
  }

  a:focus-visible {
    outline: 2px solid #0B4989;
    outline-offset: 2px;
    border-radius: 0.25rem;
  }
</style>