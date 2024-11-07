import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './Reducer';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
