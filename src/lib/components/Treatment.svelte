<script>
  // Ontvangt één behandeling als prop vanuit de oudercomponent
  export let behandeling;
</script>

<!-- behandeling-item met beschrijving, datum en pijl -->
<div class="treatment-item">
  <div class="beschrijving">
    {behandeling.beschrijving || 'Geen beschrijving beschikbaar'}
  </div>

  <div class="date-and-arrow">
    <span class="datum">
      {behandeling.datum
        ? new Date(behandeling.datum).toLocaleDateString('nl-NL')
        : '-'}
    </span>
    <span class="arrow">→</span>
  </div>
</div>

<style>
  /* ===================================
     BASISSTIJLEN 
     =================================== */
  .treatment-item {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    background-color: color-mix(in srgb, var(--primary-color-light) 15%, var(--color-white) 85%);
    border-radius: 0.5rem;
    padding: 1rem 1.25rem;
    transition: background-color 0.2s ease;
    font-weight: 700;
  }

  /* Hover-effect voor visuele feedback */
  .treatment-item:hover {
    background-color: color-mix(in srgb, var(--primary-color-light) 25%, var(--color-white) 75%);
  }

  /* Beschrijvingstekst links */
  .beschrijving {
    flex: 1; 
    font-family: var(--font-semibold);
    font-size: var(--text-size-sm);
    color: var(--primary-color-dark);
    line-height: 1.4;
  }

  /* Container voor datum + pijl rechts */
  .date-and-arrow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0; /* Voorkomt dat de inhoud wordt samengedrukt */
  }

  /* Datumstijl */
  .datum {
    font-family: var(--font-semibold);
    font-size: var(--text-size-sm);
    color: var(--primary-color-dark);
    white-space: nowrap; /* Voorkomt afbreken van datum */
  }

  /* Pijlstijl */
  .arrow {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--primary-color-dark);
    transition: transform 0.2s ease;
  }

  /* Subtiele pijl-animatie bij hover */
  .treatment-item:hover .arrow {
    transform: translateX(4px);
  }

  /* ===================================
     MEDIA QUERIES (Tablet & Desktop)
     =================================== */
  @media (min-width: 768px) {
    .treatment-item {
      padding: 1rem 1.5rem;
    }

    .beschrijving,
    .datum {
      font-size: var(--text-size-md);
    }
  }
</style>
