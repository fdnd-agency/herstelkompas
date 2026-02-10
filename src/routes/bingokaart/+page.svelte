<script>
    import { BingoCard, BingoAlert } from '$lib';
    import { page } from '$app/state';
    let { data, form } = $props();
    let behandelingen = data.behandelingen;
    let bingokaart = data.bingokaart;
    let awards = data.awards; //
    let prizes = data.prizes;

    let showAlert = $state(false);
    let success = $state(false)

    let count =
        form?.count ??
        bingokaart.filter(item => item.checked).length;
  
    if(form?.success) {
        success = true
        setTimeout(() => {
            success = false
        }, 1000)
    }
</script>

<header class="page-header">
    <h1 id="behandelingstitel">Bingokaart</h1>
    <p class="subtitle">Jouw voortgang</p>
</header>

{#if form?.showPopup}
  <BingoAlert {count} {prizes} />
{/if}
<BingoCard {bingokaart} {success} />

<style>
  .page-header {
    margin-bottom: 3em;

    h1 {
      color: var(--primary-color-dark);
      font-family: var(--font-semibold);
      font-size: var(--text-size-xl);
      margin: 0 0 0.25rem 0;
    }

    .subtitle {
      color: var(--primary-color-dark);
      font-size: var(--text-size-sm);
      margin: 0;
    }
  }
</style>