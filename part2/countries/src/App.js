import {useEffect, useState} from 'react'
import axios from 'axios'
import CountriesDisplay from './components/CountriesDisplay'

function App() {
  let [countries, setCountries] = useState([])
  let [filterName, setFilterName] = useState('')

  useEffect(()=> {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data)
    })
  })

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  let filteredCountry = countries.filter(country => country.name.official.toUpperCase().indexOf(filterName.toUpperCase()) > -1)


  return (
    <div>
      <div>find countries <input value={filterName} onChange={handleFilterChange}/></div>
      <CountriesDisplay countries={filteredCountry}/>
    </div>
  );
}

export default App;
