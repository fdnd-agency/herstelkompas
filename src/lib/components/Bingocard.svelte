<script>
    const { member, form, behandelingen, currentCard, bingokaart } =  $props()
    import { enhance } from "$app/forms";
    console.log(currentCard)
    console.log(bingokaart)
    let enhancedForm = form;

    function handleFormSubmit({ result, update }) {
        if (result?.newCardState) { // if result and result.newCardstate https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
            enhancedForm = result;
        }
    }
</script>

<h2>Ik ben een bingokaart</h2>
<form class="bingocard" method="POST" use:enhance={{ onSubmit: handleFormSubmit }}>
  {#if form && form.newCardState}
    <!-- use the current card from the form -->
    {#each form.newCardState as square}
      <label class="bingo-square">
        <input 
          type="checkbox" 
          name="bingocard-field" 
          value={square.activiteit}
          checked={square.checked}
        >
        <span>{square.activiteit}</span>
      </label>
    {/each}
  {:else}
    <!-- fallback: use the card from Directus -->
    {#each bingokaart as square}
      <label class="bingo-square">
        <input 
          type="checkbox" 
          name="bingocard-field" 
          value={square.activiteit}
          checked={square.checked}
        >
        <span>{square.activiteit}</span>
      </label>
    {/each}
  {/if}

  <input type="submit" value="test">
</form>

<style>
    .bingocard {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
        max-width: 600px;
        margin: 2rem auto;
    }

    .bingo-square {
        aspect-ratio: 1.3 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.8125rem;
        background: #3990CA;
        font-size: 1.5rem;
        cursor: pointer;
        position: relative;
    }

    .bingo-square input {
        appearance: none;
        border: solid rgb(255, 255, 255) 1.5px;
        aspect-ratio: 1;
        width: 1.2em;
        border-radius: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        margin: .5rem;
    }

    .bingo-square span {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .bingo-square input:checked {
        background: white;
    }

    .bingo-square input:checked + span {
        border-radius: 0.8125rem;
        background: #0C8825;
        transition: background .3s;
    }
</style>