<script>
    let { data, form } = $props();
    let behandelingen = data.behandelingen
    let bingokaart = data.bingokaart
    console.log(bingokaart)
    import { Bingocard } from '$lib';
    import { Sidebar } from '$lib';
    import { page } from '$app/state';
    let currentCard;
    if (form && form.newCardState) {
        currentCard = form.newCardState;
    }
</script>
<div id="container">
    <Sidebar/>
    <main>
        <h1>Bingokaart pagina</h1>
        <Bingocard {form} {behandelingen} {currentCard} {bingokaart}/>
    </main>
</div>
