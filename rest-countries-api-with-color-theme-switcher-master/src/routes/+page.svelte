<script lang="ts">
    import search_icon from '$lib/assets/magnifying-glass-solid-full.svg';
    
    let {data} = $props();
    let countries = $state(data.countries);
    let {region} = $state("");
    let {keyWord} = $state("");
    
    function handleOnChange(){
        console.log(region);
        countries = data.countries;
        if(region){
            countries = countries.filter((country) => country.region == region);
        }
        if(keyWord){
            countries = countries.filter((country) => country.name.toLowerCase().startsWith(keyWord.toLowerCase()));
        }
        
        console.log(countries.length)
    }

</script>


<div>
    <form action="" class="flex justify-between my-10">
        <div class="flex w-1/3 p-4 bg-white border-gray-400  shadow rounded-md items-center gap-1">
            <img src="{search_icon}" alt="Search Icon" class="h-5">
            <input type="text" name="" id="" bind:value={keyWord} 
            onchange={handleOnChange} 
            placeholder="Search for a country."
            >

        </div>
        
        <div>
            <select name="region" id="" bind:value={region}
                onchange={handleOnChange}
                class="p-4 bg-white border-gray-400 shadow rounded-md"
                >
                <option value="" selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </form>
    
    <div class="grid grid-cols-4 gap-15">
        {#each countries as {flag, name,alpha3Code, population, region, capital}}
            <div class=" bg-white rounded-md">
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
</div>