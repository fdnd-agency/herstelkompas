<script>
	let { data } = $props();
	import { page } from '$app/state';
</script>


<h1>Welkom, Rosalie</h1>
<p>Fijn dat je er bent. hier kun je verder met je behandeling</p>

<section>

<div>
<h2>Ga verder met je vragenlijst</h2>
<p>Vul de vragenlijst in en krijg meer inzicht in hoe het met je gaat.</p>
<a href="/vragenlijst">Verder met vragenlijst <img class="icon" src="/img/pijltje.png" alt="Illustratie van een vragenlijst"></a>
</div>

<img class="illustratie" src="/img/vragenlijst.png" alt="Illustratie van een vragenlijst">

</section>



<style>

h1 {
	color: var(--primary-color-dark);
	font-family: var(--font-semibold);
	font-size: 2.4rem;
	margin: 0 0 1rem;
}

h1 + p {
	color: var(--primary-color-dark);
	font-family: var(--font-regular);
	font-size: var(--text-size-md);
	margin: 0 0 3rem;
}



section {
	/* mobiel */
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	padding: 2rem 1.5rem;
	background-color: var(--color-blue-tint);
	border-radius: 1rem;

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	h2 {
		color: var(--primary-color-dark);
		font-family: var(--font-semibold);
		font-size: var(--text-size-xl);
		margin: 0 0 1rem;
	}

	p {
		color: var(--color-neutral-dark);
		font-family: var(--font-regular);
		font-size: var(--text-size-md);
		max-width: 24rem;
		margin: 0 0 2rem;
	}

	a {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;

		padding: 0.8rem 1.25rem;

		background-color: var(--primary-color-dark);
		color: var(--color-white);

		font-family: var(--font-semibold);
		font-size: var(--text-size-md);
		font-weight: 600;

		text-decoration: none;
		border-radius: 0.5rem;
	}

	.icon {
		width: 15px;
		height: 15px;
	}

	.illustratie {
		width: 100%;
		max-width: 250px;
		height: auto;
		justify-self: center;
	}


	/* TABLET */
	@media (min-width: 600px) {
		padding: 2.5rem;

		.illustratie {
			max-width: 300px;
		}
	}


	/* DESKTOP */
	@media (min-width: 900px) {
		grid-template-columns: 2fr 1fr;
		align-items: center;

		max-width: 60rem;
		min-height: 20rem;
		padding: 3rem 2rem;

		.illustratie {
			width: 350px;
			max-width: 100%;
			justify-self: center;
		}
	}
}
</style>
