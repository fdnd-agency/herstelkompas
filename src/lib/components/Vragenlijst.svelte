
<script>
    let { vragenlijst, agreementsScales } = $props();
    import { onMount } from "svelte";
    import { Vraag } from '$lib';
    let count = $state(1);
    let jsEnabled = $state(false);
</script>
<form method="POST" id="formEl">
    {#each vragenlijst as vraag, i}
        <Vraag {i} length={vragenlijst.length} {vraag} {agreementsScales}/>
    {/each}

    <div id="formControl">
        <input type="submit" value="Verstuur vragenlijst" />
    </div>
</form>
<style>
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-height: calc(100vh - 150px);

        overflow-y: auto;
        padding-bottom: 3rem;
    }
    @media (min-width: 850px) {
        form {
            max-height: calc(100vh - 90px);
        }
    }
    @keyframes slide-in{
        0%{
            translate: 0 100px;
        }
        100%{
            translate: 0 0;
        }
    }
   
    :global(main) {
        font-family: var(--font-regular);
        background-color: var(--color-white);
    }

    input[type="submit"] {
        cursor: pointer;
        padding: 8px 30px;
        background-color: #54689c;
        color: #def0fc;
        border: 2px solid #54689c;
        border-radius: 10px;
        margin-left: 1rem;
        font-size: 18px;
        font-weight: bold;
    }
    input[type="submit"]:hover,
    input[type="submit"]:focus-visible {
        background-color: #e8ebf2;
        color: var(--color-neutral);
    }
</style>