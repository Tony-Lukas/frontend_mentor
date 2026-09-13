<script lang="ts">
    let {data} = $props();
</script>



<div class="grid grid-cols-4 gap-15 mx-auto max-w-10/12">
    {#each data.countries as {flag, name,alpha3Code, population, region, capital}}
        <div class="w-64 bg-gray-100 rounded-md">
            <img src="{flag}" alt="{name}"  class="h-1/2 w-full object-cover rounded-t-md">
            <div class="px-4 mb-1 ">
                <a href="/detail/{alpha3Code}"><h3 class="font-bold text-xl my-3">{name}</h3></a>
                <p class="font-medium">Population: <span class="font-extralight">{population}</span></p>
                <p class="font-medium">Region: <span class="font-extralight">{region}</span></p>
                <p class="font-medium">Capital: <span class="font-extralight">{capital}</span></p>
            </div>
        </div>
    {/each}
</div>