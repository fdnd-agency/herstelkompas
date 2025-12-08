<script>
    let { avatar, name, email } = $props();
    import { HomeIcon, BingoIcon, LinechartIcon, BrainsIcon, OrderedListIcon } from '$lib/icons';
    import { SidebarLink } from '$lib';
</script>
<nav class="nav-sidebar">
    <ul>
        <SidebarLink name="Home" src="/" Svg={HomeIcon}/>
        <SidebarLink name="Bingokaart" src="/bingokaart" Svg={BingoIcon}/>
        <SidebarLink name="Behandelingen" src="/behandelingen" Svg={LinechartIcon}/>
        <SidebarLink name="Scans" src="/scans" Svg={BrainsIcon}/>
        <SidebarLink name="Vragenlijst" src="/vragenlijst" Svg={OrderedListIcon}/>
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