<script>
    const { bingokaart, success } = $props() // haalt inhoud bingokaart en succes boolean op (true, false)
    import { BingoSquare } from '$lib';
    let loading = $state(false) // $state maakt het reactive, op alle veranderd het

    function handleSubmit() {
        loading = true // zodra er op de verzend button word gedrukt veranderd die meteen naar de loading state
    }
</script>



<form onsubmit={handleSubmit} class="bingocard" method="POST">
    {#each bingokaart as square}
        <BingoSquare square={square}/>
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
    
    input[type="submit"]{
        position: absolute;
        top: calc(100% + 1rem);
        left: 50%;
        translate: -50% 0;
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