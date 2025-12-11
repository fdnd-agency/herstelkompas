<script>
	let { data } = $props();
	import { page } from '$app/state';
    import { onMount } from 'svelte';
    // Create audio element
    onMount(() => {
        const sound = new Audio('/img/mystic.mp3');

        const testCheckbox = document.getElementById('toggle');

        function checkMode() {
          const mode = getComputedStyle(document.body).getPropertyValue('--mode').trim();
          if (mode === 'hysterical') {
            sound.play().catch(err => console.log('Audio play blocked:', err));
          }else{
            sound.pause();
            sound.currentTime = 0;
          }
        }

        testCheckbox.addEventListener('change', checkMode);

        // Optional: check on page load
        checkMode();
      });
</script>

<section class="welcome">
<label class="switch" for="toggle">
    <input type="checkbox" id="toggle" />
    <div class="slider round"></div>
</label>

<img src="img/Illuminati_triangle_eye.png" class="illuminati" alt="">
</section>

<style>

</style>