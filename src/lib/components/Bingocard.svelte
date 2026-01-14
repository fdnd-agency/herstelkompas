<script>
    const { bingokaart, success } = $props() // haalt inhoud bingokaart en succes boolean op (true, false)

    let loading = $state(false) // $state maakt het reactive, op alle veranderd het

    function handleSubmit() {
        loading = true // zodra er op de verzend button word gedrukt veranderd die meteen naar de loading state
    }
</script>

<h2>Ik ben een bingokaart</h2>
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
        margin: 0 auto;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);

        font-size: clamp(1.125rem, 2.25vw, 18px);

        width: 100%;
        max-width: 650px;

        gap: 1rem;

        @media (max-width: 600px) {
            gap: 0.5rem;
            font-size: clamp(12px, 4vw, 16px);
        }
    }

    .bingo-square {
        position: relative;
        aspect-ratio: 1.3 / 1;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.8125rem;
        background-color: #137BC0;
        color: white;

        user-select: none;
        cursor: pointer;

        transition: transform .2s cubic-bezier(.2,.9,.2,1);

        &:has(:checked) {
            background-color: #0C8825;
        }
    }

    .bingo-square:hover,
    .bingo-square:has(input:focus-visible) {
        transform: scale(1.03);
    }

    .bingo-square input {
        appearance: none;
        border: solid rgb(255, 255, 255) 1.5px;
        aspect-ratio: 1;
        width: 1em;
        border-radius: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        margin: .5rem;

        @media (max-width: 600px) {
            margin: 0.3rem;
        }
    }

    .bingo-square span {
        width: 100%;
        max-height: 100%;
        text-align: center;
            
        padding: 0.5rem;
        overflow: hidden;

        @media (max-width: 600px) {
            padding: 0.3rem;
        }
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
        
        color: #54689C;
        font-weight: 600;
        background-color: #DEF0FC;
        border: none;
        border-radius: .6rem;

        height: 2.1rem;
        grid-column: 2;
    
        cursor: pointer;
    }
</style>