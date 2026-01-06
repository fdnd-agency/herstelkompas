<script>
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { Bingocard, Sidebar, Header } from '$lib'
	let { children, data } = $props();
	// let feedbackMessage = data?.form?.message ?? "";
	console.log(page.form?.message)
	let feedbackMessage = "";
	if(page.form?.message){
		feedbackMessage = page?.form?.message
	}
	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="/stylesheet.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/css/globals.css">
</svelte:head>
<div id="container">

    
    
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