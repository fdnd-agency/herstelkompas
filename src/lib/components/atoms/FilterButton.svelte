<!-- Opent en sluit het filtermenu via de Popover API -->
<button type="button" popovertarget="filtermenu">
  <img
    src="/img/filteren_icon.svg"
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

    background-color: #eaf3fc;
    color: #0d4c8f;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    font: inherit;
  }

  span {
    font-weight: 600;
  }

  .pijltje {
      margin-left: 0.25rem;
  }

  button:focus-visible {
    outline: 2px solid #0d4c8f;
    outline-offset: 3px;
  }
</style>