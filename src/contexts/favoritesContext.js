// all favorites pokemons

import React from 'react'
const FavoriteContext = React.createContext({
    favoritePokemons: ["teste"],
    updateFavoritePokemons: (id) => null
});

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;