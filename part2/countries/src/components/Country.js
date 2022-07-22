import axios from 'axios'
import { useEffect, useState } from 'react'

const Country = ({country}) => {
    let [weather, setWeather] = useState(null)
    useEffect(()=> {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(response => {
                setWeather(response.data)
            })
    }, [])
    const languages = []
    if(country.languages){
        for (const [key, value] of Object.entries(country.languages)) {
            languages.push(<li key={key}>{value}</li>)
        }
    }

    return (
    <div>
        <h3>{country.name.official}</h3>
        <span>Capital {country.capital && country.capital.length > 0 && country.capital.join(',')}</span>
        <br/>
        <span>area {country.area}</span>
        <h5>Languages:</h5>
        <ul>{languages}</ul>
        <img src={country.flags.png} alt={`flag of ${country.name.official}`} />

        { weather ? 
        (<div>
            <h3>Weather in {country.name.official}</h3>
            <p>temperature {weather.main.temp} Celcius</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`weather in ${country.name.official}`}></img>
            <p>wind {weather.wind.speed} m/s</p>
        </div>
        ) :<></>}
    </div>
    )
}

export default Country;