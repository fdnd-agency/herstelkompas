<script>
    import Activity from "$lib/components/atoms/Activity.svelte";
    import RadioButtonGroup from "$lib/components/molecules/RadioButtonGroup.svelte";

    // Initiële declaratie
    let isOpen = $state(false);
    let activityState = 0;
    let { activiteit } = $props();
</script>

<button onclick={() => (isOpen = !isOpen)} class="state-{activityState}">
    <Activity {activiteit} />
    {#if isOpen}
        <RadioButtonGroup />
    {/if}
</button>

<style>
    button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px; /* later spacing token toevoegen */
        border: 1px solid var(--primary-color-dark);

        width: 400px;
        height: 150px;

        border-radius: 10px;
    }

    .state-0 {
        /* default - blauw */
        background-color: var(--color-primary-300);
    }

    .state-1 {
        /* mee bezig - oranje */
        background-color: var(--color-orange-300);
    }

    .state-2 {
        /* gedaan - groen */
        background-color: var(--color-green-400);
    }
</style>
