<script>
	import BingoRadioButton from "../atoms/BingoRadioButton.svelte";
	let { isOpen, index, activityState } = $props();
</script>

<!-- Bij class:is-closed={!isOpen} wordt de class toegepast als in BingoCard de boolean isOpen false is -->
<fieldset class="RadioButtonGroup" class:is-closed={!isOpen}>
	<BingoRadioButton
		bind:group={activityState}
		value={0}
		label="Niet gedaan"
		{index}
	/>
	<BingoRadioButton
		bind:group={activityState}
		value={1}
		label="Mee bezig"
		{index}
	/>
	<BingoRadioButton
		bind:group={activityState}
		value={2}
		label="Gedaan"
		{index}
	/>
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-direction: row;
		gap: 15px;
		align-items: center;
		border: none;
	}

	/* Fallback bij geen Javascript*/
	.RadioButtonGroup {
		display: flex;
	}

	/* Verbergt radiobuttons bij Javascript */
	@media (scripting: enabled) {
		.RadioButtonGroup.is-closed {
			clip: rect(0 0 0 0);
			clip-path: inset(50%);
			height: 1px;
			overflow: hidden;
			position: absolute;
			white-space: nowrap;
			width: 1px;
		}
	}
</style>
