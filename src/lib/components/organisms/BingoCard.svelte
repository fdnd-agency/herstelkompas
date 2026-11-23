<script>
	import Activity from "$lib/components/atoms/Activity.svelte";
	import RadioButtonGroup from "$lib/components/molecules/RadioButtonGroup.svelte";

	let { activiteit, index } = $props();
	let isOpen = $state(false);
	let activityState = $state(0);
</script>

<button
	type="button"
	onclick={() => (isOpen = !isOpen)}
	aria-expanded={isOpen}
	aria-controls="radiobuttons-{index}"
	class="state-{activityState}"
>
	<Activity {activiteit} />
	<RadioButtonGroup bind:activityState {isOpen} {index} />
</button>

<style>
	button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px; /* later spacing token toevoegen */
		border: 1px solid var(--primary-color-dark);

		width: 250px;
		height: 200px;

		border-radius: 5px;
	}

	.state-0 {
		/* niet gedaan - lichtgrijs */
		background-color: var(--color-neutral-lighter);
	}

	.state-1 {
		/* mee bezig - blauw */
		background-color: hsl(204, 59%, 72%);
	}

	.state-2 {
		/* gedaan - groen */
		background-color: hsl(85, 57%, 64%);
	}
</style>
