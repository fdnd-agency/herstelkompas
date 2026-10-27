<script>
	import BingoRadioButton from "../atoms/BingoRadioButton.svelte";
	let { isOpen } = $props();
</script>

<!-- Bij class:is-closed={!isOpen} wordt de class toegepast als in BingoCard de boolean isOpen false is -->
<fieldset class="RadioButtonGroup" class:is-closed={!isOpen}>
	<BingoRadioButton state="0" />
	<BingoRadioButton state="1" />
	<BingoRadioButton state="2" />
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
			display: none;
		}
	}
</style>
