<script>
    let { data } = $props();
    import { page } from "$app/state";
    import { FileDescInput } from "$lib";
    import BingoCard from "$lib/components/organisms/BingoCard.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/fileInputEnhance.css" />
</svelte:head>

<section>
    <header class="page-header">
        <h1>Bingokaart</h1>
        <p class="subtitle">Jouw tempo, onze steun.</p>
    </header>

    <BingoCard />
</section>

<style>
    .page-header {
        color: var(--primary-color-dark);
    }
</style>
