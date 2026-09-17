import countries from '$lib/data/data.json';

export function load(){
    return {
        countries: countries.map((data)=>({
            flag: data.flag,
            alpha3Code: data.alpha3Code,
            name: data.name,
            population: new Intl.NumberFormat('en-US').format(data.population),
            region: data.region,
            capital: data.capital
        }))
    }
}