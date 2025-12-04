<script>
  import { onMount } from 'svelte';
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';

  let canvasReady = false;
  let fadeFinished = false; // whether fade-in is complete

  onMount(() => {
    requestAnimationFrame(() => {
      canvasReady = true;
    });
  });

  // Optional: listen for transition end
  function handleTransitionEnd() {
    fadeFinished = true;
  }
</script>

<section style="position: relative; width:100%; height:100%;">
  {#if !fadeFinished}
    <div style="position:absolute; inset:0; background:gray;"></div>
  {/if}

  <div
    class="canvas-wrapper {canvasReady ? 'visible' : ''}"
    on:transitionend={handleTransitionEnd}
  >
    <Canvas style="width:100%; height:100%;" on:create={() => canvasReady = true}>
      <Scene />
    </Canvas>
  </div>
</section>

<style>
  .canvas-wrapper {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease;
  }
  .canvas-wrapper.visible {
    opacity: 1;
  }

  :global(html), :global(body), :global(div), :global(main), section {
    height: 100vh;
  }
  section {
    width: 100vw;
  }
  :global(body) {
    background: url("/img/hqdefault.jpg");
    background-size: cover;
    background-position: center center;
  }
</style>
