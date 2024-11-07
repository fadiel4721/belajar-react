import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching Pokémon list data
export const fetchPokemonData = createAsyncThunk(
  'pokemon/fetchPokemonData',
  async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
    const pokemonDetails = await Promise.all(
      data.results.map(async (poke) => {
        const pokeResponse = await fetch(poke.url);
        return pokeResponse.json();
      })
    );
    return pokemonDetails;
  }
);

// Async thunk for fetching individual Pokémon details
export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonDetail',
  async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.json();
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: [],
    detail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.loading = false;
      })
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
