<script>
	let { data } = $props();
	import { page } from '$app/state';
</script>

<section class="welcome">
	<h1>Welkom bij jouw omgeving!</h1>
	<p>Maak een nieuwe behandeling door de bingokaart, vragenlijst of scans te updaten, of bekijk eerdere behandelingen via onderstaande link.</p>
	<a href="/behandelingen" class="btn-primary">Bekijk eerdere behandelingen</a>
</section>

<style>
	.welcome {
		background-color: var(--color-white);
		font-family: var(--font-regular);
		max-width: 35em;
	}

	.welcome h1 {
		color: var(--primary-color-dark);
		font-family: var(--font-semibold);
		font-size: var(--text-size-xl);
		margin: 0;
		margin-bottom: .25rem;
	}
	.welcome p{
		color: var(--primary-color-dark);
    	font-size: var(--text-size-sm);
	}
</style>
