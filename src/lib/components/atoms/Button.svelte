<script>
    let { label } = $props();
</script>

<button type="submit">{label}</button>

<style>
    button {
        padding: 0.75rem 1.5rem;
        background-color: var(--primary-color-dark);
        width: max-content;
        color: var(--color-white);
        border: none;
        border-radius: 0.75rem;
        font: var(--font-semibold);
        cursor: pointer;
    }

    button:hover {
        background-color: var(--primary-color-dark);
    }

    button:focus-visible {
        outline: 2px solid var(--primary-color-light);
        outline-offset: 3px;
    }
</style>
