import React, {useState} from 'react'


import {searchPokemon} from '../api'

const Searchbar = () => {

    const [search, setSearch] = useState('charizard')
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
      }


    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input type="text"  placeholder='Pokemon Search' onChange={onChangeHandler}/>
                <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Search</button>
                </div>
            </div>
            {pokemon ? (
                <div>
                    <div>Name: {pokemon.name}</div>
                    <div>Weight: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : null}
        </div>
    )
}

export default Searchbar;