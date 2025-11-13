
<script>
    let { vraag, i, length, agreementsScales } = $props();
    import { onMount } from "svelte";
    let count = $state(1);
    let jsEnabled = $state(false);
    console.log(vraag + " current")
    //When page is loaded or hard refreshed
    
</script>


<fieldset class={i == 0 ? "animation--slide-in" : ""}>
    <legend>Vraag {i + 1} van {length}:<span>{vraag.vraag}</span></legend>
    <div class="input-wrapper">
        <label class="visually-hidden" for="q-{i + 1}">Kies de mate van instemming.</label>
        <input type="range" name="q-{i + 1}" id="q-{i + 1}" step=10/>
            {#each agreementsScales as agreementsScale, j}
                <div style="text-align: {agreementsScale.align}" aria-hidden="true" data-content="{agreementsScale.text}"></div>
            {/each}                       
    </div>

</fieldset>
<style>

     fieldset {
        padding: 0.5rem 1rem 0.5rem;
        border: none;
        margin: 0;
        transition: 1.25s ease;
        display: flex;
        justify-content: start;
        max-width: 48rem;
    }
    @media (prefers-reduced-motion: no-preference) {

        :global(.js-enabled .animation--slide-in) legend{
            animation: .5s slide-in ease-in;
        }
    }

    legend {
        font-weight: 700;
        font-size: var(--text-size-lg);
        color: var(--color-neutral);
        max-width: 48rem;
        display: flex;
        gap: .5rem;
        flex-direction: column;
    }
    legend span{
        font-size: 1rem;
        font-weight: 500;
    }
    .input-wrapper {
        align-items: center;
        gap: 1rem;
        width: fit-content;
        cursor: pointer;
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: min-content min-content;
        
    }
    .input-wrapper div{
        grid-row: 2;
    }
    .input-wrapper div::after{
        color: var(--color-neutral);
        font-weight: bold;
        content: attr(data-content);
    }
    input[type="range"]{
        grid-row: 1;
        grid-column: 1 / -1;
        accent-color: var(--color-neutral);
    }
    input[type="range"]:focus{
        accent-color: var(--color-green-accent);
    }
    input[type="range"]:focus-visible{
        outline: 3px dashed var(--color-neutral);
        outline-offset: 2px;
        outline-width: medium;
    }
</style>