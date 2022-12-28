import React from 'react'
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const Pokedex = (props) => {

    const {pokemons, loading, page, totalPages, setPage} = props;

    const onNextClickHandler = () => {
        if(page+1 !== totalPages) {
            setPage(page + 1)
        }
    }


    const onPrevoiusClickHandler = () => {
        if(page > 0) {
            setPage(page - 1)
        }
    }

    return (
        <div>
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <Pagination 
                page={page+1} 
                totalPages={totalPages}
                onNextClick={onNextClickHandler}
                onPrevoiusClick={onPrevoiusClickHandler}
                />
            </div>

            {loading ? (<div>Loading...</div>) : (
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemons={pokemon}/>
                        )
                    })}
                </div>
            )}

        </div>
    )
}

export default Pokedex;