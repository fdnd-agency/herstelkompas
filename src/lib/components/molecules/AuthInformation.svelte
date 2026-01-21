<script>
    let { avatar, name, email } = $props();
</script>
<header class="information-auth">
    <figure>
        {#if avatar}
            <img src="{avatar}" alt="" width="38">
        {:else}
            <img src="/img/testimg.png" alt="" width="38">
        {/if}

        <figcaption class="content">
            {#if name}
                <strong>{name}</strong>
            {/if}
            {#if email}
                <p>{email}</p>
            {/if}
        </figcaption>
    </figure>
    
    <button class="auth-btn" type="button">
    <span class="sr-only">Open inloggen</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true" focusable="false">
      <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/>
    </svg>
  </button>
</header>

<style>
    header{
        display: flex;
        justify-content: flex-start;
        padding: 20px;
        margin-top: auto;
        position: relative;
    }
    header:before{
        background-color: #fff;
        opacity: 0.25;
        top: 0;
        left: 0;
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
    }
    header figure{
        display: flex;
    }
    header figure figcaption{
        margin-left: 1rem;
    }
    header figure figcaption > *{
        font-weight: 400;
    }
    header figure figcaption p{
        opacity: 0.44;
    }
    header button{
        appearance: none;
        border: 0;
        background-color: transparent;
        margin-left: auto;
        width: 20px;
    }
    header *{
        color: #fff;
        fill: #fff;
    }

    .sr-only{
    position:absolute;
    width:1px;height:1px;
    padding:0;margin:-1px;
    overflow:hidden;
    clip:rect(0 0 0 0);
    white-space:nowrap;
    border:0;
  }
</style>