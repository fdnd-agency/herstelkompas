<script>
    let { data } = $props();
    import { page } from "$app/state";
    import { FileDescInput } from "$lib";
    import { BingoRadioButton } from "$lib";
    import Activity from "$lib/components/atoms/Activity.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/fileInputEnhance.css" />
</svelte:head>

<section>
    <header class="page-header">
        <h1>Bingokaart</h1>
        <p class="subtitle">Jouw tempo, onze steun.</p>
    </header>

    <BingoRadioButton state="1" />
    <BingoRadioButton state="2" />

    <Activity />
</section>

<style>
    .page-header {
        color: var(--primary-color-dark);
    }
</style>
