<script>
    let { data } = $props();
	import { page } from '$app/state';
    import { AuthInformation, SidebarNavigation } from '$lib';
</script>
<aside id="nav-sidebar">
    <a href="#" class="hamburger-open">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M20.3331 0.33313C20.715 0.33313 21.0326 0.45985 21.2861 0.71329C21.5395 0.96673 21.6662 1.28438 21.6662 1.66625C21.6662 2.04129 21.5378 2.35724 21.2809 2.61409L12.8848 10.9994L21.2809 19.3846C21.5378 19.6415 21.6662 19.9574 21.6662 20.3325C21.6662 20.7144 21.5395 21.032 21.2861 21.2854C21.0326 21.5389 20.715 21.6656 20.3331 21.6656C19.9581 21.6656 19.6421 21.5372 19.3853 21.2803L11 12.8842L2.6147 21.2803C2.35785 21.5372 2.0419 21.6656 1.66686 21.6656C1.28499 21.6656 0.967341 21.5389 0.713901 21.2854C0.460461 21.032 0.33374 20.7144 0.33374 20.3325C0.33374 19.9574 0.462167 19.6415 0.71902 19.3846L9.11518 10.9994L0.71902 2.61409C0.462167 2.35724 0.33374 2.04129 0.33374 1.66625C0.33374 1.28438 0.460461 0.96673 0.713901 0.71329C0.967341 0.45985 1.28499 0.33313 1.66686 0.33313C2.0419 0.33313 2.35785 0.461557 2.6147 0.71841L11 9.11457L19.3853 0.71841C19.6421 0.461557 19.9581 0.33313 20.3331 0.33313Z" fill="#FCF8F7"/>
        </svg>Sluit
    </a>
    <SidebarNavigation/>
    <AuthInformation
        avatar={"/img/testimg.png"}
        name={"Student HvA"}
        email={"student@hva.nl"}
    />
    
</aside>
<style>
    aside{
        width: 100%;
        max-width: 400px;
        background-color: lightgray;
        background-color: #137BC0;
        height: 100dvh;
        display: flex;
        flex-direction: column;
        translate: -100% 0;
        transition: 0.5s ease;
        position: fixed;
        top: 0;
        left: -1px; /* subpixel bug */
        grid-row: 1 / -1;
        z-index: 2;
    }
    aside .hamburger-open{
        transition: 0.3s ease;
		display: flex;
        line-height: 1rem;
        gap: .35rem;
		color: white;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        width: 42px;
        border-radius: 9px;
        box-sizing: content-box;
        text-decoration: none;
        position: relative;
        top: 20px;
        left: 20px;
        padding: 10px;

	}
    @media (min-width: 850px){
        aside .hamburger-open{
			display: none !important;
		}
    }
    aside .hamburger-open svg > *{
        fill: white;
        transition: 0.3s ease;
    }
    aside .hamburger-open:hover, aside .hamburger-open:focus{
        background-color: white;
        color: #137BC0;
    }
    aside .hamburger-open:hover svg > *, aside .hamburger-open:focus svg > *{
        fill: #137BC0;
    }
    
    
    @media (min-width: 850px){
        aside{
            translate: 0 0;
            position: relative;
        }

    }
    @media (max-width: 850px){
        aside:target{
            translate: 0 0;
            position: fixed;
        }
    }

    
</style>