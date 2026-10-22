<label for="sorteren">Sorteren op:</label>

<select id="sorteren" name="sort">
  <option value="nieuwste">Nieuwste</option>
  <option value="oudste">Oudste</option>
</select>

<style>
  select {
    padding: 0.75rem 1rem;
    background-color: #eaf3fc;
    color: #0d4c8f;
    border: 1px solid #0d4c8f;
    border-radius: 0.75rem;
    font: inherit;
    cursor: pointer;
  }

  select:focus-visible {
    outline: 2px solid #0d4c8f;
    outline-offset: 3px;
  }
</style>