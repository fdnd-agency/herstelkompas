<script>
    let { value, label, group, index } = $props();
</script>

<label class="bingokaart-radiobutton value-{value}">
    <input
        type="radio"
        name="state-{index}"
        bind:group
        onclick={(event) => event.stopPropagation()}
    />
    {label}
</label>

<style>
    .bingokaart-radiobutton {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
        border: none;
    }

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

    /* `Niet gedaan` (value 0) — blauw */
    .value-0 {
        input {
            border-color: var(--primary-color-dark);
        }

        input:checked {
            background-color: var(--primary-color-dark);
        }
    }

    /* Verberg de `Niet gedaan`-optie wanneer JS actief is */
    @media (scripting: enabled) {
        .value-0 {
            display: none;
        }
    }

    /* `Mee bezig` (value 1) — oranje */
    .value-1 {
        input {
            border-color: var(--color-orange-accent);
        }

        input:checked {
            background-color: var(--color-orange-accent);
        }
    }

    /* `Gedaan` (value 2) — groen */
    .value-2 {
        input {
            border-color: var(--color-green-accent);
        }

        input:checked {
            background-color: var(--color-green-accent);
        }
    }
</style>
