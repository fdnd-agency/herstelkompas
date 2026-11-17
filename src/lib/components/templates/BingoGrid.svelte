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
    {#each activiteiten as activiteit, i}
        <BingoCard activiteit={activiteit.activiteit} index={i} />
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
