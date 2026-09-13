<script lang="ts">
    let data = $props();
    const country = data.data;
</script>

<div class="py-10">
    <a href="/" class="border rounded-sm shadow-2xl px-5 py-1 bg-white">Back</a>
</div>

<div class="grid grid-cols-2">
    <img src="{country.flag}" alt="{country.name}">
    <div class="px-20 py-10">
        <h1 class="font-bold text-3xl my-3">{country.name}</h1>
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
                <span class="font-thin bg-gray-100 border border-gray-50 shadow-sm px-4 mx-1">{border}</span>
            {/each}
        </p>
    </div>
    
</div>

