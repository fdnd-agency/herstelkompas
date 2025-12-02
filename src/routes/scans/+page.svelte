<svelte:head>
    <link rel="stylesheet" href="/css/fileInputEnhance.css">
</svelte:head>
<script>
    let { data } = $props();
    import { page } from "$app/state";
    import { FileDescInput } from "$lib";
    import { onMount } from "svelte";
    let fileSelected;
    let textInputContent;
    onMount(() => {
        let inputs = document.querySelectorAll("input.input-file");

        inputs.forEach((input) => {
            input.addEventListener("change", function () {
                const label = this.nextElementSibling;
                label.style.setProperty(
                    "--url",
                    `url('${URL.createObjectURL(this.files[0])}')`,
                );
            });
        });
    });
</script>

<section>
    <header class="page-header">
        <h1>Scans</h1>
        <p class="subtitle">Upload hier de gemaakte scans</p>
    </header>
    <div id="form-container">
        <form method="POST" id="formEl" class="fileInputForm" enctype="multipart/form-data">
            <FileDescInput
                file_title="Scan voor de surfsessie"
                file_name="scan-before"
                file_id="input-file-before"
                desc_title="Beschrijving"
                desc_name="scan-before-desc"
                desc_id="input-desc-before"
            />
            <FileDescInput
                file_title="Scan na de surfsessie"
                file_name="scan-after"
                file_id="input-file-after"
                desc_title="Beschrijving"
                desc_name="scan-after-desc"
                desc_id="input-desc-after"
            />
            <input type="submit" value="Vestuur" />
        </form>
    </div>
</section>

<style>
    form{
          margin-top: 2rem;
    }
    #form-container {
        display: flex;
        justify-content: center;
        overflow-y: auto;
        height: 80vh;
    }
    @container main-container (width > 600px) {
        form {
            display: grid;
            grid-template-areas:
                "i1 i2"
                "s s";
            grid-template-rows: min-content 1fr;
            width: fit-content;
            column-gap: 3rem;
        }
    }
    .page-header {
        color: var(--primary-color-dark);
    }
    input[type="submit"] {
        grid-area: s;
        width: fit-content;
        height: fit-content;
        margin: 0 auto;
        margin-top: 3rem;
    }
</style>
