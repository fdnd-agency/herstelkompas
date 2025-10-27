<script>
  const { bingokaart } = $props()
</script>

<h2>Ik ben een bingokaart</h2>
<div class="bingocard-wrapper">
    <form class="bingocard" method="POST">

        {#each bingokaart as square}
        <label class="bingo-square">
            <input type="checkbox" name="bingocard-field" value={square.activiteit} checked={square.checked}>
            <span>{square.activiteit}</span>
        </label>
        {/each}
        <input type="submit" value="Bevestig afgekruisde vakjes">
    </form>
</div>

<style>
    .bingocard-wrapper {
        position: relative;
    }

    .bingocard {
        margin: 0 auto;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);

        font-size: clamp(1.125rem, 2.25vw, 18px);

        width: 100%;
        max-width: 650px;

        gap: 1rem;
    }

    .bingo-square {
        position: relative;
        aspect-ratio: 1.3 / 1;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.8125rem;
        background-color: #137BC0;
        color: white;

        user-select: none;
        cursor: pointer;

        &:has(:checked) {
            transition: background .3s;
            background-color: #0C8825;
        }
    }

    .bingo-square input {
        appearance: none;
        border: solid rgb(255, 255, 255) 1.5px;
        aspect-ratio: 1;
        width: 1em;
        border-radius: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        margin: .5rem;
    }

    .bingo-square span {
        width: 100%;
        max-height: 100%;
        text-align: center;
            
        padding: 0.5rem;
        overflow: hidden;
    }

    .bingo-square input:checked {
        background: white;
    }
    
    .bingo-square:has(input:focus-visible) {
        outline: 3px solid #000000;
        outline-offset: 2px;
    }



    @media (max-width: 600px) {
        .bingocard {
            gap: 0.5rem;
            font-size: clamp(12px, 4vw, 16px);
        }
        .bingo-square span {
            padding: 0.3rem;
        }
        .bingo-square input {
            margin: 0.3rem;
        }
    }
    
    input[type="submit"]{
        position: absolute;
        top: calc(100% + 1rem);
        left: 50%;
        translate: -50% 0;
    }
</style>