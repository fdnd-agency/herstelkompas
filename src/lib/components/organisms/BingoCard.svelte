<script>
    import Activity from "$lib/components/atoms/Activity.svelte";
    import RadioButtonGroup from "$lib/components/molecules/RadioButtonGroup.svelte";
</script>

<article>
    <Activity />
    <RadioButtonGroup />
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px; /* later spacing token toevoegen */

        width: 400px;
        height: 150px;

        background-color: var(--color-primary-300);
        border-radius: 10px;
    }
</style>
