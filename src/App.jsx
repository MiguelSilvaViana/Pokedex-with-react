import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Pokedex from './components/Pokedex'
import {getPokemons, getPokemonData} from './api'


function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);


  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises); // result the all promises
      setPokemons(results)
      setLoading(false)
    } catch (error) {
      console.log("fetchPokemons error", error)
    }
  }

  useEffect(() => {
    console.log('carregou use')
    fetchPokemons();
  }, [])

  return (
    <div>
     <Navbar />
     <Searchbar/>
     <Pokedex pokemons={pokemons} loading={loading}/>
    </div>
  )
}

export default App
