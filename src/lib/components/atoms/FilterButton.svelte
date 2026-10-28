<!-- Opent en sluit het filtermenu via de Popover API -->
<button type="button" popovertarget="filtermenu">
  <img
    src="/icons/filteren_icon.svg"
    alt=""
    width="24"
    height="24"
  />

  <span>Filteren</span>

  <img
    class="pijltje"
    src="/img/pijltje_filteren.svg"
    alt=""
    width="16"
    height="16"
  />
</button>

<style>
  button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    anchor-name: --filterknop;

    width: 8rem;
    min-height: 3rem;
    padding: 0.75rem;

    background-color: var(--color-blue-tint);
    color: --primary-color-dark;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    font: inherit;
  }

  span {
    font-weight: 600;
    color: var(--primary-color-dark);
  }

  .pijltje {
      margin-left: 0.25rem;
      width: 14px;
      height: 10px;
      transform: rotate(var(--pijltje-rotatie, 0deg));
      transition: transform 0.2s ease;
    }

/* Houdt rekening met gebruikers die minder animatie willen */
@media (prefers-reduced-motion: reduce) {
  .pijltje {
    transition: none;
  }
}

  button:focus-visible {
    outline: 2px solid var( --primary-color-dark);
    outline-offset: 3px;
  }
</style>