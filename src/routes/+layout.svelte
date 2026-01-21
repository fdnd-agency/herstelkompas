<script>
	import { onNavigate } from '$app/navigation';
	import { Sidebar, Header } from '$lib'
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { Waves } from '$lib';
	let { children } = $props();
	let feedbackMessage = $state("");
	let mQuery = $state(false);
	onMount(() => {
		const mediaQuery = window.matchMedia('(max-width:850px)');
		if (mediaQuery.matches) {
			mQuery = true;
		}
		else{
			mQuery = false;
		}
		mediaQuery.addEventListener('change', () => {
			if (mediaQuery.matches) {
				mQuery = true;
			}
			else{
				mQuery = false;
			}
		});
	});
	
	if(page.form?.message){
		feedbackMessage = page?.form?.message
	}
	onNavigate(() => {
		feedbackMessage = "";
		const sidebar = document.querySelector('#nav-sidebar');
		if (mQuery && sidebar && supportsPopover) {
			sidebar.hidePopover?.(); // hide popover when above 850px
		}

	});
	let supportsPopover = false;

	if (typeof window !== 'undefined') {
		supportsPopover = 'popover' in HTMLElement.prototype;
	}

</script>

<svelte:head>
	<link rel="icon" href="/img/favicon.ico"/>
	<link rel="stylesheet" href="/css/stylesheet.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="stylesheet" href="/css/globals.css">
</svelte:head>
<div id="container">
	<Waves color1="#137BC0" color2="#DCEBF5" />
  <a href="#mainContent" class="skip-to-content">Skip to the content</a>
    <Sidebar supportsPopover={supportsPopover} mQuery={mQuery}/>
    <Header supportsPopover={supportsPopover} mQuery={mQuery}/>
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