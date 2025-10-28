<script>
  export let data;
  const activiteit = data.activiteit;

  // Datum formatteren vanuit Directus
  const datum = new Date(activiteit.datum);
  const formattedDate = datum.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
</script>

<section class="behandeling">
  <header class="page-header">
    <h1>{formattedDate}</h1>
    <p>Hieronder vind je informatie over deze behandeling.</p>
  </header>

  <!-- Hoofdnavigatie -->
  <nav aria-label="Hoofd navigatie" class="page-nav">
    <ul>
      <li>
        <a href="#" class="active" aria-current="page">
          <img src="/icons/brain.svg" alt="" aria-hidden="true" />
          <span>Bingokaart</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/frame-1.svg" alt="" aria-hidden="true" />
          <span>Scans</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/icons/frame-2.svg" alt="" aria-hidden="true" />
          <span>Vragenlijst</span>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Bingokaart sectie -->
  <section
    class="bingokaart"
    aria-labelledby="bingokaart-titel"
    aria-live="polite"
  >
    <h2 id="bingokaart-titel">
      De status van jouw bingokaart op {formattedDate}
    </h2>

    <ul class="kaart-grid" role="list">
      {#each activiteit.bingokaart as item, index}
        <li
          class:checked={item.checked}
          role="listitem"
          tabindex="0"
          aria-checked={item.checked}
          aria-label={`Vakje ${index + 1}: ${item.activiteit} ${
            item.checked ? 'is voltooid' : 'nog niet voltooid'
          }`}
        >
          <article>
            <header>
              <span class="dot" aria-hidden="true"></span>
            </header>
            <p>{item.activiteit}</p>
          </article>
        </li>
      {/each}
    </ul>
  </section>
</section>

<style>
.behandeling {
  padding: 1.25rem 0.75rem;
  text-align: center;
  font-family: var(--font-regular);

  .page-header {
    text-align: left;
    align-items: flex-start;
    justify-items: start;
    padding-inline: 1.5rem;
    margin-top: 1.5rem;

    h1 {
      color: var(--primary-color-dark);
      font-size: clamp(1.25rem, 4vw, var(--text-size-xl));
      font-family: var(--font-semibold);
      margin: 0;
    }

    p {
      color: var(--primary-color-dark);
      font-size: clamp(0.9rem, 3vw, var(--text-size-md));
      font-family: var(--font-medium);
      margin-top: 0.25rem;
      margin-bottom: 0;
    }
  }

  /* ===== Navigatie ===== */
  .page-nav {
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 0.5rem;
      list-style: none;
      padding: 0.5rem 0;
      margin: 1rem 0 1.25rem;
      border-bottom: 1px solid hsl(204, 33%, 85%);
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: var(--primary-color-dark);
      font-family: var(--font-semibold);
      font-size: clamp(0.7rem, 2.5vw, var(--text-size-sm));
      padding-block: 2rem 0.25rem;
      border-bottom: 2px solid transparent;
      transition: color 0.3s ease, border-color 0.3s ease, filter 0.3s ease;

      &:hover,
      &:focus {
        color: var(--primary-color-light);
        outline: none;
      }

      img {
        width: 18px;
        height: 18px;
        display: block;
        transition: filter 0.3s ease;
      }
    }
  }

  /* ===== Bingokaart ===== */
  .bingokaart {
    h2 {
      font-size: clamp(0.85rem, 2.8vw, var(--text-size-sm));
      color: var(--primary-color-dark);
      font-family: var(--font-medium);
      margin-bottom: 1rem;
    }

    .kaart-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
      gap: 0.5rem;
      justify-content: center;
      list-style: none;
      padding: 2.5rem 0.5rem 0;
      margin: 0 auto;
      max-width: 360px;

      li {
        border-radius: 0.5rem;
        background-color: var(--primary-color-light);
        color: var(--color-white);
        display: grid;
        place-items: center;
        width: 100%;
        height: 89px;
        transition: background 0.3s, box-shadow 0.3s;
        position: relative;
        cursor: pointer;

        &:focus {
          outline: 3px solid var(--primary-color-dark);
          outline-offset: 2px;
        }

        &.checked {
          background-color: var(--color-green-accent);
        }

        p {
          font-weight: 500;
          font-size: clamp(0.75rem, 2.5vw, var(--text-size-sm));
          padding: 0 0.25rem;
          font-family: var(--font-medium);
        }

        .dot {
          position: absolute;
          top: 0.4rem;
          left: 0.4rem;
          width: 8px;
          height: 8px;
          background-color: var(--color-white);
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
