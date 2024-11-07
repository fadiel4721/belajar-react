import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonData } from '../redux/Reducer';
import { Link } from 'react-router-dom';

export default function Pokemon() {
  const dispatch = useDispatch();
  const { data: pokemon, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonData());
  }, [dispatch]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-red-500 text-center text-xl">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 bg-sky">
      <h1 className="text-2xl font-bold text-center mb-4 text-white-800">Pokémon List</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemon.map((poke) => (
          <div key={poke.name} className="card shadow-xl bg-sky-500">
            <figure>
              <img
                src={poke.sprites.front_default}
                alt={poke.name}
                className="w-32 h-32 mx-auto my-2"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </h2>
              <Link
                to={`/pokemon/${poke.id}`}
                className="btn border-none bg-red-800 text-blue"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
