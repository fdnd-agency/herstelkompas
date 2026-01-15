<svelte:head>
    <link rel="stylesheet" href="/css/form-enhance.css">
</svelte:head>
<script>
    let { data, form } = $props();
    import { onMount } from 'svelte';
    import { QuestionListClient } from '$lib';
    let count = $state(1);
    let questionlist = data.questions;
    let agreementsScales = data.agreementsScales;
    let jsEnabled = $state(false);
</script>

<section>
    <header class="page-header">
        <h1>Vragenlijst</h1>
        <p class="subtitle">Hoe heb je vandaag ervaren?</p>
        <p class="visually-hidden">Kies bij elke vraag een waarde tussen de 0 en de 100. Des te hoger de waarde, des te meer u instemt met de vraag</p>
    </header>
    <div id="form-container">
        <QuestionListClient {agreementsScales} {questionlist}/>
    </div>
</section>

<style>
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
    #form-container{
        width: 100%;
        container-name: question;
        container-type: inline-size; 
        position: relative;
        overflow: hidden;
        padding-bottom: 100px;
    }
</style>