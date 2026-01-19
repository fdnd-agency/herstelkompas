<script>
const { square } = $props();
</script>
<label class="bingo-square">
    <input type="checkbox" name="bingocard-field" value={square.activiteit} checked={square.checked}>
    <span>{square.activiteit}</span>
</label>
<style>
.bingo-square {
        position: relative;
        height: 100%;
        padding: .5rem;


        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
        background-color: var(--primary-color-light);
        color: var(--color-white);

        user-select: none;
        cursor: pointer;

        transition: transform .2s cubic-bezier(.2,.9,.2,1);

        &:has(:checked) {
            background-color: var(--color-green-accent);
        }
    }

    .bingo-square:hover,
    .bingo-square:has(input:focus-visible) {
        transform: scale(1.03);
    }

    .bingo-square input {
        appearance: none;
        box-sizing: border-box;

        width: 1rem;
        height: 1rem;
        aspect-ratio: 1;

        border: 1.5px solid white;
        border-radius: 50%;

        position: absolute;
        top: 0;
        left: 0;
        margin: .5rem;

        @media (max-width: 600px) {
            margin: 0.3rem;
            width: .7rem;
            height: .7rem;
        }
    }

    .bingo-square span {
        width: 100%;
        max-height: 100%;
        text-align: center;
        overflow: hidden;
        word-break: break-word;
        overflow-wrap: anywhere;
        hyphens: auto;
    }

    .bingo-square input:checked {
        background: white;
    }
    
    .bingo-square:has(input:focus-visible) {
        outline: 3px solid #000000;
        outline-offset: 2px;
    }
    
    @media (prefers-reduced-motion: reduce) {
        .bingo-square:hover {
            transform: none;
        }
    }
</style>