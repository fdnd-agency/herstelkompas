<script>
    import BingoCard from "$lib/components/organisms/BingoCard.svelte";
    const activiteiten = [
        { activiteit: "Werk hervatten zonder belemmeringen." },
        { activiteit: "Sporten in de groep" },
        { activiteit: "Verjaardagen/feestjes bezoeken zonder belemmeringen." },
        { activiteit: "Radio/muziek aan in de auto of thuis." },
        { activiteit: "In de tuin werken zonder vermoeidheid." },
        {
            activiteit:
                "Klussen zonder dat mijn hoofd direct op slot raakt en in de hoofdpijn/stress schiet.",
        },
        {
            activiteit:
                "Praten/gesprekken voeren zonder dat de emoties/vermoeidheid/pijn me overvallen.",
        },
        { activiteit: "Bioscoop bezoeken." },
        {
            activiteit:
                "Langere auto ritten volbrengen & rijden in het donker.",
        },
    ];
</script>

<section class="bingo-grid">
    {#each activiteiten as activiteit}
        <BingoCard activiteit={activiteit.activiteit} />
    {/each}
</section>

<style>
    .bingo-grid {
        width: max-content;
        height: max-content;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        flex-flow: wrap;

        gap: 20px;
    }
</style>
