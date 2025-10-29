<script>
	let { data } = $props();
	import { page } from '$app/state';
</script>

<section class="welcome">
	<h1>Welkom Bij jouw omgeving!</h1>
</section>

<style>
	.welcome {
		display: flex;
		justify-content: center;       
		align-items: flex-start;        
		text-align: center;
		min-height: 100vh;                      
		background-color: var(--color-white);
		font-family: var(--font-regular);
	}

	.welcome h1 {
		color: var(--primary-color-dark);
		font-family: var(--font-semibold);
		font-size: var(--text-size-xl);
		margin: 0;
	}
</style>
