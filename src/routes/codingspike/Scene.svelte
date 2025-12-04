<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import { T } from '@threlte/core';
  import { Shape } from 'three';

  // --- WALL SHAPE ---
  const wallShape = new Shape();
  wallShape.moveTo(-3, -1.5);
  wallShape.lineTo(3, -1.5);
  wallShape.lineTo(3, 1.5);
  wallShape.lineTo(-3, 1.5);
  wallShape.lineTo(-3, -1.5);

  // --- HOLE ---
  const hole = new Shape();
  hole.moveTo(-0.5, -1);
  hole.lineTo(0.5, -1);
  hole.lineTo(0.5, 1);
  hole.lineTo(-0.5, 1);
  hole.lineTo(-0.5, -1);
  wallShape.holes.push(hole);

  // --- DOOR ROTATIONS ---
  let door1Rotation = spring(0, { stiffness: 0.1, damping: 0.25 });
  let door2Rotation = spring(0, { stiffness: 0.1, damping: 0.25 });

  // Animate doors on load after 2 seconds
  onMount(() => {
    setTimeout(() => {
      door1Rotation.set(-Math.PI / 2); // left door swings left
      door2Rotation.set(Math.PI / 2);  // right door swings right
    }, 2000);
  });
</script>

<!-- CAMERA -->
<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 3]}
  on:create={(camera) => camera.lookAt(0, 0, 0)}
/>

<!-- WALL WITH HOLE -->
<T.Mesh>
  <T.ShapeGeometry args={[wallShape]} />
  <T.MeshBasicMaterial color="brown" side={2} />
</T.Mesh>

<!-- LEFT DOOR -->
<T.Mesh position={[-0.25, 0, 0]} rotation-y={$door1Rotation}>
  <T.BoxGeometry args={[0.5, 2, 0.1]} />
  <T.MeshBasicMaterial color="white" />
</T.Mesh>

<!-- RIGHT DOOR -->
<T.Mesh position={[0.25, 0, 0]} rotation-y={$door2Rotation}>
  <T.BoxGeometry args={[0.5, 2, 0.1]} />
  <T.MeshBasicMaterial color="yellow" />
</T.Mesh>
