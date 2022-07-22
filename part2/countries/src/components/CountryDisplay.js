import Country from "./Country"
import { useState } from "react"

const CountryDisplay = ({country}) => {
    const [showCountry, setShowCountry] = useState(false)

    const handleShowCountry = () => {
        setShowCountry(true);
    }

    return (
        <div>
            <p>{country.name.official} <button onClick={handleShowCountry}>show</   button></p>
            {showCountry? <Country country={country}/> : (<></>)}
        </div>
    )
}

export default CountryDisplay;