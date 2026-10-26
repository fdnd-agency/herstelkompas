
<div>
<form method="get" action="/behandelingen">

<label for="sorteren">Sorteren op:</label>

<select id="sorteren" name="sort">
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
    color: #0d4c8f;

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
    color: #0d4c8f; 
  }


  button{

    padding: 0.75rem 1rem;
     border-radius: 0.75rem;
     color: white;
     background-color: #0d4c8f;
     border: none;
     margin-left: 5px;
     font-weight: 600;
  }
  
</style>