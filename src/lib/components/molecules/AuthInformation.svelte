<script>
    let { avatar, name, email } = $props();
    let isLoggedIn = $derived(Boolean(name || email));
    import { Arrow, HelpIcon, LogoutIcon, SettingsIcon, UserIcon } from '$lib/icons';
</script>
<section>
    {#if isLoggedIn}
        <details>
            <summary class="account-actions">
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
                        <p>{email}</p>
                    {/if}
                </span>

                <span class="arrow">
                    <Arrow />
                </span>
                
            </summary>

            <nav>
                <ul>
                    <li>
                        <a href="/account">
                            <UserIcon width="20" height="20" style="flex: 0 0 20px; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;" />
                            Mijn account
                        </a>
                    </li>
                    <li>
                        <a href="/instellingen">
                            <SettingsIcon width="20" height="20" style="flex: 0 0 20px; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;" />
                            Instellingen
                        </a>
                    </li>
                    <li>
                        <a href="/help">
                            <HelpIcon width="20" height="20" style="flex: 0 0 20px; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;" />
                            Hulp en support
                        </a>
                    </li>
                    <li>
                        <a href="/logout">
                            <LogoutIcon width="20" height="20" style="flex: 0 0 20px; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;" />
                            Uitloggen
                        </a>
                    </li>
                </ul>
            </nav>
            
        </details>
    {:else}
        <a class="login-card" href="/login">
            <span class="avatar">
                <img src="/img/testimg.png" alt="default avatar" width="38" height="38">
            </span>
            <span class="content">
                <strong>Mijn account</strong>
                <span>click the link in you email to login</span>
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
            &::details-content{
                max-height: 0;
                overflow: clip;
                content-visibility: hidden;
                opacity: 0;
                translate: 0 -8px;
                transition: content-visibility 0.5s allow-discrete, max-height 0.5s ease, opacity 0.5s ease, translate 0.5s ease;
            }

            &[open]::details-content{
                max-height: 300px;
                content-visibility: visible;
                opacity: 1;
                translate: 0 0;
            }

            &[open]{
                .account-actions{
                    border-radius: 9px 9px 0 0;
                }

                .arrow{
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

        @media (prefers-reduced-motion: reduce){
            details::details-content,
            details[open]::details-content{
                max-height: none;
                content-visibility: visible;
                opacity: 1;
                translate: none;
                transition: none;
            }

            details{
                .arrow{
                    transition: none;
                }
            }
        }

        .account-actions,
        .login-card{
            display: flex;
            align-items: center;
            width: 100%;
            min-height: 58px;
            padding: 8px 10px;
            border-radius: 9px;
            color: var(--color-white);
            background: var(--primary-color-dark);
            text-decoration: none;
            cursor: pointer;
            transition: 0.3s ease;

            &:hover,
            &:focus{
                color: var(--primary-color-dark);
                background: var(--color-white);
                border-top-left-radius: 9px;
                border-bottom-left-radius: 9px;

                .content span{
                    color: var(--primary-color-dark);
                }

                .arrow{
                    color: var(--primary-color-dark);
                }

            }
        }

        .arrow{
            display: grid;
            place-items: center;
            width: 18px;
            height: 18px;
            margin-left: auto;
            color: var(--color-white);
            transition: transform 0.5s ease, color 0.3s ease;
        }

        .avatar{
            display: grid;
            place-items: center;
            width: 38px;
            height: 38px;
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
            gap: 2px;
            margin-left: 12px;

            strong,
            span{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            strong{
                font-size: var(--text-size-md);
                font-weight: var(--font-weight-semibold);
            }

            span{
                color: var(--color-neutral-lighter);
                font-size: var(--text-size-xs);
            }
        }

        details nav{
            margin-top: 2px;
            padding: 7px 0;
            border-radius: 0 0 9px 9px; 
            background: var(--primary-color-dark);

            ul{
                display: grid;
                gap: 2px;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            a{
                display: flex;
                align-items: center;
                gap: 12px;
                min-height: 40px;
                padding: 6px 12px;
                color: var(--color-white);
                font-size: var(--text-size-md);
                font-weight: var(--font-weight-semibold);
                text-decoration: none;
                cursor: pointer;
                transition: 0.3s ease;


                li:last-child &{
                    margin-top: 7px;
                    padding-top: 12px;
                    border-top: 1px solid var(--color-neutral-light);
                }

                &:hover,
                &:focus{
                    color: var(--primary-color-dark);
                    background: var(--color-white);
                    border-top-left-radius: 9px;
                    border-bottom-left-radius: 9px;
                }
            }

        }
    }
</style>