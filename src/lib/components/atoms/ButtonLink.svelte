<script>
	let { name, src, variant } = $props();
</script>

<a 
	href={src} 
	class="link"
	class:primary={variant === 'primary'}
	class:secondary={variant === 'secondary'}
>
	{name}
</a>

<style>
	.link {
		padding: 8px 12px;
		border-radius: 6px;
		text-decoration: none;
	}

	.primary {
		background-color: #137BC0;
	}

	.secondary {
		background-color: #FFB900;
	}
</style>