<script>
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import gsap from "gsap";

  let cursorEl;

  // -----------------------------
  // POSITIE EN MOVEMENT VARIABELEN
  // -----------------------------
  const pos = { x: 0, y: 0 };       // huidige positie van de cursor
  const vel = { x: 0, y: 0 };       // snelheid (beweging richting)
  let targetPos = { x: 0, y: 0 };   // waar de cursor NAAR TOE moet
  let isHoveringClickable = false;  // of de cursor over een link/button staat
  let animationFrame;

  // -----------------------------
  // HELPER FUNCTIES VOOR JELLY EFECT
  // -----------------------------

  // bepaalt hoeveel de cursor moet stretchen
  function getScale(dx, dy) {
    const dist = Math.sqrt(dx * dx + dy * dy);
    return Math.min(dist / 100, 0.25);
  }

  // berekent de rotatiehoek van de jelly (richting van beweging)
  function getAngle(dx, dy) {
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }

  // -----------------------------
  //  FUNCTIE (wordt 60x per seconde aangeroepen)
  // -----------------------------
  function update() {
    const rotation = getAngle(vel.x, vel.y); // draai richting beweging
    const scale = getScale(vel.x, vel.y);    // stretch op basis van snelheid

    // Glow: groter wanneer cursor sneller beweegt
    const glowSize = 200 + scale * 500;

    gsap.to(cursorEl, {
      boxShadow: `0 0 ${glowSize}px rgba(10, 10, 194, 0.8)`,
      duration: 0.1
    });

    // Verplaatst de cursor smooth naar positie
    gsap.to(cursorEl, {
      x: pos.x,
      y: pos.y,
      rotate: rotation,
      duration: 0.1,
      ease: "power4.out"
    });

    // jelly scaling alleen als je NIET over een button/anchor staat
    if (!isHoveringClickable) {
      gsap.to(cursorEl, {
        scaleX: 1 + scale + 4, // stretch horizontaal
        scaleY: 1 - scale,     // squish verticaal
        duration: 0.15,
        ease: "power4.out"
      });
    }
  }

  // -----------------------------
  // ANIMATIE LOOP (volgt de muis smooth)
  // -----------------------------
  function animate() {
    const speed = 0.35; // hoe snel de cursor naar je muis toe lerpt

    // Smooth positie interpolatie
    pos.x += (targetPos.x - pos.x) * speed;
    pos.y += (targetPos.y - pos.y) * speed;

    // snelheid/bew. richting
    vel.x = targetPos.x - pos.x;
    vel.y = targetPos.y - pos.y;

    update(); // cursor tekenen
    animationFrame = requestAnimationFrame(animate);
  }

  // -----------------------------
  // SCALE EFFECT OP LINKS & BUTTONS
  // -----------------------------
  function handleCursorHover(state) {
    isHoveringClickable = state;

    gsap.to(cursorEl, {
      scale: state ? 0.2 : 1, // kleiner wanneer eroverheen hovert
      duration: 0.2,
      ease: "power2.out"
    });
  }

  // -----------------------------
  // SVELTE LIFECYCLE: START OP BROWSER
  // -----------------------------
  onMount(() => {
    if (!browser) return;

    // Touch apparaten → geen custom cursor
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    // Mousemove handler
    const moveHandler = (e) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
      update(); // direct update voor snappier feel
    };

    // Cursor fade uit viewport
    const leaveHandler = () =>
      gsap.to(cursorEl, { opacity: 0, duration: 0.7, ease: "power2.out" });

    // Cursor fade weer in
    const enterHandler = () =>
      gsap.to(cursorEl, { opacity: 1, duration: 0.7, ease: "power2.out" });

    // Event listeners
    window.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseleave", leaveHandler);
    document.addEventListener("mouseenter", enterHandler);

    // Hover effecten op alle links & buttons
    const clickables = document.querySelectorAll("a, button");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", () => handleCursorHover(true));
      el.addEventListener("mouseleave", () => handleCursorHover(false));
    });

    // Start animatie loop
    animate();

    // -----------------------------
    // OPSCHONEN BIJ PAGINA VERLATEN
    // -----------------------------
    onDestroy(() => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseleave", leaveHandler);
      document.removeEventListener("mouseenter", enterHandler);

      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleCursorHover(true));
        el.removeEventListener("mouseleave", () => handleCursorHover(false));
      });
    });
  });
</script>

<style>
  /* Verberg normale cursor */
  html, body, a, [role=button], button, [type=button]:not(:disabled) {
    cursor: none;
  }

  /* De silver surfer cursor */
  #silversurfer {
    position: fixed;
    top: 0;
    left: 0;
    width: 150px;     /* grootte X richting */
    height: 100px;    /* grootte Y richting */
    background-color: #bdbdbd;
    border: 2px solid #000000;
    border-radius: 50%;
    transform-origin: 50% 50%;
    transform: translate(-50%, -50%);
    will-change: width, height, transform, border;
    z-index: 99999;
    pointer-events: none;  
  }
</style>

<!-- Het element dat we met GSAP animeren -->
<div id="silversurfer" bind:this={cursorEl}></div>
