<script>
  import DetailScanToggle from '$lib/components/DetailScanToggle.svelte';
  import { Chevron } from '$lib/icons';
  const { scans, shortDate, formattedDate } = $props();
  let scansInfo = scans?.length > 0 ? scans[scans.length - 1] : null;
</script>
    <header class="bingokaart-header">
      <h2 class="bingokaart-title">{formattedDate}</h2>
      
      {#if !scansInfo || (!scansInfo.scan_before && !scansInfo.scan_after)}
        <p class="bingokaart-subtitle">Tijdens de behandeling van {formattedDate} zijn er nog geen scans gemaakt</p>
        <a href="/scans" class="btn-primary">Update de scans voor deze behandeling</a>
      {:else}
        <p class="bingokaart-subtitle">Jouw scans voor en na de behandeling op {formattedDate}</p>
      {/if}
    </header>


{#if scansInfo?.scan_before}
  <DetailScanToggle
      scanImage={scansInfo.scan_before}
      scanDesc={scansInfo.scan_before_desc}
      scanTitle="Scan voor de surfsessie"
      Svg={Chevron}
  />
{/if}

{#if scansInfo?.scan_after}
  <DetailScanToggle
      scanImage={scansInfo.scan_after}
      scanDesc={scansInfo.scan_after_desc}
      scanTitle="Scan na de surfsessie"
      Svg={Chevron}
  />
{/if}
<style>
    .bingokaart-header{
        margin-right: auto;
        width: 100%;
    }
    .bingokaart-title {
  font-size: var(--text-size-md);
  margin: 0.75rem 0 0.25rem;
  color: var(--primary-color-dark);
}

.bingokaart-subtitle {
  font-size: var(--text-size-sm);
  margin: 0 0 1rem;
  color: var(--color-neutral);
}
    p{
        font-size: 16px;
        color: var(--primary-color-dark);
        font-weight: 400;
        width: 100%;
    }
    @container main-container (width > 550px){
        p{
            font-size: 20px;
        }
    }
</style>