<script>
    let { data, form } = $props();

    let behandelingen = data.behandelingen
    let bingokaart = data.bingokaart

    let success = $state(false)

    if(form?.success) {
        success = true
        setTimeout(() => {
            success = false
        }, 1000)
    }

    import { Bingocard } from '$lib';
    import { Sidebar } from '$lib';
    import { page } from '$app/state';
</script>

        <h1>Bingokaart pagina</h1>
        <Bingocard {bingokaart} {success} />
    </main>
</div>
