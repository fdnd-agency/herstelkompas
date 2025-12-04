<script>
  import { Canvas } from '@threlte/core'
    import { onMount } from 'svelte';
  import Scene from './Scene.svelte'
    let jsEnabled = false;
      onMount(() => {
    jsEnabled = true; // Only true after JS runs
  });
</script>
<section>
  {#if jsEnabled}
<Canvas>
  <Scene />
</Canvas>
{:else}
  <dialog open>
  <p>De 3D animatie werkt enkel met behulp van JavaScript. <br>Zet JavaScript aan en herlaad de pagina</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
{/if}
</section>
<style>

    :global(html), :global(body), :global(div), :global(main), section{
        height: 100vh;
    }
    section{
        width: 100vw;
    }
    :global(body){
      background: url("/img/hqdefault.jpg");
      background-size: cover;
      background-position: center center;
    }
    dialog{
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
      padding: 20px;
      width: 400px;
      max-width: 100%;
      text-align: center;
    }
    dialog form button{
      width: 100%;
    }
</style>