<script>
    const { bingokaart, success } = $props() // haalt inhoud bingokaart en succes boolean op (true, false)

    let loading = $state(false) // $state maakt het reactive, op alle veranderd het

    function handleSubmit() {
        loading = true // zodra er op de verzend button word gedrukt veranderd die meteen naar de loading state
    }
</script>



<form onsubmit={handleSubmit} class="bingocard" method="POST">
    {#each bingokaart as square}
        <label class="bingo-square">
            <input type="checkbox" name="bingocard-field" value={square.activiteit} checked={square.checked}>
            <span>{square.activiteit}</span>
        </label>
    {/each}

    <button class="save-button" type="submit">
        {#if loading}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3"><animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150"/><animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"/></circle><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>
        {:else if success}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.8" d="M5 11l6 6l10 -10"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path></svg>
        {:else}
            <span>Opslaan</span>
        {/if}
    </button>
</form>

<style>
    .bingocard-wrapper {
        position: relative;
    }

    .bingocard {
        position: relative;
        margin-inline: auto;

        display: grid;
        place-items: stretch;

        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(3, 1fr);

        width: 100%;
        max-width: 600px;

        gap: 1rem;
        aspect-ratio: 1.1 / 1;


        @media (max-width: 550px) {
            gap: 0.5rem;
            font-size: clamp(12px, 4vw, 16px);
        }

        @media (min-width: 550px) {
            max-width: 500px;
        }

        @media (min-width: 850px) {
            max-width: 600px;
        }
    }

    .bingo-square {
        position: relative;
        /* aspect-ratio: 1.3 / 1; */
        height: 100%;
        padding: .5rem;


        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
        background-color: var(--primary-color-dark);
        color: var(--color-white);

        user-select: none;
        cursor: pointer;

        transition: transform .2s cubic-bezier(.2,.9,.2,1);

        &:has(:checked) {
            background-color: var(--color-green-accent);
        }
    }

    .bingo-square:hover,
    .bingo-square:has(input:focus-visible) {
        transform: scale(1.03);
    }

    .bingo-square input {
        appearance: none;
        box-sizing: border-box;

        width: 11px;
        height: 11px;
        aspect-ratio: 1;

        border: 1.5px solid white;
        border-radius: 20%;

        position: absolute;
        top: 0;
        left: 0;
        margin: .5rem;

        @media (max-width: 600px) {
            margin: 0.3rem;
            width: .6rem;
            height: .6rem;
        }
    }

    .bingo-square span {
        width: 100%;
        max-height: 100%;
        text-align: center;
            
        /* margin-top: .8rem; */
        /* padding: 0.5rem; */
        overflow: hidden;

        word-break: break-word;
        overflow-wrap: anywhere;
        hyphens: auto;
    }

    .bingo-square input:checked {
        background: white;
    }
    
    .bingo-square:has(input:focus-visible) {
        outline: 3px solid #000000;
        outline-offset: 2px;
    }
    
    input[type="submit"]{
        position: absolute;
        top: calc(100% + 1rem);
        left: 50%;
        translate: -50% 0;
    }

    @media (prefers-reduced-motion: reduce) {
        .bingo-square:hover {
            transform: none;
        }
    }

    .save-button {
        font-size: inherit;
        font-family: inherit;

        display: flex;
        align-items: center;
        justify-content: center;
        
        color: var(--primary-color-dark);
        font-weight: 600;
        background-color: var(--color-blue-tint);
        border: none;
        border-radius: .6rem;

        height: 2.1rem;
        grid-column: 2;
    
        cursor: pointer;
    }
</style>