<script>
    let { data } = $props();
    let vragenlijst = data.vragen
    let agreementsScales = [
        {"text": "Zeer mee oneens"},
        {"text": "Oneens"},
        {"text": "Neutraal"},
        {"text": "Eens"},
        {"text": "Zeer mee eens"}
    ]
</script>

<section class="no-js">
    <form method="POST">
        {#each vragenlijst as vraag, i }
            <fieldset>
                <legend>{vraag.vraag}</legend>
                <div>
                    {#each agreementsScales as agreementsScale,j}
                        <input
                        type="radio"
                        id="q-{i + 1}-a-{j + 1}"
                        name="q-{i + 1}"
                        value="{agreementsScale.text}"
                        required={j === 0}
                        oninvalid={j === 0 ? (e) => {
                            const radios = document.querySelectorAll('input[name="q-'+i + 1+']');
                            radios.forEach(r => r.setCustomValidity('Kies een waarde'));
                        } : undefined}
                        oninput={(e) => {
                            const radios = document.querySelectorAll('input[name="q-'+i + 1+']');
                            radios.forEach(r => r.setCustomValidity(''));
                        }}
                        />
                        <!-- Custom bericht als veld niet ingevuld is-->
                        <!-- https://www.w3schools.com/jsref/event_oninvalid.asp -->
                        <!-- https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity -->
                        <label for="q-{i + 1}-a-{j + 1}">{agreementsScale.text}</label>
                    {/each}
                </div>
            </fieldset>
        {/each}
           
        <div id="formControl">
            <input type="submit" value="Submit">
        </div>

    </form>
</section>
<style>
    fieldset {
  padding: 0.5rem 1rem;
  margin: 0;
}

legend {
  padding: 0 0.25rem;
  font-size: 1rem;
  font-weight: bold;
}
</style>