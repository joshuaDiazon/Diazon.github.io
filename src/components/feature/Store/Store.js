import { configureStore } from "@reduxjs/toolkit"
import pokemonReducer from "../userSlice/PokemonSlice"
import FavoriteReducer from "../userSlice/FavoriteSlice";


const Store = configureStore({
    reducer:{
      pokemonData: pokemonReducer,
      favoriteList: FavoriteReducer,
      
    }
  })
  
export default Store;