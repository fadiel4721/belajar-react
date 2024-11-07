import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemonDetail } from '../redux/Reducer';

export default function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detail: pokemon, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, [dispatch, id]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-red-500 text-center text-xl">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 flex justify-center">
      {pokemon && (
        <div className="card lg:card-side bg-sky-800 text-white shadow-xl max-w-md">
          <figure>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-32 h-32 object-contain m-4"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-sky-800 text-center">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
            <p><strong>Number:</strong> {pokemon.id}</p>
            <p><strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(", ")}</p>
            <p><strong>Max CP:</strong> {pokemon.stats[0]?.base_stat}</p>
            <p><strong>Stats:</strong></p>
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
            <div className="card-actions justify-between">
              <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
              <button className="btn btn-primary">Catch {pokemon.name}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
