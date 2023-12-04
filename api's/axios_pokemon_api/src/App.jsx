import { useState } from 'react';
import axios from 'axios';
import './App.css'


function App() {
  const [pokemon, setPokemon] = useState([])

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(response => {
        console.log(response)
        setPokemon(response.data.results)
      })
      .catch(error => console.log(error))
  };
  
  return (
    <>
      <h1>Pokemon Api</h1>
      <button onClick={() => axiosPokemon()}>Axios Fetch Pokemon</button>
        {
          pokemon.map((poke) => {
            return (
              <li key={poke.name}>{poke.name}</li>
              );
          })
        }
    </>
  )
}

export default App
