
<script>
    let { vragenlijst, agreementsScales } = $props();
    import { onMount } from "svelte";
    import { Vraag } from '$lib';
    let count = $state(1);
    let jsEnabled = $state(false);
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
            prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
<path d="M0.5 7.4751C0.500098 7.30962 0.565682 7.15079 0.682617 7.03369L7.04102 0.675293L7.13672 0.600097C7.23846 0.534537 7.35768 0.499425 7.48047 0.500488C7.64431 0.501912 7.80112 0.567267 7.91699 0.683105C8.03285 0.798959 8.09816 0.955796 8.09961 1.11963C8.10068 1.24268 8.06584 1.36246 8 1.46436L7.9248 1.55908L2.00879 7.4751L2.3623 7.82861L7.93066 13.3979C8.0477 13.5151 8.11322 13.6738 8.11328 13.8394C8.11328 13.9636 8.07664 14.0842 8.00879 14.186L7.93066 14.2817C7.81357 14.3987 7.65474 14.4643 7.48926 14.4644C7.32359 14.4644 7.16407 14.3988 7.04687 14.2817L0.682617 7.91748C0.565522 7.80029 0.5 7.64077 0.5 7.4751Z" fill="#54689C" stroke="#54689C"/>
</svg><span>Vorige</span>`;

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
            nextBtn.innerHTML = `<span>Volgende</span><svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none" style="vertical-align: middle; transform: rotate(180deg);">
                <path d="M0.5 7.4751C0.500098 7.30962 0.565682 7.15079 0.682617 7.03369L7.04102 0.675293L7.13672 0.600097C7.23846 0.534537 7.35768 0.499425 7.48047 0.500488C7.64431 0.501912 7.80112 0.567267 7.91699 0.683105C8.03285 0.798959 8.09816 0.955796 8.09961 1.11963C8.10068 1.24268 8.06584 1.36246 8 1.46436L7.9248 1.55908L2.00879 7.4751L2.3623 7.82861L7.93066 13.3979C8.0477 13.5151 8.11322 13.6738 8.11328 13.8394C8.11328 13.9636 8.07664 14.0842 8.00879 14.186L7.93066 14.2817C7.81357 14.3987 7.65474 14.4643 7.48926 14.4644C7.32359 14.4644 7.16407 14.3988 7.04687 14.2817L0.682617 7.91748C0.565522 7.80029 0.5 7.64077 0.5 7.4751Z" fill="#54689C" stroke="#54689C"/>
            </svg>`;
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
                    console.log('HEIGHT')
                    const childHeight = firstChild.getBoundingClientRect().height;
                    formEl.style.height = childHeight + "px";
                    const questions = formEl.querySelectorAll("fieldset");
                    // questions.forEach((fieldset) => {
                    //     fieldset.style.opacity = "1";
                    // });
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
                            let newFocus = currentFieldset.querySelector(`input#q-${count}`);
                            console.log(newFocus)
                            newFocus.focus();
                        }
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
                document.querySelector('.controls-container .btn-next').style.display = "flex"

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
        const questions = formEl.querySelectorAll("fieldset");
        if(count == questions.length +1){
            e.preventDefault();
            document.querySelector('.controls-container .btn-next').style.display = "flex"
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
        document.querySelector('.controls-container .btn-prev').style.display = "flex"
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
    }
</script>
<form method="POST" id="formEl">
    {#each vragenlijst as vraag, i}
        <Vraag {i} length={vragenlijst.length} {vraag} {agreementsScales}/>
    {/each}

    <div id="formControl">
        <input type="submit" value="Verstuur vragenlijst" />
    </div>
</form>
<style>
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-height: calc(100vh - 150px);

        overflow-y: auto;
        padding-bottom: 3rem;
    }
    @media (min-width: 850px) {
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
   
    :global(main) {
        font-family: var(--font-regular);
        background-color: var(--color-white);
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
    
:global(html.js-enabled) form {
    width: 100%;
    overflow: hidden;
    height: 225px;
    gap: 0;
}

:global(html.js-enabled) #formControl {
    text-align: center;
}


:global(#form-container) {
    position: relative;
    width: fit-content;

}

:global(.controls-container) {
    top: calc(100% + 30px);
    position: absolute;
    translate: -50% -50%;
    opacity: 1;
    transition: .5s ease;
    justify-content: center;
    display: flex;
    width: 100%;
    max-width: 350px;
    flex-wrap: wrap;
    row-gap: 10px;
    left: 50%;
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
    padding: 8px 15px;
    border-radius: 10px;
    margin-left: 1rem;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid #54689c;
    display: flex;
    gap: 5px;
    align-items: center;
}

:global(button.btn-prev) {
    background-color: #e8ebf2;
    color: #54689c;
    display: none;
}
:global(button.btn-prev) :global(span) {
    font-size: 0;
}
@container question (width > 500px) {

    :global(button.btn-prev) :global(span){
        font-size: inherit
    }
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
:global(h1), :global(.subtitle){
    margin-left: 0 !important
}
:global(button.btn-next) :global(svg) > :global(path){
    stroke: #e8ebf2;
    fill: #e8ebf2;
}
:global(button.btn-next):hover :global(svg) > :global(path){
    stroke: #54689c;
    fill: #54689c;
}
:global(button.btn-prev) :global(svg) > :global(path){
    stroke: #54689c;
    fill: #54689c;
}
:global(button.btn-prev):hover :global(svg) > :global(path){
    stroke: #e8ebf2;
    fill: #e8ebf2;
}
</style>