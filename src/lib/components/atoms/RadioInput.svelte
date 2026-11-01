<script>
let { tekst, waarde } = $props();

</script>

 <label>
  <input
    type="radio"
    name="periode"
    value={waarde}
  />

  <span>{tekst}</span>
</label>

<style>

label{

    display:flex;
    align-items: center;
    cursor: pointer;
    gap: 0.75rem;
}

input[type="radio"] {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0;
    accent-color: var(--primary-color-dark);
    cursor: pointer;
  }

  input:focus-visible {
    outline: 2px solid var(--primary-color-dark);
    outline-offset: 3px;
  }

  span {
    font-size: 1rem;
    color: #202020;
  }


</style>