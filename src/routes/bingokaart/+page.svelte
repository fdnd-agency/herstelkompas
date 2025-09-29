<script>
    let { data } = $props();
    import { Bingocard } from '$lib'
    import { Sidebar } from '$lib'
    import { page } from '$app/state';
</script>
<div id="container">
    <Sidebar/>
    <main>
        <h1>Bingokaart pagina</h1>
        <Bingocard/>
    </main>
</div>
