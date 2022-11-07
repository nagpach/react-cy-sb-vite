import './styles.css'
import { useGetPokemonByNameQuery } from '../services/pokemon'

export const Pokemon: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="flex flex-col m-2 p-2">
          <div className="text-4xl">{data.species.name}</div>
          <img height="200px" width="200px" src={data.sprites.front_shiny} alt={data.species.name} />
        </div>
      ) : null}
    </div>
  )
}