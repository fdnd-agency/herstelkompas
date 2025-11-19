<script>
    let { data } = $props();
    import { page } from '$app/state';
</script>

<section>
    <header class="page-header">
        <h1>Scans</h1>
        <p class="subtitle">Upload hier de gemaakte scans</p>
    </header>
    <div id="form-container">
        <form method="POST" id="formEl" enctype="multipart/form-data">
            <fieldset>
                <legend>Scan voorafgaand aan de sessie</legend>
                <label>Upload afbeelding
                    <input required type="file" name="scanBefore" accept="image/*" id="input-file-before" class="input-file"/>
                </label>
            </fieldset>
            <fieldset>
                <legend>Scan na de sessie</legend>
                <label>Upload afbeelding
                    <input required type="file" name="scan-after" accept="image/*" id="input-file-after" class="input-file"/>
                </label>
            </fieldset>
            <input type="submit" value="Vestuur">
        </form>
    </div>
</section>