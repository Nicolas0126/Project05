import { useParams } from "react-router-dom";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";

// const pokeBgGradients = {
//   grass: "bg-[#22c777] rounded-sm",
//   fire: "bg-[#a80c17] rounded-sm",
//   water: "bg-[#156ec5] rounded-sm",
//   poison: "bg-[#602ab6] rounded-sm",
//   bug: "bg-[#268427] rounded-sm",
//   normal: "bg-[#91434e] rounded-sm",
//   fighting: "bg-[#ca6f35] rounded-sm",
//   ground: "bg-[#6b4025] rounded-sm",
//   fairy: "bg-black"
// }


const PokemonId = ({pokeLinearGradients, pokeBgColor}) => {
  const [pokemon, setPokemon] = useState(null);
  console.log(pokemon);

  const { pokemonName } = useParams();

  const percentProgressStat = (baseStat) => {
    const STAT_MAX = 150;
    return `${(baseStat / STAT_MAX) * 100}%`;
  };

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    axios
      .get(url)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main >
      <Header />

      <section className=" py-20">
        {/* Información detalle de Pokemon */}
        <article className="w-[280px] xs:w-[350px] sm:w-[550px] m-auto shadow-xl rounded-md  ">
          <section
            className={`h-28 ${
              pokeLinearGradients[pokemon?.types[0].type.name]
            } relative rounded-t-md`}
          >
            <div className="w-[60%] xs:w-[50%] sm:w-[30%] sm:-top-16 absolute mx-auto -top-20 left-0 right-0 bottom-0">
              <img
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt={pokemon?.name}
              />
            </div>
          </section> 
            
          <section className="capitalize grid place-content-center text-center p-3 gap-4">
            <div className="border-2 text-xl font-bold">
            <h4 className="p-2" >#{pokemon?.id}</h4>
            </div>
          </section>
            <div className="relative">
            <h2 className=" w-[50%] text-2xl m-auto sm:text-3xl capitalize text-center font-semibold before:content-[''] before:bg-slate-200 before:absolute before:w-[18%] xs:before:w-[20%] sm:before:w-[25%] before:h-[1px] before:left-3 sm:before:left-6 before:top-4 after:content-[''] after:absolute after:w-[18%] xs:after:w-[20%] sm:after:w-[25%] after:h-[1px] after:bg-slate-200 after:right-3 sm:after:right-6 after:top-4 " >{pokemon?.name}</h2>
            </div>
            
            <section className="flex justify-evenly  p-4 text-center ">
              <div>
                <h4 className="text-xs ">Weight</h4>
                <span className="font-semibold text-sm">{pokemon?.weight}</span>
              </div>

              <div>
                <h4 className="text-xs">Height</h4>
                <span className="font-semibold text-sm">{pokemon?.height}</span>
              </div>
            </section>

            <section className="grid sm:flex justify-evenly ">
              <article className={`${pokemon?.types.length > 1 ? "grid grid-rows-2 gap-3 m-5 " : " grid p-auto place-content-center gap-y-2" }  `}>
              <h2 className="text-sm col-span-2 text-center font-semibold">Type</h2> 
              {
                pokemon?.types.map((type) => (
                  <div className={`${pokeBgColor[type.type.name]} m-auto px-4 py-1 inline-flex gap-2 capitalize`} key={type.type.url}>
                   <h4 className="text-xs text-white text-center" >{type.type.name}</h4> 
                  </div>
                  
                ))
              }
            </article>

            <article className="grid  m-5 gap-3 ">
              <h2 className="text-sm col-span-2 grid text-center font-semibold">Abilities</h2>
              {
                pokemon?.abilities.map((ability) => (
                  <div className="capitalize m-auto px-4 py-1 flex gap-2 shadow-md" key={ability.ability.url}>
                    <h4 className="text-xs" >{ability.ability.name}</h4>
                  </div>
                ))
              }
            </article>
            
            </section>
           

            
          {/* stats */}

          <section className="p-2 capitalize grid gap-4 ">
            <div className="relative"> 
            <h4 className="pt-4 text-2xl font-bold block relative after:content-[''] after:absolute after:w-[54%] xs:after:w-[63%] sm:after:w-[75%] after:top-8 after:right-14 sm:after:right-16 after:h-[1px] after:bg-slate-200">Stats</h4>
            <img className="absolute top-1 w-[50px] right-1" src="/images/pokeball.png" alt="" /> 
            </div>
            <section className="grid gap-5 pb-2">
              {pokemon?.stats.map((stat) => (
                <article className="" key={stat.stat.url}>
                  <section className="flex justify-between px-2 font-bold text-sm sm:text-base">
                    <h5>{stat.stat.name}</h5>
                    <span>{stat.base_stat}/150</span>
                  </section>

                  {/* Barra de progreso de stat */}
                  <div className="bg-gray-300 h-8 rounded-md overflow-hidden">
                    <div
                      style={{ width: percentProgressStat(stat.base_stat) }}
                      className="h-full bg-yellow-500 "
                    ></div>
                  </div>
                </article>
              ))}
            </section>
          </section>
        </article>
      </section>

      <section className="w-[280px] xs:w-[350px] sm:w-[550px] m-auto shadow-xl rounded-md p-3 mb-5">
            <div className="relative"> 
            <h4 className="py-4 text-2xl font-bold block relative after:content-[''] after:absolute after:w-[22%] xs:after:w-[37%] sm:after:w-[60%] after:top-8 after:right-14 sm:after:right-16 after:h-[1px] after:bg-slate-200">Movements</h4>
            <img className="absolute top-1 w-[50px] right-1" src="/images/pokeball.png" alt="" /> 
            </div>

          <article className="flex flex-wrap gap-6">
            {
              pokemon?.moves.slice(0,26).map((move) => (
                <div key={move.move.url} className="capitalize bg-slate-300 p-2 rounded-md hover:bg-slate-600 hover:text-white hover:-translate-y-1 hover:ease-linear">
                  <h4>{move.move.name}</h4>
                </div>
              ))
            }
          </article>
        </section>
    </main>
  );
};
export default PokemonId;
