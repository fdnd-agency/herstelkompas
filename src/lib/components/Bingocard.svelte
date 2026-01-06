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