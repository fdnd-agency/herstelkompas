<script>
	import { onNavigate, afterNavigate } from '$app/navigation';
	import { Bingocard, Sidebar, Header } from '$lib'
	import { page } from '$app/state';
	import { Waves } from '$lib';

	// SEO
	const SITE_NAME = 'Herstelkompas';

	const title = $derived(
		page.data?.title
			? `${page.data.title} | ${SITE_NAME}`
			: SITE_NAME
	);

	const description = $derived(
		page.data?.description ??
			'Als je hoofd en lichaam niet meegaan in de dagelijkse wensen.'
	);	

	// SEO Breadcrumbs
	const breadcrumbs = $derived.by(() => {
		const segments = page.url.pathname
			.split('/')
			.filter(Boolean);

		return [
			{ label: 'Home', href: '/' },
			...segments.map((segment, index) => ({
				label: segment
					.replace(/-/g, ' ')
					.replace(/\b\w/g, l => l.toUpperCase()),
				href: '/' + segments.slice(0, index + 1).join('/')
			}))
		];
	});

	// JSON-LD
	const breadcrumbJsonLd = $derived.by(() => ({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": breadcrumbs.map((crumb, index) => ({
			"@type": "ListItem",
			"position": index + 1,
			"name": crumb.label,
			"item": `${page.url.origin}${crumb.href}`
		}))
	}));

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

	<!-- Primary -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={page.url.href} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- <meta property="og:image" content="{$page.url.origin}/og-image.jpg" /> -->
	<meta property="og:locale" content="nl_NL" />

	<!-- Twitter -->
	<!-- <meta name="twitter:card" content="summary_large_image" /> -->
	<meta name="twitter:title" content={title} />

	<!-- SEO - Breadcrumbs JSON-LD -->
	<svelte:element this="script" type="application/ld+json">
		{JSON.stringify(breadcrumbJsonLd)}
	</svelte:element>
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