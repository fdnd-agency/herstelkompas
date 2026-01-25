<script>

  //Assets
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import { T } from '@threlte/core';
  import { Shape } from 'three';
  import { Outlines } from '@threlte/extras'
  import { Edges } from '@threlte/extras'

  // Muur
  const wallShape = new Shape();
  wallShape.moveTo(-3, -1.5);
  wallShape.lineTo(3, -1.5);
  wallShape.lineTo(3, 1.5);
  wallShape.lineTo(-3, 1.5);
  wallShape.lineTo(-3, -1.5);

  // gat
  const hole = new Shape();
  hole.moveTo(-0.5, -1);
  hole.lineTo(0.5, -1);
  hole.lineTo(0.5, 1);
  hole.lineTo(-0.5, 1);
  hole.lineTo(-0.5, -1);
  wallShape.holes.push(hole);


  // camera stuff
  let zoomPosition = 3
  let zoomTarget = 3
  let zoomTriggered = false




  import { useTask } from "@threlte/core";

  let rotationY = 0;
  let target = 0;

  // 2 seconden wachten, dan rotatie aanpassen naar -1 * PI
  onMount(() => {
    setTimeout(() => {
      target = -Math.PI;
    }, 1000);
  });


  useTask(() => {
    //  Deur animeren
    rotationY += (target - rotationY) * 0.005

    // Als de deur bijna lverwege open is, start zoomen
    const halfOpen = Math.abs(rotationY) > Math.abs(target) * 0.45

    if (halfOpen && !zoomTriggered) {
      zoomTriggered = true
      zoomTarget = 0
    }

    // camera inzoomen naar gewenste zoom
    zoomPosition += (zoomTarget - zoomPosition) * 0.01
  })
</script>

<!-- Camerapositie -->
<T.PerspectiveCamera
  makeDefault
  position={[0, 0, zoomPosition]}
  on:create={(camera) => camera.lookAt(0, 0, 0)}
/>

<!-- Muur met gat -->
<T.Mesh>
  <T.ShapeGeometry args={[wallShape]} />
  <T.MeshBasicMaterial color="gray" side={2} />
</T.Mesh>

<!-- Linkerdeur -->
<T.Group
  position={[-0.5, 0, 0]} 
  rotation={[0, rotationY, 0]}
>
  <!-- Deurframe -->
  <T.Mesh position={[0.25, 0, 0]}>
    <T.BoxGeometry args={[0.5, 2, 0.1]} />
    <T.MeshBasicMaterial color="#64412b" />
    <Edges color="black" />
  </T.Mesh>
  <!-- Deurklink -->
  <T.Mesh position={[0.40, 0, 0]}>
    <T.SphereGeometry args={[0.065, 32, 32]} />
    <T.MeshBasicMaterial color="black" />
  </T.Mesh>
</T.Group>

<!-- Rechterdeur -->
<T.Group 
  position={[0.5, 0, 0]}
  rotation={[0, -rotationY, 0]}
>
  <!-- Deurframe -->
  <T.Mesh position={[-0.25, 0, 0]}>
    <T.BoxGeometry args={[0.5, 2, 0.1]} />
    <T.MeshBasicMaterial color="#64412b" />
    <Edges color="black" />
  </T.Mesh>
  <!-- Deurklink -->
  <T.Mesh position={[-0.4, 0, 0]}>
    <T.SphereGeometry args={[0.065, 32, 32]} />
    <T.MeshBasicMaterial color="black" />
  </T.Mesh>
</T.Group>