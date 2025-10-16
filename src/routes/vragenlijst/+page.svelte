<script>
    let { data } = $props();
    let vragenlijst = data.vragen;
    let agreementsScales = [
        { text: "Zeer mee oneens" },
        { text: "Oneens" },
        { text: "Neutraal" },
        { text: "Eens" },
        { text: "Zeer mee eens" },
    ];
</script>

<section class="no-js">
    <header class="page-header">
        <h1>Vragenlijst</h1>
        <p class="subtitle">Hoe heb je vandaag ervaren?</p>
    </header>
    <form method="POST">
        {#each vragenlijst as vraag, i}
            <fieldset>
                <legend>{vraag.vraag}</legend>
                <div class="answers-wrapper">
                    {#each agreementsScales as agreementsScale, j}
                        <div class="input-wrapper">
                            <input
                                data-num={j + 1}
                                type="radio"
                                id="q-{i + 1}-a-{j + 1}"
                                name="q-{i + 1}"
                                value={agreementsScale.text}
                                required={j === 0}
                                oninvalid={j === 0
                                    ? (e) => {
                                          const radios =
                                              document.querySelectorAll(
                                                  'input[name="q-' +
                                                      i +
                                                      1 +
                                                      "]",
                                              );
                                          radios.forEach((r) =>
                                              r.setCustomValidity(
                                                  "Kies een waarde",
                                              ),
                                          );
                                      }
                                    : undefined}
                                oninput={(e) => {
                                    const radios = document.querySelectorAll(
                                        'input[name="q-' + i + 1 + "]",
                                    );
                                    radios.forEach((r) =>
                                        r.setCustomValidity(""),
                                    );
                                }}
                            />
                            <!-- Custom bericht als veld niet ingevuld is-->
                            <!-- https://www.w3schools.com/jsref/event_oninvalid.asp -->
                            <!-- https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity -->
                            <label for="q-{i + 1}-a-{j + 1}"
                                >{agreementsScale.text}</label
                            >
                        </div>
                    {/each}
                </div>
            </fieldset>
        {/each}

        <div id="formControl">
            <input type="submit" value="Submit" />
        </div>
    </form>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-height: calc(100vh - 150px);

        overflow-y: auto;
        padding-bottom: 3rem;
    }
    @media (min-width: 750px){
        form{
        max-height: calc(100vh - 90px);
        }
    }
    fieldset {
padding: 0 1rem
16px
;
        border: none;
        margin: 0;
    }

    legend {
        font-weight: 600;
        font-size: var(--text-size-xl);
        color: var(--color-neutral);
        max-width: 48rem;
    }
    main {
        font-family: var(--font-regular);
        background-color: var(--color-white);
    }
    header {
        align-self: start;
    }
    header h1 {
        color: var(--primary-color-dark);
        font-family: var(--font-semibold);
        font-size: var(--text-size-xl);
        margin-bottom: 0.25rem;
        margin-left: 1rem;
    }

    header .subtitle {
        color: var(--primary-color-dark);
        font-size: var(--text-size-sm);
        margin-bottom: 1rem;
        margin-left: 1rem;
    }
    input[type="radio"] {
        width: 64px;
        height: 64px;
        border-radius: 10px;
        background-color: #e8ebf2;
        appearance: none;
        border: 2px solid var(--color-neutral);
        position: relative;
        transition: 0.3s ease-in;
        cursor: pointer;
        &:before {
            content: attr(data-num);
            font-size: var(--text-size-lg);
            font-weight: 800;
            color: var(--color-neutral);
            position: absolute;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            transition: 0.3s ease-in;
        }
    }
    input[type="radio"]:checked,input[type="radio"]:focus-visible, .input-wrapper:hover input[type="radio"]{
        width: 64px;
        height: 64px;
        border-radius: 10px;
        background-color: var(--color-neutral);
        appearance: none;
        border: 2px solid var(--color-neutral);
        &:before {
            color: #e8ebf2;
        }
    }
    input[type="radio"] + label{
        cursor: pointer;
        font-weight: 600;
        color: var(--color-neutral);
    }
    input[type="submit"]{
        cursor: pointer;
        padding: 8px 30px;
        background-color: #54689C;
        color: #DEF0FC;
        border: 2px solid #54689C;
        border-radius: 10px;
        margin-left: 1rem;
        font-size: 18px;
        font-weight: bold;
    }
    input[type="submit"]:hover,input[type="submit"]:focus-visible{
        background-color: #e8ebf2;
        color: var(--color-neutral);
    }
    .answers-wrapper {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        margin-top: 1rem;
    }
    .input-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: fit-content;
        cursor: pointer;
    }
</style>
