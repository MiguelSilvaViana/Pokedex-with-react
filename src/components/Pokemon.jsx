import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";


const Pokemon = (props) => {
    const { pokemons } = props;

    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)

    const onHeartClick = () => {
        updateFavoritePokemons(pokemons.name)
    }

    const heart = favoritePokemons.includes(pokemons.name) ? "❤️" : "🖤";

    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img
                    src={pokemons.sprites.front_default}
                    alt={pokemons.name}
                    className="pokemon-img"
                />
            </div>
            <div className="card-body">

                <div className="card-top">
                    <h3>{pokemons.name}</h3>
                    <div>#{pokemons.id}</div>
                </div>

                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemons.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>

                    <button className="pokemon-heart-btn" onClick={onHeartClick}>{heart}</button>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
