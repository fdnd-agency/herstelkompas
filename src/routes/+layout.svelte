<script>
	import { onNavigate, afterNavigate } from '$app/navigation';
	import { Bingocard, Sidebar, Header } from '$lib'
	import { page } from '$app/state';
	import { Waves } from '$lib';
	let { children } = $props();
	let feedbackMessage = $state("");
	if(page.form?.message){
		feedbackMessage = page?.form?.message
	}
	onNavigate(() => {
		feedbackMessage = "";
		// document.querySelector('#nav-sidebar').classList.add('hide');
	});
	import { sidebarOpen } from '$lib/stores/sidebar';
	import { onMount } from 'svelte';

	onMount(() => {
		document.documentElement.classList.add('js');
		const onHashChange = () => {
			if (location.hash === '#nav-sidebar') {
				sidebarOpen.set(true);
				history.replaceState(null, '', location.pathname + location.search);
			
			} else {
				sidebarOpen.set(false);
			}
		};

		window.addEventListener('hashchange', onHashChange);
		onHashChange();

		return () => window.removeEventListener('hashchange', onHashChange);
	});
	afterNavigate(() => {
		sidebarOpen.set(false);
		console.log($sidebarOpen + "layout")
	});

</script>

<svelte:head>
	<link rel="icon" href="/img/favicon.ico"/>
	<link rel="stylesheet" href="/css/stylesheet.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/css/globals.css">
</svelte:head>
<div id="container">
	<Waves color1="#137BC0" color2="#DCEBF5" />
  <a href="#mainContent" class="skip-to-content">Skip to the content</a>
    <Sidebar/>
    <Header/>
    <main id="mainContent">
	{#if feedbackMessage != ""}
			<div 
				id="feedback-message"
				aria-hidden="true" 
				tabindex=0
			>
			<strong>Feedback:</strong> {feedbackMessage}
			</div>
	{/if}
        {@render children?.()}
    </main>
</div>