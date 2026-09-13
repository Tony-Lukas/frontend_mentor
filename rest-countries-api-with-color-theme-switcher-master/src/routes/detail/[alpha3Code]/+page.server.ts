import countries from '$lib/data/data.json';
import {error} from '@sveltejs/kit';

export function load({params}){
     const country = countries.find((country) => country.alpha3Code == params.alpha3Code);
    console.log(params.alpha3Code);

    if (!country) error(404);
    
    return {
            flag: country.flag,
            name: country.name,

            nativeName: country.nativeName,
            population: new Intl.NumberFormat('en-US').format(country.population),
            region: country.region,
            subRegion: country.subregion,
            capital: country.capital,

            topLevelDomain: country.topLevelDomain,
            currencies: country.currencies?.map((currency) => currency.name).join(", "),
            languages: country.languages?.map((language) => language.name).join(", "),

            borders:country.borders,
            //country

        };
    
}