<script>
    let { data } = $props();
	import { page } from '$app/state';

</script>
<aside id="nav-sidebar">
    <a href="#" class="hamburger-open">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M20.3331 0.33313C20.715 0.33313 21.0326 0.45985 21.2861 0.71329C21.5395 0.96673 21.6662 1.28438 21.6662 1.66625C21.6662 2.04129 21.5378 2.35724 21.2809 2.61409L12.8848 10.9994L21.2809 19.3846C21.5378 19.6415 21.6662 19.9574 21.6662 20.3325C21.6662 20.7144 21.5395 21.032 21.2861 21.2854C21.0326 21.5389 20.715 21.6656 20.3331 21.6656C19.9581 21.6656 19.6421 21.5372 19.3853 21.2803L11 12.8842L2.6147 21.2803C2.35785 21.5372 2.0419 21.6656 1.66686 21.6656C1.28499 21.6656 0.967341 21.5389 0.713901 21.2854C0.460461 21.032 0.33374 20.7144 0.33374 20.3325C0.33374 19.9574 0.462167 19.6415 0.71902 19.3846L9.11518 10.9994L0.71902 2.61409C0.462167 2.35724 0.33374 2.04129 0.33374 1.66625C0.33374 1.28438 0.460461 0.96673 0.713901 0.71329C0.967341 0.45985 1.28499 0.33313 1.66686 0.33313C2.0419 0.33313 2.35785 0.461557 2.6147 0.71841L11 9.11457L19.3853 0.71841C19.6421 0.461557 19.9581 0.33313 20.3331 0.33313Z" fill="#FCF8F7"/>
        </svg>Sluit
    </a>
    <nav class="nav-sidebar">
        <ul>
            <li class={page.url.pathname === "/" ? "active" : ""}>
                <a href="/" aria-current={page.url.pathname === `/`}>
                    <div class="corners"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 31 31" fill="none" class="fill-fix">
                        <path d="M16.8171 0.517726C16.0723 -0.172575 14.9217 -0.172575 14.1829 0.517726L0.618005 13.1127C0.0366536 13.6577 -0.15713 14.4994 0.133546 15.2381C0.424221 15.9769 1.13274 16.4673 1.9321 16.4673H2.90102V27.1246C2.90102 29.2621 4.63902 31 6.7767 31H24.2172C26.3549 31 28.0929 29.2621 28.0929 27.1246V16.4673H29.0618C29.8612 16.4673 30.5758 15.9769 30.8665 15.2381C31.1571 14.4994 30.9633 13.6516 30.382 13.1127L16.8171 0.517726ZM14.5281 19.3739H16.4659C18.0707 19.3739 19.3727 20.6758 19.3727 22.2804V28.0935H11.6213V22.2804C11.6213 20.6758 12.9233 19.3739 14.5281 19.3739Z" fill="black"/>
                    </svg>Home
                </a>
            </li>
            <li class={page.url.pathname === "/bingokaart" ? "active" : ""}>
                <a href="/bingokaart" aria-current={page.url.pathname === `/bingokaart`}>
                    <div class="corners"></div>
                    <svg class="fill-fix" xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
                    <path d="M16 0C17.1046 0 18 0.895431 18 2V21C18 22.1046 17.1046 23 16 23H2C0.895431 23 2.01333e-08 22.1046 0 21V2C0 0.895431 0.895431 8.05319e-09 2 0H16ZM4 16C2.89543 16 2 16.8954 2 18C2 19.1046 2.89543 20 4 20C5.10457 20 6 19.1046 6 18C6 16.8954 5.10457 16 4 16ZM9 16C7.89543 16 7 16.8954 7 18C7 19.1046 7.89543 20 9 20C10.1046 20 11 19.1046 11 18C11 16.8954 10.1046 16 9 16ZM14 16C12.8954 16 12 16.8954 12 18C12 19.1046 12.8954 20 14 20C15.1046 20 16 19.1046 16 18C16 16.8954 15.1046 16 14 16ZM4 11C2.89543 11 2 11.8954 2 13C2 14.1046 2.89543 15 4 15C5.10457 15 6 14.1046 6 13C6 11.8954 5.10457 11 4 11ZM9 11C7.89543 11 7 11.8954 7 13C7 14.1046 7.89543 15 9 15C10.1046 15 11 14.1046 11 13C11 11.8954 10.1046 11 9 11ZM14 11C12.8954 11 12 11.8954 12 13C12 14.1046 12.8954 15 14 15C15.1046 15 16 14.1046 16 13C16 11.8954 15.1046 11 14 11ZM4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6ZM9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6ZM14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6ZM2 1.5C1.72386 1.5 1.5 1.72386 1.5 2C1.5 2.27614 1.72386 2.5 2 2.5H16C16.2761 2.5 16.5 2.27614 16.5 2C16.5 1.72386 16.2761 1.5 16 1.5H2Z" fill="black"/>
                    </svg>Bingokaart
                </a>
            </li>
            <li class={page.url.pathname === "/behandelingen" ? "active" : ""}>
                <a href="/behandelingen" aria-current={page.url.pathname === `/behandelingen`}>
                    <div class="corners"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 20" fill="none" class="fill-fix">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V18.2C0 18.6774 0.189642 19.1352 0.527208 19.4728C0.864773 19.8104 1.32261 20 1.8 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19C20 18.7348 19.8946 18.4804 19.7071 18.2929C19.5196 18.1054 19.2652 18 19 18H2V1ZM19.707 5.707C19.8892 5.5184 19.99 5.2658 19.9877 5.0036C19.9854 4.7414 19.8802 4.49059 19.6948 4.30518C19.5094 4.11977 19.2586 4.0146 18.9964 4.01233C18.7342 4.01005 18.4816 4.11084 18.293 4.293L12 10.586L8.707 7.293C8.51947 7.10553 8.26516 7.00021 8 7.00021C7.73484 7.00021 7.48053 7.10553 7.293 7.293L3.293 11.293C3.19749 11.3852 3.12131 11.4956 3.0689 11.6176C3.01649 11.7396 2.9889 11.8708 2.98775 12.0036C2.9866 12.1364 3.0119 12.2681 3.06218 12.391C3.11246 12.5139 3.18671 12.6255 3.2806 12.7194C3.3745 12.8133 3.48615 12.8875 3.60905 12.9378C3.73194 12.9881 3.86362 13.0134 3.9964 13.0123C4.12918 13.0111 4.2604 12.9835 4.3824 12.9311C4.50441 12.8787 4.61475 12.8025 4.707 12.707L8 9.414L11.293 12.707C11.4805 12.8945 11.7348 12.9998 12 12.9998C12.2652 12.9998 12.5195 12.8945 12.707 12.707L19.707 5.707Z" fill="black"/>
                    </svg>Behandelingen
                </a>
            </li>
            <li class={page.url.pathname === "/scans" ? "active" : ""}>
                <a href="/scans" aria-current={page.url.pathname === `/scans`}>
                    <div class="corners"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20"  viewBox="0 0 24 24" fill="none" class="stroke-fix">
                        <path d="M12 18V5.00001M12 5.00001C12 4.53984 12.1058 4.08582 12.3093 3.6731C12.5129 3.26037 12.8086 2.9 13.1737 2.61986C13.5387 2.33971 13.9634 2.14731 14.4147 2.05753C14.866 1.96775 15.332 1.983 15.7765 2.1021C16.221 2.22121 16.6321 2.44097 16.9781 2.74439C17.324 3.04781 17.5956 3.42675 17.7717 3.8519C17.9478 4.27705 18.0237 4.73702 17.9936 5.1962C17.9635 5.65539 17.8281 6.1015 17.598 6.50001M12 5.00001C12 4.53984 11.8942 4.08582 11.6907 3.6731C11.4871 3.26037 11.1914 2.9 10.8263 2.61986C10.4613 2.33971 10.0366 2.14731 9.5853 2.05753C9.13396 1.96775 8.66803 1.983 8.22353 2.1021C7.77904 2.22121 7.3679 2.44097 7.02193 2.74439C6.67596 3.04781 6.40442 3.42675 6.22833 3.8519C6.05224 4.27705 5.97632 4.73702 6.00643 5.1962C6.03655 5.65539 6.17189 6.1015 6.402 6.50001M15 13C14.1348 12.7471 13.3748 12.2206 12.834 11.4995C12.2932 10.7784 12.0005 9.90142 12 9.00001C11.9995 9.90142 11.7068 10.7784 11.166 11.4995C10.6252 12.2206 9.8652 12.7471 9 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.997 5.125C18.5848 5.27614 19.1305 5.55905 19.5928 5.95231C20.055 6.34557 20.4218 6.83887 20.6652 7.39485C20.9086 7.95082 21.0222 8.55489 20.9976 9.16131C20.973 9.76773 20.8107 10.3606 20.523 10.895" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 18C18.8805 18 19.7364 17.7094 20.4349 17.1734C21.1335 16.6373 21.6356 15.8858 21.8635 15.0353C22.0914 14.1848 22.0323 13.2829 21.6954 12.4694C21.3585 11.6559 20.7625 10.9763 20 10.536" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.967 17.483C20.0371 18.0253 19.9953 18.5761 19.8441 19.1016C19.693 19.627 19.4357 20.1159 19.0882 20.538C18.7407 20.9601 18.3104 21.3065 17.8238 21.5558C17.3372 21.8051 16.8046 21.952 16.259 21.9874C15.7134 22.0228 15.1664 21.946 14.6516 21.7616C14.1369 21.5773 13.6654 21.2895 13.2662 20.9158C12.8671 20.5421 12.5488 20.0906 12.331 19.5891C12.1133 19.0876 12.0006 18.5468 12 18C11.9994 18.5468 11.8868 19.0876 11.669 19.5891C11.4512 20.0906 11.1329 20.5421 10.7338 20.9158C10.3346 21.2895 9.86313 21.5773 9.34839 21.7616C8.83364 21.946 8.28658 22.0228 7.74098 21.9874C7.19538 21.952 6.66283 21.8051 6.17622 21.5558C5.68961 21.3065 5.25927 20.9601 4.91179 20.538C4.5643 20.1159 4.30704 19.627 4.15589 19.1016C4.00474 18.5761 3.96292 18.0253 4.033 17.483" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 18C5.1195 18 4.26361 17.7094 3.56507 17.1734C2.86653 16.6373 2.36437 15.8858 2.13648 15.0353C1.90858 14.1848 1.96768 13.2829 2.30462 12.4694C2.64155 11.6559 3.23748 10.9763 4 10.536" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.003 5.125C5.4152 5.27614 4.8695 5.55905 4.40723 5.95231C3.94496 6.34557 3.57824 6.83887 3.33484 7.39485C3.09145 7.95082 2.97776 8.55489 3.00239 9.16131C3.02702 9.76773 3.18932 10.3606 3.477 10.895" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>Scans
                </a>
            </li>
            <li class={page.url.pathname === "/vragenlijst" ? "active" : ""}>
                <a href="/vragenlijst" aria-current={page.url.pathname === `/vragenlijst`}>
                    <div class="corners"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 23 23" fill="none" class="fill-fix">
                        <path d="M1.07812 2.51562C1.07812 1.91816 1.55879 1.4375 2.15625 1.4375H3.59375C4.19121 1.4375 4.67187 1.91816 4.67187 2.51562V7.90625H5.39062C5.98809 7.90625 6.46875 8.38691 6.46875 8.98438C6.46875 9.58184 5.98809 10.0625 5.39062 10.0625H1.79687C1.19941 10.0625 0.718749 9.58184 0.718749 8.98438C0.718749 8.38691 1.19941 7.90625 1.79687 7.90625H2.51562V3.59375H2.15625C1.55879 3.59375 1.07812 3.11309 1.07812 2.51562ZM3.89473 15.3273C3.60273 14.9949 3.07266 15.0174 2.8166 15.3812L2.31348 16.0775C1.96758 16.5627 1.29375 16.675 0.808593 16.3291C0.323437 15.9832 0.211132 15.3094 0.55703 14.8242L1.05566 14.1234C2.12031 12.632 4.30351 12.5242 5.51191 13.9033C6.46875 14.9994 6.44629 16.6391 5.4625 17.7082L3.89922 19.4062H5.39062C5.98809 19.4062 6.46875 19.8869 6.46875 20.4844C6.46875 21.0818 5.98809 21.5625 5.39062 21.5625H1.4375C1.01074 21.5625 0.619921 21.3109 0.449218 20.9156C0.278515 20.5203 0.354882 20.0666 0.642382 19.7521L3.87676 16.2482C4.11484 15.9877 4.11934 15.5924 3.89023 15.3273H3.89473ZM10.0625 2.875H21.5625C22.3576 2.875 23 3.51738 23 4.3125C23 5.10762 22.3576 5.75 21.5625 5.75H10.0625C9.26738 5.75 8.625 5.10762 8.625 4.3125C8.625 3.51738 9.26738 2.875 10.0625 2.875ZM10.0625 10.0625H21.5625C22.3576 10.0625 23 10.7049 23 11.5C23 12.2951 22.3576 12.9375 21.5625 12.9375H10.0625C9.26738 12.9375 8.625 12.2951 8.625 11.5C8.625 10.7049 9.26738 10.0625 10.0625 10.0625ZM10.0625 17.25H21.5625C22.3576 17.25 23 17.8924 23 18.6875C23 19.4826 22.3576 20.125 21.5625 20.125H10.0625C9.26738 20.125 8.625 19.4826 8.625 18.6875C8.625 17.8924 9.26738 17.25 10.0625 17.25Z" fill="black"/>
                    </svg>Vragenlijst
                </a>
            </li>
        </ul>
    </nav>
    <div class="information-auth">
        <figure>
            <img src="/img/testimg.png" alt="" width="38">
        </figure>
        <div class="content">
            <strong>Student HvA</strong>
            <p>student@hva.nl</p>
        </div>
        <button class="auth-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>
        </button>
    </div>
</aside>
<style>
    aside{
        width: 100%;
        max-width: 400px;
        background-color: lightgray;
        background-color: #137BC0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        translate: -100% 0;
        transition: 0.5s ease;
        position: fixed;
        top: 0;
        left: -1px; /* subpixel bug */
        grid-row: 1 / -1;
        z-index: 1;
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
    aside nav{
        padding: 40px 0 0 20px;
    }
    aside nav ul{
        display: grid;
        list-style-type: none;
        gap: 25px;
        padding: 0;
    }
    aside nav ul li a {
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

    aside nav ul li a .corners {
        position: absolute;
        right: -0.5px;
        top: 0;
        height: 100%;
        width: 1px;
        transition: 0.3s ease;
        background: #137BC000;
    }

    aside nav ul li a .corners svg {
        transition: 0.3s ease;
    }

    aside nav ul li a .corners svg > * {
        transition: 0.3s ease;
    }

    aside nav ul li a:before {
        /* background-color: #137BC0; */
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

    aside nav ul li a:after {
        /* background-color: #137BC0; */
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

    aside nav ul li.active a,
    aside nav ul li a:hover,
    aside nav ul li a:focus {
        color: #137BC0;
        background-color: #fff;
        border-top-left-radius: 9px;
        border-bottom-left-radius: 9px;
    }

    aside nav ul li.active a .corners,
    aside nav ul li a:hover .corners,
    aside nav ul li a:focus .corners {
        background: white;
    }

    aside nav ul li.active a:before,
    aside nav ul li a:hover:before,
    aside nav ul li a:focus:before {
        /* border-bottom-right-radius: 100%; */
        background-image: radial-gradient(farthest-side circle at 0% 0%, #0000 calc(100% - .5px), white 100%);
    }

    aside nav ul li.active a:after,
    aside nav ul li a:hover:after,
    aside nav ul li a:focus:after {
        /* border-top-right-radius: 100%; */
        background-image: radial-gradient(farthest-side circle at 0% 100%, #0000 calc(100% - .5px), white 100%);
    }

    aside nav ul li a svg.fill-fix, aside nav ul li a svg.fill-fix > *, aside nav ul li a svg.fill-fix, aside nav ul li a svg.fill-fix, aside nav ul li a svg.fill-fix > *, aside nav ul li a svg.fill-fix > *{
        fill: #fff;
    }
    aside nav ul li a svg.stroke-fix, aside nav ul li a svg.stroke-fix > *, aside nav ul li a svg.stroke-fix, aside nav ul li a svg.stroke-fix, aside nav ul li a svg.stroke-fix > *, aside nav ul li a svg.stroke-fix > *{
        stroke: #fff;
    }
    aside nav ul li.active a svg.fill-fix, aside nav ul li.active a svg.fill-fix > *, aside nav ul li a:hover svg.fill-fix, aside nav ul li a:focus svg.fill-fix, aside nav ul li a:hover svg.fill-fix > *, aside nav ul li a:focus svg.fill-fix > *{
        fill: #137BC0;
    }
    aside nav ul li.active a svg.stroke-fix, aside nav ul li.active a svg.stroke-fix > *, aside nav ul li a:hover svg.stroke-fix, aside nav ul li a:focus svg.stroke-fix, aside nav ul li a:hover svg.stroke-fix > *, aside nav ul li a:focus svg.stroke-fix > *{
        stroke: #137BC0;
    }
    aside .information-auth{
        display: flex;
        justify-content: flex-start;
        padding: 20px;
        margin-top: auto;
        position: relative;
    }
    aside .information-auth:before{
        background-color: #fff;
        opacity: 0.25;
        top: 0;
        left: 0;
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
    }
    aside .information-auth .content{
        margin-left: 1rem;
    }
    aside .information-auth .content > *{
        font-weight: 400;
    }
    aside .information-auth .content p{
        opacity: 0.44;
    }
    aside .information-auth button{
        appearance: none;
        border: 0;
        background-color: transparent;
        margin-left: auto;
        width: 20px;
    }
    aside .information-auth *{
        color: #fff;
        fill: #fff;
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
            position: absolute;
        }
    }

    
</style>