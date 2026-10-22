<script>
    let { avatar, name, email } = $props();
    let isLoggedIn = $derived(Boolean(name || email));
    import { Chevron, HelpIcon, LogoutIcon, SettingsIcon, UserIcon } from '$lib/icons';
</script>
<section>
    {#if isLoggedIn}
        <details>
            <summary class="account-toggle">
                <span class="avatar">
                    {#if avatar}
                        <img src={avatar} alt="avatar" width="38" height="38">
                     {:else}
                        <UserIcon />
                    {/if}
                </span>
                <span class="content">
                    {#if name}
                        <strong>{name}</strong>
                    {/if}
                    {#if email}
                        <span>{email}</span>
                    {/if}
                </span>
                <Chevron class="chevron" />
            </summary>
            <nav class="account-menu">
                <a href="/account">
                    <UserIcon />
                    Mijn account
                </a>
                <a href="/instellingen">
                    <SettingsIcon />
                    Instellingen
                </a>
                <a href="/help">
                    <HelpIcon />
                    Hulp en support
                </a>
                <a class="logout" href="/logout">
                    <LogoutIcon />
                    Uitloggen
                </a>
            </nav>
        </details>
    {:else}
        <a class="login-card" href="/login">
            <span class="avatar">
                <UserIcon />
            </span>
            <span class="content">
                <strong>Mijn account</strong>
                <span>login/ signup</span>
            </span>
        </a>
    {/if}
</section>

<style></style>