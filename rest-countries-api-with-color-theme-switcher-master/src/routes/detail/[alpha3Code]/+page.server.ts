import countries from '$lib/data/data.json';
import {error} from '@sveltejs/kit';

function find_country_by_alpha3Code(alpha3Code:string){
    return countries.find((country) => country.alpha3Code == alpha3Code);
}

export function load({params}){
    const country = find_country_by_alpha3Code(params.alpha3Code)

    if (!country) error(404);
    
    let borders = [];
    if (country.borders){
        for(const border of country.borders){
            // console.log(border);
            let c = find_country_by_alpha3Code(border);
            if (c){
                borders.push({name:c.name, alpha3Code: border});
            }
        }
    }
    //console.log(borders);    

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

            borders: borders,

        };
    
}