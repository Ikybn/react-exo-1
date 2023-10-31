import { useState, useEffect } from 'react';
import RegionSelector from './RegionSelector';
import CountryCard from './CountryCard';

function App() {
  // Liste des pays
  const [countries, setCountries] = useState([])
  // Liste des regions
  const [region, setRegion] = useState("Europe")

// API restcountries
useEffect(()=> {
  // eslint-disable-next-line 
  fetch('https://restcountries.com/v3.1/region/${region}')
  .then((response) => response.json()) // Converti les données en JSON
  .then((data) => setCountries(data))
}, [region])

return (
  <div className="App">
      <header>
          <h1>Countrix</h1>
          <RegionSelector onChange={setRegion}/>
          </header>
      <div className="countries">
          {countries.map((country) => (
              <CountryCard key={country.cca2} country={country} />
          ))}
      </div>
  </div>
)
}


export default App

