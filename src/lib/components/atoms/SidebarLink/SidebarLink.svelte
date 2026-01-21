<script>
    import './icons.css';
    let { name, src, Svg } = $props();
	import { page } from '$app/state';
</script>
<li class={page.url.pathname === `${src}` ? "active" : ""}>
    <a href={src} aria-current={page.url.pathname === `${src}`}>
        <div class="corners"></div>
        <Svg class="sidebar-icon"/>
        {name}
    </a>
</li>

<style>
    li a {
        color: #fff;
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;
        display: flex;
        justify-content: flex-start;
        gap: 7px;
        padding: 10px 0 10px 7px;
        transition: 0.3s ease;
        position: relative;
    }

    li a .corners {
        position: absolute;
        right: -0.5px;
        top: 0;
        height: 100%;
        width: 1px;
        transition: 0.3s ease;
        background: var(--primary-color-dark)00;
    }

    li a:before {
        /* background-color: var(--primary-color-dark); */
        position: absolute;
        content: '';
        width: 15px;
        height: 15px;
        right: -.5px;
        bottom: calc(100% - .5px);
        border-bottom-right-radius: 0%;
        transition: 0.3s ease;
        z-index: 9;
    }

    li a:after {
        /* background-color: var(--primary-color-dark); */
        position: absolute;
        content: '';
        width: 15px;
        height: 15px;
        right: -.5px;
        top: calc(100% - .5px);
        border-top-right-radius: 0%;
        transition: 0.3s ease;
        z-index: 9;
    }

    li.active a,
    li a:hover,
    li a:focus {
        color: var(--primary-color-dark);
        background-color: #fff;
        border-top-left-radius: 9px;
        border-bottom-left-radius: 9px;
    }

    li.active a .corners,
    li a:hover .corners,
    li a:focus .corners {
        background: white;
    }

    li.active a:before,
    li a:hover:before,
    li a:focus:before {
        /* border-bottom-right-radius: 100%; */
        background-image: radial-gradient(farthest-side circle at 0% 0%, #0000 calc(100% - .5px), white 100%);
    }

    li.active a:after,
    li a:hover:after,
    li a:focus:after {
        /* border-top-right-radius: 100%; */
        background-image: radial-gradient(farthest-side circle at 0% 100%, #0000 calc(100% - .5px), white 100%);
    }
</style>