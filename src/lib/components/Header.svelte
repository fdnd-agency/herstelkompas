<header>
    <a href="#nav-sidebar" class="hamburger-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
            <path d="M2 4H26C27.104 4 28 3.104 28 2C28 0.896 27.104 0 26 0H2C0.896 0 0 0.896 0 2C0 3.104 0.896 4 2 4ZM26 8H2C0.896 8 0 8.896 0 10C0 11.104 0.896 12 2 12H26C27.104 12 28 11.104 28 10C28 8.896 27.104 8 26 8ZM26 16H2C0.896 16 0 16.896 0 18C0 19.104 0.896 20 2 20H26C27.104 20 28 19.104 28 18C28 16.896 27.104 16 26 16Z" fill="#56423D"/>
        </svg>menu
    </a>
    <!-- Nog logo toevoegen -->
</header>
<style>

header .hamburger-close{
    display: flex;
    color: #0B4989;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 42px;
    border-radius: 9px;
    box-sizing: content-box;
    text-decoration: none;
    padding: 10px;
    margin-top: 20px;
    margin-left: 20px;
    font-weight: bold;
    line-height: 1rem;
    gap: .35rem;
    transition: 0.3s ease;

}
    @media (min-width: 750px){
        header .hamburger-close{
            display: none !important;
        }
    }

header .hamburger-close svg > *{
    fill: #0B4989;
    transition: 0.3s ease;
}
header .hamburger-close:hover, header .hamburger-close:focus{
    background-color: #0B4989;
    color: white;
}
header .hamburger-close:hover svg > *, header .hamburger-close:focus svg > *{
    fill: white;
}

</style>