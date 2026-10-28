<script>
  import FilterButton from '$lib/components/atoms/FilterButton.svelte';
  import RadioInput from '$lib/components/atoms/RadioInput.svelte';
  import ToepassenButton from '$lib/components/atoms/ToepassenButton.svelte';
</script>

<div class="filter-container">
<!-- Filterknop opent en sluit het filtermenu -->
<FilterButton />

<!-- De id koppelt de popover aan de FilterButton -->
<div id="filtermenu" popover>

  <!-- Verstuurt de geselecteerde periode via de URL -->
  <form method="GET">

    <!-- Groepeert de radio inputs -->
    <fieldset>
      <legend>Filter op periode</legend>

      <RadioInput tekst="Deze maand" waarde="1" />
      <RadioInput tekst="Laatste 3 maanden" waarde="3" />
      <RadioInput tekst="Laatste 6 maanden" waarde="6" />
    </fieldset>

    <!-- Herbruikbare toepassen-knop -->
    <ToepassenButton />

  </form>
</div>

</div>

<style>

  #filtermenu {
    width: min(20rem, calc(100vw - 2rem));
    padding: 1.5rem;
    background-color: white;
    border: 1px solid #dce5ed;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 0.1);
    color: #202020;
    position-anchor: --filterknop;
    top: anchor(bottom);
    left: anchor(left);
    margin-top: 2rem;
  }

  /* De browser controleert met has of het filtermenu geopend is */
  .filter-container:has(#filtermenu:popover-open) {
  --pijltje-rotatie: 180deg;
}

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  fieldset {
    display: grid;
    gap: 1rem;
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  legend {
    font-size: var(--text-size-sm);
    font-weight: 600;
    margin-bottom: 1rem;
  }
</style>