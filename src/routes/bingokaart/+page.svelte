<script>
    let { data } = $props();
    import { page } from "$app/state";
    import { FileDescInput } from "$lib";
    import BingoGrid from "$lib/components/templates/BingoGrid.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/fileInputEnhance.css" />
</svelte:head>

<section>
    <header class="page-header">
        <h1>Bingokaart</h1>
        <p class="subtitle">Jouw tempo, onze steun.</p>
    </header>

<BingoGrid />

</section>

<style>
    .page-header {
        color: var(--primary-color-dark);
    }
</style>
