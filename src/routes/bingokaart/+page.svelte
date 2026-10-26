<script>
    let { data } = $props();
    import { page } from "$app/state";
    import { FileDescInput } from "$lib";
    import Activity from "$lib/components/atoms/Activity.svelte";
    import RadioButtonGroup from "$lib/components/molecules/RadioButtonGroup.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/fileInputEnhance.css" />
</svelte:head>

<section>
    <header class="page-header">
        <h1>Bingokaart</h1>
        <p class="subtitle">Jouw tempo, onze steun.</p>
    </header>

    <Activity />

    <RadioButtonGroup />
</section>

<style>
    .page-header {
        color: var(--primary-color-dark);
    }
</style>
