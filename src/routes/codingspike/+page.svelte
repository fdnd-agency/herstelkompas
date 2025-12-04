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
</style>