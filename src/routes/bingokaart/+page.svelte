<script>
    let { data } = $props();
    import { page } from "$app/state";
    import { FileDescInput } from "$lib";
    import BingoGrid from "$lib/components/templates/BingoGrid.svelte";
    import Button from "$lib/components/atoms/Button.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/fileInputEnhance.css" />
</svelte:head>
<header class="page-header">
    <h1>Bingokaart</h1>
    <p class="subtitle">Jouw tempo, onze steun.</p>
</header>

<form method="POST" class="bingo-form">
    <BingoGrid {data} />
    <Button label="Opslaan" name="action" value="save" />
</form>

<style>
    .page-header {
        color: var(--primary-color-dark);
    }

    .bingo-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
</style>
