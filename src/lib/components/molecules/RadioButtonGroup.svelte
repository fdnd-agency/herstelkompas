<script>
    import { BingoRadioButton } from "$lib";
</script>

<fieldset>
<BingoRadioButton state="1" />
<BingoRadioButton state="2" />
</fieldset>

<style>
    fieldset{
        display: flex;
        flex-direction: row;
        gap: 50px; /* later spacing token toevoegen */
        align-items: center;
        border: none;
        background-color: none;
    }
</style>