import Country from "./Country";
import CountryDisplay from "./CountryDisplay";

const CountriesDisplay = ({countries}) => {
    let countriesDisplay;

    if(countries.length === 1) {
        countriesDisplay = <Country country={countries[0]}/>
    }
    else if(countries.length > 10) {
        countriesDisplay =  <p>Too many matches, specify another filter</p> 
    }
    else {
        countriesDisplay = countries.map(country => <CountryDisplay key={country.name.official} country={country}/>)
    }
    return (
        countriesDisplay
    )
}
export default CountriesDisplay;