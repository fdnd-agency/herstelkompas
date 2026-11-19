<script>
  export let periode = null;
  export let sortering = null;
</script>

<div>
<form method="get" action="/behandelingen">

   <!-- Behoud de gekozen periode tijdens het sorteren -->
    {#if periode}
      <input type="hidden" name="periode" value={periode} />
    {/if}

<label for="sorteren">Sorteren op:</label>

<select id="sorteren" name="sort" value={sortering || 'nieuwste'}>
  <option value="nieuwste">Nieuwste</option>
  <option value="oudste">Oudste</option>
</select>

  <button type="submit">Sorteren</button>

</form>

<!-- hier maak ik ook aal een url aan /behandelingen?sort=oudste -->

</div>



<style>
div{
  display:flex;
  gap: 1rem;
  align-items: center;
}

select {
    padding: 0.75rem 1rem;
    background-color: white;
    color: var(--primary-color-dark);
    border-radius: 0.75rem;
    font: inherit;
    cursor: pointer;
    appearance: none;
    border: none;
    box-shadow:
    0 0 0 1px rgb(13 76 143 / 0.15),
    2px 3px 3px rgb(13 76 143 / 0.2);
      }
  
  label{
    color: var(--primary-color-dark); 
  }

  button{

    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    color: white;
    background-color: var(--primary-color-dark);
    border: none;
    margin-left: 5px;
    font-weight: 600;
  }
  
</style>