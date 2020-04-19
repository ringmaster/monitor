<script>
    export let site;
    export let showResponse = "yes";

    let textResult = getResult();
    let ms = 0;

    async function getResult() {
        let start = new Date();
        let response = await fetch(site);
        ms = (new Date()).getTime() - start.getTime();
        return await response.text();
    }
</script>

<style>
.pass {
    color: green;
    font-weight: bold;    
}
.fail {
    color: red;
    font-weight: bold;
}
</style>

<dt><strong>{site}</strong>:</dt>
{#if textResult===undefined}
    <dd>Loading...</dd>
{:else}
    {#await textResult}
        <dd>Loading...</dd>
    {:then value}
        <dd><span class="pass">&check; ({ms} ms)</span> 
        {#if showResponse === "yes"}
            {value}
        {:else}
            Received Response
        {/if}
        </dd>
    {:catch error}
        <dd><span class="fail">&#x274C; ({ms} ms)</span> 
        {error.message}
        </dd>
    {/await}
{/if}
