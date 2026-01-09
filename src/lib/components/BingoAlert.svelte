<script>
    const { count, prizes } = $props(); //aantal afgekruisde vakjes
    
    // let dialog = $state();
    let message = $state('');
    let src = $state('');
    let alt = $state('');
    let dialog = $state(null);
    let prize = $state(null);

    $effect(() => {
        prize = prizes.find(p => p.Hoeveelheid === count) ?? null;

        if (prize && dialog) {
            dialog.showModal();
        }
    });
</script>

<dialog bind:this={dialog}> <!-- hiermee word de dialog gedefineerd en heeft het dialog eigenschappen -->
    <h2>Bingo!</h2>
    {#if prize}
        <p>Je wint een <strong>{prize.titel}</strong>!</p>
    {/if}
    <form method="dialog">
        <button type="submit">
            Sluiten
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="#fff" d="M10.969 3.219a.574.574 0 1 1 .812.812L8.313 7.5l3.468 3.469l.074.09a.575.575 0 0 1-.796.796l-.09-.074L7.5 8.312l-3.469 3.47a.574.574 0 1 1-.812-.813L6.688 7.5l-3.47-3.469l-.073-.09a.575.575 0 0 1 .796-.797l.09.075L7.5 6.687z"/></svg>
        </button>
    </form>
</dialog>

<style>
    dialog {
        container-type: inline-size;
        position: relative;
        overflow: hidden;
        /* width: 20rem; */
        /* height: 20rem; */
        max-width: 25rem;
        min-width: 15rem;
        width: 50%;
        margin: auto;
        padding: 1rem;

        border: none;
        border-radius: .5rem;

        img {
            width: 60%;
            object-fit: cover;
            display: block;
            margin: 0 auto;
        }

        form {
            position: absolute;
            top: 0;
            right: 0;
            margin: 1rem;
            
            button {
                cursor: pointer;
                border: none;
                border-radius: .2rem;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                padding: .5rem;
                background-color: #0B4989;
                color: white;
                

                height: 2rem;

                label {
                    display: none;
                    cursor: pointer;
                }
            }
        }
    }

    @container (width > 15rem) {
        dialog form button label {
            display: block;
        }
    }
</style>