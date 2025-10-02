<script>
    let { data, form } = $props();
    import { Bingocard } from '$lib';
    import { Sidebar } from '$lib';
    import { page } from '$app/state';
    console.log(data.joepie);
</script>
<div id="container">
    <Sidebar/>
    <main>
        <h1>Bingokaart pagina</h1>
        <Bingocard {form}/>
    </main>
</div>
