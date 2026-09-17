<script lang="ts">
    import left_arrow from "$lib/assets/arrow-left-solid-full.svg";

    let data = $props();
    const country = data.data;
</script>

<div class="py-10 w-25">
    <a href="/" class="flex px-4 py-2 bg-white border-gray-400  shadow rounded-md w- items-center justify-around">
        <img src="{left_arrow}" alt="Left Arrow" class="h-5 mr-2">Back
    </a>
</div>

<div class="grid grid-cols-2 h-1/3">
    <img src="{country.flag}" alt="{country.name}" class="w-full object-cover rounded-xl">
    
    <div class="px-20">
        <h1 class="font-bold text-3xl">{country.name}</h1>
        <div class="grid grid-cols-2 mb-3">
            <div>
                <p class="font-medium my-2">Native Name: <span class="font-thin">{country.nativeName}</span></p>
                <p class="font-medium my-2">Population: <span class="font-thin">{country.population}</span></p>
                <p class="font-medium my-2">Region: <span class="font-thin">{country.region}</span></p>
                <p class="font-medium my-2">Sub Region: <span class="font-thin">{country.subRegion}</span></p>
                <p class="font-medium my-2">Capital: <span class="font-thin">{country.capital}</span></p>
            </div>
            <div>
                <p class="font-medium my-2">Top Level Domain: <span class="font-thin">{country.topLevelDomain}</span></p>
                <p class="font-medium my-2">Currencies: <span class="font-thin">{country.currencies}</span></p>
                <p class="font-medium my-2">Languages: <span class="font-thin">{country.languages}</span></p>
            </div>
        </div>
        <p class="font-medium py-10">Border Countries: 
            {#each country.borders as border }
                <a data-sveltekit-reload href="/detail/{border.alpha3Code}">
                    <span class="font-thin bg-white border border-gray-50 shadow-sm px-4 rounded-sm inline-block m-1">{border.name}</span>
                </a>
            {:else}
                no border countries. 
            {/each}
        </p>
    </div>
    
</div>

