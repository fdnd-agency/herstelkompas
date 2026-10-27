<script>
    let { state } = $props();
</script>

<fieldset class="bingokaart-radiobuttons state-{state}">
    {#if state == 0}
        <input type="radio" name="state-activiteit" value="0" onclick={(event) => event.stopPropagation()} />
        <label>Niet gedaan</label>
    {:else if state == 1}
        <input type="radio" name="state-activiteit" value="1" onclick={(event) => event.stopPropagation()} />
        <label>Mee bezig</label>
    {:else if state == 2}
        <input type="radio" name="state-activiteit" value="2" onclick={(event) => event.stopPropagation()} />
        <label>Gedaan</label>
    {/if}
</fieldset>

<style>
    fieldset {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        width: max-content;
        gap: 10px;
    }

    /* `Niet gedaan` state */
    .state-0 {
        display: flex;
        input {
            appearance: none;

            border-radius: 50%;
            width: 16px;
            height: 16px;

            border: 2px solid var(--primary-color-dark);

            position: relative;
            top: 4px;
        }

        input:checked {
            background-color: var(--primary-color-dark);
        }

        label {
            color: var(--primary-color-dark);
        }
    }

    @media (scripting: enabled) {
        .state-0 {
            display: none;
        }
    }

    /* `Mee bezig` state */
    .state-1 {
        input {
            appearance: none;

            border-radius: 50%;
            width: 16px;
            height: 16px;

            border: 2px solid var(--color-orange-accent);

            position: relative;
            top: 4px;
        }

        input:checked {
            background-color: var(--color-orange-accent);
        }

        label {
            color: var(--color-orange-accent);
        }
    }

    /* `Gedaan` state */
    .state-2 {
        input {
            appearance: none;

            border-radius: 50%;
            width: 16px;
            height: 16px;

            border: 2px solid var(--color-green-accent);

            position: relative;
            top: 4px;
        }

        input:checked {
            background-color: var(--color-green-accent);
        }

        label {
            color: var(--color-green-accent);
        }
    }
</style>
