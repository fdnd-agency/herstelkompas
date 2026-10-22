<script>
    let { state, activiteit = "Mock activiteit"} = $props();
</script>

<label class="bingokaart-radiobuttons state-{state}">
    {activiteit}
    {#if state == 1}
        <input type="radio" name="state-{activiteit}" value="1" />
        <label>Mee bezig</label>
    {:else if state == 2}
        <input type="radio" name="state-{activiteit}" value="2" />
        <label>Gedaan</label>
    {/if}
</label>

<style>
</style>
