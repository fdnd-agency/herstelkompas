<script>
    let { avatar, name, email } = $props();
    import { HomeIcon, BingoIcon, LinechartIcon, BrainsIcon, OrderedListIcon } from '$lib/icons';
    import { SidebarLink } from '$lib';
</script>
<nav class="nav-sidebar">
    <ul>
        <SidebarLink name="Home" src="/deashboard" Svg={HomeIcon}/>
        <SidebarLink name="Bingokaart" src="/deashboard/bingokaart" Svg={BingoIcon}/>
        <SidebarLink name="Vragenlijst" src="/deashboard/vragenlijst" Svg={OrderedListIcon}/>
        <SidebarLink name="Scans" src="/deashboard/scans" Svg={BrainsIcon}/>
        <SidebarLink name="Behandelingen" src="/deashboard/behandelingen" Svg={LinechartIcon}/>


    </ul>
</nav>

<style>
    nav{
        padding: 40px 0 0 20px;
    }
    nav ul{
        display: grid;
        list-style-type: none;
        gap: 25px;
        padding: 0;
    }
</style>