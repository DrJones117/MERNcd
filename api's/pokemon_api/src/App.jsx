import { useState } from 'react'
import './App.css'


function App() {
  const [pokemon, setPokemon] = useState([])
  
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.")
      .then((result) => {
        return result.json();
      })
      .then((parsedResult) => {
        console.log(parsedResult);
        setPokemon(parsedResult.results);
      })
      .catch(err => console.log(err));
  }
  
  return (
    <>
      <h1>Pokemon Api</h1>
      <button onClick={() => fetchPokemon()}>Fetch Pokemon</button>
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
