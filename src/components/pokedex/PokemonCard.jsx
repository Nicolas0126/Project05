import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './pokemonCard.css'



const PokemonCard = ({pokemonUrl, pokeLinearGradients, pokeBorderGradients, pokeNameColor}) => {

  const [pokemon, setPokemon] = useState(null)

  const formatTypesPokemon = (types = []) => {
    const nameTypes = types.map((type) => type.type.name)
    const titleTypes = nameTypes.join(" / ")
    return titleTypes
  }

  useEffect(() => {
    axios.get(pokemonUrl) 
      .then(({data}) => setPokemon(data))
      .catch((err) => console.log(err))
  }, [])
  
  return (
    <section className={`${pokeBorderGradients[pokemon?.types[0].type.name]}`}>
        <Link className="" to={`/pokedex/${pokemon?.name}`} >
      {/* Sección superior */}
      <section className={`relative h-40 ${pokeLinearGradients[pokemon?.types[0].type.name]}`}>

        <div className="absolute border- px-12 -bottom-14">
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
        </div>

      </section>
      {/* Parte inferior */}
      <section className='m-auto text-center'>
      <h3 className={`mt-14 font-bold text-2xl ${pokeNameColor[pokemon?.types[0].type.name]}`}>{pokemon?.name}</h3>
      <h5 className="font-semibold">{formatTypesPokemon(pokemon?.types)}</h5>
      <span className="text-sm text-slate-500">Type</span>

      <hr className="w-[90%] m-auto" />

      <section className="grid grid-cols-2 gap-4 p-2">
        {/* Generar la lista de stats */}
        {
          pokemon?.stats.slice(0, 4).map((stat) => (
            <div key={stat.stat.url}>
              <h6 className="text-slate-500">{stat.stat.name}</h6>
              <span className={`${pokeNameColor[pokemon?.types[0].type.name]} font-bold`}>{stat.base_stat}</span>
            </div>
          ))
        }
      </section>
    </section>
    </Link>
  </section>
  )
}

export default PokemonCard