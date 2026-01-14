<script>
    import { Bingocard } from '$lib';
    import { Sidebar } from '$lib';
    import { page } from '$app/state';
    import BingoAlert from '$lib/components/BingoAlert.svelte';

    let { data, form } = $props();
    let behandelingen = data.behandelingen;
    let bingokaart = data.bingokaart;
    let awards = data.awards; //
    let prizes = data.prizes;

    let showAlert = $state(false);

    let count =
        form?.count ??
        bingokaart.filter(item => item.checked).length;
</script>

<h1>Bingokaart pagina</h1>
{#if form?.showPopup}
  <BingoAlert {count} {prizes} />
{/if}
<Bingocard {bingokaart}/>