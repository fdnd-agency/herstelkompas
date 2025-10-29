<script>
	import favicon from '$lib/assets/favicon.svg';
	import { Bingocard, Sidebar, Header } from '$lib'
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/stylesheet.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/css/globals.css">
</svelte:head>
<style>
	@media (min-width: 750px){
		:global(main){
			display: inline-block;
			vertical-align: top;
		}
	}
	@supports (display: grid){
		@media (min-width: 750px){
			:global(main){
				grid-row: 2;
			}
			:global(#container){
				display: grid;
				grid-template-columns: 350px 1fr;
				grid-template-rows: max-content 1fr;
				gap: 1rem;
			}
		}
	}

</style>
<div id="container">
    <Sidebar/>
    <Header/>
    <main>
		{@render children?.()}
    </main>
</div>