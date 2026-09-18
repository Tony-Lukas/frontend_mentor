<script lang="ts">
    import search_icon from '$lib/assets/magnifying-glass-solid-full.svg';
    import dropdown from '$lib/assets/dropdown_icon.png';

    

    let {data} = $props();

    let countries = $state(data.countries);
    let selectedRegion = $state("Filter by Region");
    let isDropDownOpen = $state(false);
    let keyWord = $state("");

    let regions = ["Filter by Region","Africa", "Americas", "Asia", "Europe", "Oceania"]
    
    function handleOnChange(){
        
        countries = data.countries;
        if(selectedRegion != "Filter by Region"){
            countries = countries.filter((country) => country.region == selectedRegion);
        }
        if(keyWord){
            countries = countries.filter((country) => country.name.toLowerCase().startsWith(keyWord.toLowerCase()));
        }
        isDropDownOpen = false;
    }

    function handleSelectRegion(region:string){
        selectedRegion = region;
        isDropDownOpen = false;
        handleOnChange();
    }

</script>


<div>
    <form action=""  class="lg:flex justify-between my-10">
        <div class="flex max-w-xs mb-6 p-4 bg-white border-gray-400  shadow rounded-md items-center gap-1">
            <img src="{search_icon}" alt="Search Icon" class="h-5">
            <input type="text" name="" id="" bind:value={keyWord} 
            onchange={handleOnChange} 
            placeholder="Search for a country."
            >

        </div>
        
        <div class="relative max-w-3xs">
            <button
            class="flex items-center justify-between rounded-md bg-white px-5 py-4 text-sm text-gray-700 w-full shadow-sm hover:shadow-md" 
            onclick={() => (isDropDownOpen = !isDropDownOpen)}>
                <span>{selectedRegion}</span>
                <img src="{dropdown}" alt="drop down" class="h-4">
            </button>
            {#if isDropDownOpen}
                <div class="absolute bg-white mt-1 rounded-md py-2 shadow-lg z-50 left-0 right-0 top-full">
                    {#each regions as region}
                        <button
                        class="block w-full text-left px-5 py-2 text-gray-700 hover:bg-gray-100"
                        onclick={()=>handleSelectRegion(region)}>
                            {region}
                        </button>
                    {/each}
                </div>
            {/if}
        </div>
    </form>
    
    <div class="lg:grid lg:grid-cols-4 gap-15 ">
        {#each countries as {flag, name,alpha3Code, population, region, capital}}
            <a href="/detail/{alpha3Code}" class="flex flex-col h-full">
            <div class=" bg-white rounded-md max-w-3xs w-full mx-auto mb-4">
                <img src="{flag}" alt="{name}"  class="w-full h-40 object-cover rounded-t-md shadow-md">
                <div class="p-4 flex flex-col grow">
                    <h3 class="font-bold text-xl mb-4 truncate">{name}</h3>
                    <ul>
                        <li class="font-medium truncate">Region: <span class="font-extralight">{region}</span></li>
                        <li class="font-medium truncate">Population: <span class="font-extralight">{population}</span></li>
                        <li class="font-medium truncate">Capital: <span class="font-extralight">{capital}</span></li>
                    </ul>
                </div>
            </div>
            </a>
        {/each}
    </div>
</div>
