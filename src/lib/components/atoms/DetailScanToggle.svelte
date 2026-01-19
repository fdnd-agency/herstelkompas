<script>
    let { scanImage, scanDesc, scanTitle, Svg } = $props();
</script>

    <details>
        <summary>{scanTitle}<Svg/></summary>
        <figure class="scan-figure">
                <picture>
                    <img
                        src={`https://fdnd-agency.directus.app/assets/${scanImage.id}`}
                        alt={scanImage.title}
                        title={scanImage.title}
                        width={scanImage.width}
                        height={scanImage.height}
                        loading="lazy"
                    />
                </picture>

                <figcaption>{scanDesc}</figcaption>
            </figure>
    </details>

<style>
    details {
        width: fit-content;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 25px 1rem;
        background-color: #DEF0FC;
        border: 2px solid var(--primary-color-dark);
        border-radius: 10px;
        transition: 0.3s ease;
        width: 100%;
        max-width: 450px;
        opacity: 0;
        transform: translateY(12px) scale(0.98);
        --delay: 0s;
        @supports (animation-delay: calc(sibling-index() * 80ms)) {
            --delay: calc(sibling-index() * 160ms);
        }
        animation: card-in 920ms var(--delay) cubic-bezier(.2,.8,.2,1) forwards;
    }
    @keyframes card-in {
        to { opacity: 1; transform: translateY(0) scale(1); }
    }

    details[open]{
        gap: 2rem;
        padding-bottom: 60px;
        transition: 0.3s ease;
        summary{
            &:after{
                height: 2px;
                width: 100%;
                position: absolute;
                background-color: var(--primary-color-dark);
                content: '';
                bottom: -1rem;
            }
            :global(svg){
                transform: rotateX(180deg);
            }
        }
    }
    details summary {
        font-size: 16px;
        color: var(--primary-color-dark);
        font-weight: 600;
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        :global(svg){
            width: 14px;
            height: 9px;
        }
    }
    @container main-container (width > 550px){
        details summary, figcaption{
            font-size: 20px;
        }
    }
    summary::-webkit-details-marker {
        display: none;
    }

    summary {
        list-style: none;
    }
    figcaption{
        text-align: left;
        margin-top: 1rem;
        color: var(--primary-color-dark);
        font-weight: 600;
    }
    picture {
        width: fit-content;
        justify-self: center;
        display: block;
    }
    img {
        width: 100%;
        max-width: 375px;
        max-height: 250px;
        height: auto;
        display: block;
        align-self: center;
        object-fit: cover;
        border: 2px solid var(--primary-color-dark);
        border-radius: 10px;
    }
</style>
