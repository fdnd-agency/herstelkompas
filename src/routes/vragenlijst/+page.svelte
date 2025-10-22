<script>
    let { data } = $props();
    import { onMount } from "svelte";
    let count = $state(1);
    let vragenlijst = data.vragen;
    let agreementsScales = data.agreementsScales;
    let jsEnabled = $state(false);
    //When page is loaded or hard refreshed
    onMount(() => {
        //check for the html class that is acrtive when client side JS is enabled
        jsEnabled = document.documentElement.classList.contains("js-enabled");
        if (jsEnabled) {
            document.querySelector('input[type="submit"]').tabIndex = -1
            let formContainer = document.querySelector('#form-container')
            let formEl = document.querySelector('#formEl');
            // ADD CONTAINER FOR CONTROL BTNS
            let controlBtnContainer = document.createElement("div");
            controlBtnContainer.classList.add("controls-container");
            if (formContainer) {
                formContainer.appendChild(controlBtnContainer);
            }

            // add left
            const prevBtn = document.createElement("button");
            prevBtn.textContent = "Vorige";
            prevBtn.setAttribute("aria-hidden", "true");
            prevBtn.tabIndex = -1;
            prevBtn.classList.add("btn-prev");
            prevBtn.classList.add("btn-nav");
            prevBtn.addEventListener("click", (e) => prevQuestion(e));
            if (controlBtnContainer) {
                controlBtnContainer.appendChild(prevBtn);
            }

            //right
            const nextBtn = document.createElement("button");
            nextBtn.textContent = "Volgende";
            nextBtn.setAttribute("aria-hidden", "true");
            nextBtn.tabIndex = -1;
            nextBtn.classList.add("btn-next");
            nextBtn.classList.add("btn-nav");
            nextBtn.addEventListener("click", (e) => nextQuestion(e));
            if (controlBtnContainer) {
                controlBtnContainer.appendChild(nextBtn);
            }

            if (formEl) {
                const firstChild = formEl.firstElementChild;
                if (!firstChild) return;
                function updateHeight() {
                    const childHeight = firstChild.getBoundingClientRect().height;
                    formEl.style.height = childHeight + "px";
                    const questions = formEl.querySelectorAll("fieldset");
                    // questions.forEach((fieldset) => {
                    //     fieldset.style.opacity = "1";
                    // });
                    console.log(formEl.offsetHeight * ( count - 1))
                    console.log('----')
                    console.log(formEl.scrollTop)
                    formEl.scrollTop = 0 + (formEl.offsetHeight * ( count - 1));
                    document.querySelector('#formControl').style.paddingTop = (formEl.offsetHeight / 2 ) + "px";
                    document.querySelector('#formControl').style.paddingBottom = (formEl.offsetHeight / 2 ) + "px";
                }
                updateHeight();
                window.addEventListener("resize", updateHeight);
            }
            //tab control
            const radios = document.querySelectorAll('#form-container form input');
            const questions = formEl.querySelectorAll("fieldset");
            radios.forEach((radio) => {
                radio.addEventListener('keydown', (e) => {
                    if (e.key === 'Tab') {

                        // shift tab - prev question
                        if (e.shiftKey) {
                            prevQuestion(e);

                        } else { //only tab pressed, next question it is
                            
                            nextQuestion(e);
                            if(count == questions.length + 1){
                                document.querySelector('input[type="submit"]').focus();
                            }
                        }
                        const currentFieldset = formEl.querySelector(`fieldset:nth-child(${count})`);
                        if(currentFieldset){
                            let newFocus = currentFieldset.querySelector('input[type="radio"]:checked');
                            if (!newFocus) {
                                newFocus = currentFieldset.querySelector('.answers-wrapper .input-wrapper:first-child input[type="radio"]');
                                newFocus.checked = true;
                            }
                            newFocus.focus();
                        }
                        console.log(count)
                    }
                });
            });
        }

        // fix for when the body is active element and tab is being pressed
        const q1g = document.querySelectorAll("[name='q-1']");
        q1g.forEach((q1) => {
            q1.addEventListener("focus", function(e) {
                count = 1;
                const form = document.querySelector('form');
                form.scrollTop = 0;
                document.querySelector('.controls-container .btn-prev').style.display = "none"
                console.log(e.target);

                const fieldset = e.target.closest('fieldset');
                if (fieldset) {
                    fieldset.style.opacity = 1;
                    const questions = formEl.querySelectorAll("fieldset");
                
                        questions.forEach((fieldset) => {
                            fieldset.style.opacity = "0";
                            fieldset.classList.remove('animation--slide-in');
                        });
                        fieldset.style.opacity = 1;
                        fieldset.classList.add('animation--slide-in');
                    
                }
            });
        });

    });
    //prev question button click
    function prevQuestion(e) {
        console.log(count);
        console.log(e.type);
        const questions = formEl.querySelectorAll("fieldset");
        if(count == questions.length +1){
            e.preventDefault();
            document.querySelector('.controls-container .btn-next').style.display = "block"
        }
        if(count == 2){ // FIRST Q
            // here no prevent default to get out of the form when shift tabbing
            document.querySelector('.controls-container .btn-prev').style.display = "none"
        }
        if(count > 1 ){
            e.preventDefault();
            formEl.scrollTop -= formEl.offsetHeight;
            count--;
            const questions = formEl.querySelectorAll("fieldset");
            const prevElement = formEl.querySelector(`fieldset:nth-child(${count})`);
            if(prevElement){
                questions.forEach((fieldset) => {
                    fieldset.style.opacity = "0";
                    fieldset.classList.remove('animation--slide-in');
                });
                prevElement.style.opacity = 1;
                prevElement.classList.add('animation--slide-in');
            }
        }

    }
    //next question button click
    function nextQuestion(e) {
        document.querySelector('.controls-container .btn-prev').style.display = "block"
        const questions = formEl.querySelectorAll("fieldset");
        if(count == questions.length){
            e.preventDefault();
            document.querySelector('.controls-container .btn-next').style.display = "none"
            questions.forEach((fieldset) => {
                    fieldset.style.opacity = "0";
                    fieldset.classList.remove('animation--slide-in');
                });
        }
        if(count == questions.length + 1){
            // so you can tab out of the form
        }
        if(count < questions.length + 1 ){
            e.preventDefault();
            formEl.scrollTop += formEl.offsetHeight;
            count++;
            const nextElement = formEl.querySelector(`fieldset:nth-child(${count})`);
            if(nextElement){
                questions.forEach((fieldset) => {
                    fieldset.style.opacity = "0";
                    fieldset.classList.remove('animation--slide-in');
                });
                nextElement.style.opacity = 1;
                nextElement.classList.add('animation--slide-in');
            }
            
        }
        console.log(formEl.scrollTop);
    }
    
</script>

<section>
    <header class="page-header">
        <h1>Vragenlijst</h1>
        <p class="subtitle">Hoe heb je vandaag ervaren?</p>
    </header>
    <div id="form-container">
        <form method="POST" id="formEl">
            {#each vragenlijst as vraag, i}
                <fieldset class={i == 0 ? "animation--slide-in" : ""}>
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
                                    checked={j === 2}
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
                                        const radios =
                                            document.querySelectorAll(
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
                <input type="submit" value="Verstuur vragenlijst" />
            </div>
        </form>
    </div>
</section>

<style>
    button {
        opacity: 0;
        transform: translateY(5px);
        transition:
            opacity .5s,
            transform .5s;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    legend {
        height: 72px;
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
    @media (min-width: 750px) {
        form {
            max-height: calc(100vh - 90px);
        }
    }
    @keyframes slide-in{
        0%{
            translate: 0 100px;
        }
        100%{
            translate: 0 0;
        }
    }
    fieldset {
        padding: 0.5rem 1rem 0.5rem;
        border: none;
        margin: 0;
        transition: 1.25s ease;
        
    }
    @media (prefers-reduced-motion: no-preference) {

        :global(.js-enabled .animation--slide-in) legend{
            animation: .5s slide-in ease-in;
        }
    }

    legend {
        font-weight: 600;
        font-size: var(--text-size-xl);
        color: var(--color-neutral);
        max-width: 48rem;
        margin: 0 auto;
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
    }
    input[type="radio"]:before {
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
    input[type="radio"]:checked,
    .input-wrapper:hover input[type="radio"] {
        background-color: var(--color-neutral);
        
    }
    input[type="radio"]:checked:before, .input-wrapper:hover input[type="radio"]:before {
        color: #e8ebf2;
    }
    input[type="radio"]:focus-visible {
        outline: 2px dashed var(--color-neutral);
    }
    input[type="radio"]:focus-visible:before{
        color: var(--color-neutral);
    } 
    input[type="radio"] + label {
        cursor: pointer;
        font-weight: 600;
        color: var(--color-neutral);
    }
    input[type="submit"] {
        cursor: pointer;
        padding: 8px 30px;
        background-color: #54689c;
        color: #def0fc;
        border: 2px solid #54689c;
        border-radius: 10px;
        margin-left: 1rem;
        font-size: 18px;
        font-weight: bold;
    }
    input[type="submit"]:hover,
    input[type="submit"]:focus-visible {
        background-color: #e8ebf2;
        color: var(--color-neutral);
    }
    .answers-wrapper {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        margin-top: 1rem;
        background: white;
        z-index: 3;
        position: relative;
    }
    .input-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: fit-content;
        cursor: pointer;
    }

    /* Has JS */

    :global(html.js-enabled) section form {
    position: absolute;
    left: 50%;
    translate: -50% -50%;
    top: 300px;
    width: 80%;
    overflow: hidden;
    height: 225px;
    gap: 0;
    min-width: 320px;
}

:global(html.js-enabled) section fieldset {
    flex: 1;
    opacity: 0;
    text-align: center;
}

:global(html.js-enabled) section fieldset:first-child {
    opacity: 1;
}

:global(html.js-enabled) section #formControl {
    text-align: center;
}

:global(html.js-enabled) section .answers-wrapper {
    justify-content: center;
    gap: 0.5rem;
    flex-direction: row;
}

:global(html.js-enabled) section .answers-wrapper .input-wrapper {
    flex-direction: column;
    text-align: center;
    flex: 1;
}

:global(html.js-enabled) section .answers-wrapper .input-wrapper input[type="radio"] {
    width: 44px;
    height: 44px;
}

:global(html.js-enabled) section .answers-wrapper .input-wrapper input[type="radio"] + label {
    font-size: 13px;
}

@media (min-width: 500px) {
    :global(html.js-enabled) section .answers-wrapper {
        gap: 1rem;
        flex-direction: row;
    }

    :global(html.js-enabled) section .answers-wrapper .input-wrapper {
        flex-direction: column;
    }

    :global(html.js-enabled) section .answers-wrapper .input-wrapper input[type="radio"] {
        width: 55px;
        height: 55px;
    }

    :global(html.js-enabled) section .answers-wrapper .input-wrapper input[type="radio"] + label {
        font-size: 15px;
    }
}

@media (min-width: 850px) {
    :global(html.js-enabled) section .answers-wrapper {
        gap: 1rem;
        flex-direction: row;
    }

    :global(html.js-enabled) section .answers-wrapper .input-wrapper {
        flex-direction: column;
        max-width: 140px;
    }

    :global(html.js-enabled) section .answers-wrapper .input-wrapper input[type="radio"] {
        width: 64px;
        height: 64px;
    }

    :global(html.js-enabled) section .answers-wrapper .input-wrapper input[type="radio"] + label {
        font-size: 1rem;
    }
}

:global(.controls-container) {
    top: 450px;
    position: absolute;
    translate: -50% -50%;
    opacity: 1;
    transition: .5s ease;
    justify-content: center;
    display: flex;
    width: 100%;
    max-width: 310px;
    flex-wrap: wrap;
    row-gap: 10px;
}

@media (prefers-reduced-motion: no-preference) {
    @starting-style {
        :global(.controls-container) {
            opacity: 0;
            top: 550px;
        }
    }
}

:global(button.btn-nav) {
    transition: 0.3s ease;
    cursor: pointer;
    padding: 8px 30px;
    border-radius: 10px;
    margin-left: 1rem;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid #54689c;
}

:global(button.btn-prev) {
    background-color: #e8ebf2;
    color: #54689c;
    display: none;
}

:global(button.btn-prev):hover {
    background-color: #54689c;
    color: #def0fc;
}

:global(button.btn-next) {
    background-color: #54689c;
    color: #def0fc;
}

:global(button.btn-next):hover {
    background-color: #e8ebf2;
    color: #54689c;
}
</style>
