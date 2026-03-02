<script>
    import { goto } from "$app/navigation";

    /** Raw survey data passed down via props. */
    export let surveyList = [];

    /**
     * Formats answer values for table display.
     * Arrays are joined into a comma-separated string.
     * Nullish values fall back to a descriptive message.
     */
    export let formatAnswer = (answer) => {
        if (Array.isArray(answer)) return answer.join(", ");
        return answer ?? "No answer provided";
    };

    /**
     * Derived reactive state based on the incoming surveyList prop.
     * Ensures the template always receives a predictable array shape
     * for conditional rendering and safe iteration.
     */
    $: safeSurveyList = Array.isArray(surveyList) ? surveyList : [];

    /** Tracks whether the transition overlay is currently visible. */
    let showOverlay = false;

    /**
     * Starts the animated transition before navigating to the survey page.
     * Prevents immediate link navigation so the overlay animation can finish.
     */
    function startSurvey(event) {
        event?.preventDefault();

        if (showOverlay) return;

        showOverlay = true;

        setTimeout(() => goto("/vragenlijst"), 1600);
    }
</script>

<section class="survey">
    {#if safeSurveyList.length === 0}
        <!-- Baseline navigation still works without JavaScript -->
        <a
            href="/vragenlijst"
            class="btn-primary"
            on:click={startSurvey}
        >
            Vul de vragenlijst in
        </a>

        {#if showOverlay}
            <div class="overlay">
                <p class="overlay-text">Onderweg naar de vragenlijst!</p>

                <div class="orb">
                    <div class="wave wave-one"></div>
                    <div class="wave wave-two"></div>
                    <div class="wave wave-three"></div>
                </div>
            </div>
        {/if}
    {:else}
        <table class="survey-table">
            <tbody class="survey-list">
                {#each safeSurveyList as item (item?.vraag)}
                    <tr class="survey-item">
                        <td class="question-column">{item.vraag}</td>
                        <td class="answer-column">{formatAnswer(item.antwoord)}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}
</section>

<style>
    @layer components {
        /* ----------------------------------
           Overlay animation and fallbacks
        ---------------------------------- */
        .overlay {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(4, 22, 55, 0.9);
        }

        @supports (backdrop-filter: blur(6px)) or (-webkit-backdrop-filter: blur(6px)) {
            .overlay {
                background: rgba(4, 22, 55, 0.55);
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
            }
        }

        @supports (inset: 0) {
            .overlay {
                inset: 0;
            }
        }

        .overlay-text {
            margin-bottom: 2rem;
            transform: translateY(-0.5rem); 
            color: var(--color-white);
            font-weight: 700;
            text-align: center;
            font-size: var(--text-size-xl);
            z-index: 10;
        }

        .orb {
            position: relative;
            width: 16rem;
            height: 16rem;
            max-width: 50vw;
            max-height: 50vw;
            overflow: hidden;
            border-radius: 50%;
            background-color: var(--color-neutral-lighter);
            box-shadow: 0 18px 60px rgba(0, 0, 0, 0.25);
        }

        @supports (width: min(16rem, 50vw)) {
            .orb {
                width: min(16rem, 50vw);
                height: min(16rem, 50vw);
            }
        }

        .wave {
            position: absolute;
            top: 72%;
            left: -50%;
            width: 48rem;
            height: 48rem;
            border-radius: 35%;
            animation:
                waves var(--spin, 9000ms) linear infinite,
                rise 1600ms ease-in forwards;
            transform-origin: center;
        }

        .wave-one {
            background: var(--primary-color-dark);
            opacity: 0.4;
            --spin: 7000ms;
        }

        .wave-two {
            background: var(--primary-color-light);
            opacity: 0.55;
            --spin: 9000ms;
        }

        .wave-three {
            background: var(--primary-color-dark);
            opacity: 0.28;
            --spin: 12000ms;
        }

        @keyframes waves {
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes rise {
            to {
                top: 8%;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .overlay .orb,
            .overlay .wave {
                animation: none;
                display: none;
            }
        }

        /* ----------------------------------
           Tablet layout
        ---------------------------------- */
        @media (min-width: 768px) {
            .survey {
                max-width: 520px;
                margin-left: 0;
                margin-right: auto;
                padding-left: 0;
                padding-right: 0;
            }

            .survey-list {
                display: grid;
                gap: 5px;
            }

            .survey-list tr {
                padding: 1.2rem 1.5rem;
                background-color: #eef6ff;
                border-radius: 12px;
            }

            .survey-item {
                margin: 0;
                padding: 1.1rem 1.2rem;
                border-radius: 1rem;
            }
        }

        /* ----------------------------------
           Desktop layout
        ---------------------------------- */
        @media (min-width: 1024px) {
            .overlay-text {
                position: absolute;
                left: 50%;
                top: calc(50% - 11rem);
                transform: translateX(-50%);
            }
        }
    }
</style>