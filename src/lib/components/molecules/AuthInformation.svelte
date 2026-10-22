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

<style>
    section{
        padding: 20px;
        margin-top: auto;
        position: relative;

        &:before{
            position: absolute;
            inset: 0 0 auto;
            height: 1px;
            content: '';
            background-color: var(--color-white);
            opacity: 0.25;
        }

        details{
            &[open]{
                .account-toggle{
                    border-radius: 9px 9px 0 0;
                }

                :global(.chevron){
                    transform: rotate(180deg);
                }
            }

            summary{
                list-style: none;

                &::-webkit-details-marker{
                    display: none;
                }
            }
        }

        .account-toggle,
        .login-card{
            display: flex;
            align-items: center;
            width: 100%;
            min-height: 58px;
            padding: 8px 10px;
            border: 0;
            border-radius: 9px;
            color: var(--color-white);
            background: var(--primary-color-dark);
            text-decoration: none;
            cursor: pointer;

            &:hover,
            &:focus-visible{
                background: var(--primary-color-light);
            }
        }

        .avatar{
            display: grid;
            flex: 0 0 38px;
            place-items: center;
            width: 38px;
            height: 38px;
            overflow: hidden;
            border-radius: 50%;
            background: var(--color-blue-tint);

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .content{
            display: grid;
            min-width: 0;
            gap: 2px;
            margin-left: 12px;

            strong,
            span{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            strong{
                font-family: var(--font-semibold);
                font-size: var(--text-size-sm);
            }

            span{
                color: var(--color-neutral-lighter);
                font-size: var(--text-size-xs);
            }
        }

        :global(.chevron){
            width: 18px;
            height: 18px;
            margin-left: auto;
            color: var(--color-white);
        }

        .account-menu{
            display: grid;
            gap: 2px;
            margin-top: 2px;
            padding: 7px 0;
            border-radius: 0 0 9px 9px;
            background: var(--primary-color-dark);

            a{
                display: flex;
                align-items: center;
                gap: 12px;
                min-height: 40px;
                padding: 6px 12px;
                color: var(--color-white);
                font-size: var(--text-size-sm);
                text-decoration: none;
                cursor: pointer;

                &:hover,
                &:focus-visible{
                    background: var(--primary-color-light);
                }

                &.logout{
                    margin-top: 7px;
                    padding-top: 12px;
                    border-top: 1px solid var(--color-neutral-light);
                }
            }

            :global(svg){
                width: 20px;
                height: 20px;
                flex: 0 0 20px;
                stroke: currentColor;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 1.5;
            }
        }
    }
</style>