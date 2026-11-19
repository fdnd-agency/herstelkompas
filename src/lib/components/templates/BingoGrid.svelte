<script>
    import BingoCard from "$lib/components/organisms/BingoCard.svelte";

    let { data } = $props();
    const activiteiten = $derived(data.activiteiten ?? []);
</script>

<section class="bingo-grid">
    {#each activiteiten as activiteit, i}
        <BingoCard activiteit={activiteit.label} index={i} />
    {/each}
</section>

<style>
    /* mobile first */
    .bingo-grid {
        margin-top: 40px;
        width: max-content;
        height: max-content;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;

        /* tablet */
        @media (width >= 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        /* desktop */
        @media (width >= 1250px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
