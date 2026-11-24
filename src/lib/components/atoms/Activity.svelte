<script>
    let { activiteit } = $props();
</script>

<p>{activiteit}</p>

<style>
    p {
        font: var(--font-medium);
        color: var(--color-black);
        font-size: var(--text-size-md);
        max-inline-size: 50ch;
        text-wrap: balance;
    }
</style>
