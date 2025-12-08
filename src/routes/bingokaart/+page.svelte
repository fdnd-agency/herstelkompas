<script>
    let { data } = $props();
    let behandelingen = data.behandelingen
    let bingokaart = data.bingokaart
    import { Bingocard } from '$lib';
    import { Sidebar } from '$lib';
    import { page } from '$app/state';
</script>

        <h1>Bingokaart pagina</h1>
        <Bingocard {bingokaart}/>