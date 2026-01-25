<script>
  import { onMount } from 'svelte';
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';

  let canvasReady = false;
  let fadeFinished = false;
  let srText = ""; // start empty

  onMount(() => {
    // JS is enabled, update the text after mount
    requestAnimationFrame(() => {
      canvasReady = true;
      srText = "Animatie: De deuren in het scherm openen langzaam en de camera zoomt door de deur in. Daarna verschijnt de kamerinhoud.";
    });
  });

  function handleTransitionEnd() {
    fadeFinished = true;
  }
</script>

<section style="position: relative; width:100%; height:100%;">
  <noscript>
    <div class="noscript" style="padding:2rem; background:#f5f5f5; text-align:center;">
      <p>
        De 3D animatie werkt enkel met behulp van JavaScript.<br>
        Zet JavaScript aan en herlaad de pagina.
      </p>
      <a href="/codingspike">Herlaad de pagina</a>
    </div>
  </noscript>

  <div class="sr-only" aria-live="polite">{srText}</div>

  {#if !fadeFinished}
    <div style="position:absolute; inset:0; background:gray;"></div>
  {/if}
  <a data-sveltekit-reload class="reloadBtn" href="/codingspike">Herlaad Animatie</a>
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

  .noscript {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  }
  .reloadBtn{
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 24px;
    background-color: white;
    border: 3px solid black;
    padding: 1rem;
    text-decoration: none;
    color: black;
    transition: 0.3s ease;
    &:hover, &:focus{
      background-color: black;
      border: 3px solid white;
      color: white;
    }
  }
</style>
