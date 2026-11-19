<script>
    let { activiteit } = $props();
</script>

<p>{activiteit}</p>

<style>
    p {
        font: var(--font-medium);
        color: var(--color-primary-700);
        font-size: var(--text-size-md);
        max-inline-size: 50ch;
        text-wrap: balance;
    }
</style>
