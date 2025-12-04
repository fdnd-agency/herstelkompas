<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
</script>
<section>
<Canvas>
  <Scene />
</Canvas>
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
</style>