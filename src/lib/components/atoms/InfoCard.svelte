<script>
	let { title, text, img, alt, href = null } = $props();
</script>

{#if href}
	<a class="infoBox" href={href}>
		{#if img}
			<img src={img} alt={alt} />
		{/if}
		<h3>{title}</h3>
		<p>{text}</p>
		<span>→</span>
	</a>
{:else}
	<div class="infoBox">
		{#if img}
			<img src={img} alt={alt} />
		{/if}
		<h3>{title}</h3>
		<p>{text}</p>
	</div>
{/if}

<style>
	.infoBox {
		padding: 20px;
		text-decoration: none;
		background-color: #FFFFFF;
		margin: 1rem;
		border-radius: 20px;
		color: inherit;
		display: block;
	}

</style>
