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
    accent-color: #0d4c8f;
    cursor: pointer;
  }

  input:focus-visible {
    outline: 2px solid #0d4c8f;
    outline-offset: 3px;
  }

  span {
    font-size: 1rem;
    color: #202020;
  }


</style>