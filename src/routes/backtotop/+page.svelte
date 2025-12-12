<script>
  import backgroundImage from '$lib/assets/internetexplorer.jpg'
  import ufoImage from '$lib/assets/ufo.png'
</script>

<style>
  :root {
    scroll-behavior: smooth;
  }

  h1 {
    color: white;
    
  }

  .page {
    min-height: 200vh;
    overflow-x: hidden;
    background-image: var(--bg);
    background-size: cover;
  }

  #top {
    position: absolute;
    top: 0;
  }

  .empty {
    height: 100vh;
  }

  .container {
    position: relative;
    height: 100vh;
  }

  .backtotop {
    display: block;
    width: 40px;
    height: 40px;
    text-decoration: none;
    position: relative;
  }

  .ufo {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 70%;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;
    background-size: contain; 
    background-repeat: no-repeat; 
    background-position: center;

    offset-path: path("M0 0 C5 -30 75 30 100 0");
    offset-rotate: auto;
    animation: fly 5s linear infinite;
  }

  .ufo .text {
    position: absolute;
    bottom: 70%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .ufo:hover .text {
    opacity: 1;
  }

  @keyframes fly {
    0% { offset-distance: 0%; transform: translateX(0); }
    100% { offset-distance: 100%; transform: translateX(100vw); }
  }

</style>

<div class="page" style="--bg: url({backgroundImage});">
  <h1>Scroll naar beneden!</h1>
  <div id="top"></div>

  <div class="empty"></div>

  <div class="container">
    <a href="#top" class="backtotop">
      <div class="ufo" style="background-image: url({ufoImage});">
        <span class="text">Scroll naar boven</span>
      </div>
    </a>
  </div>
</div>
