import { useSelector } from "react-redux"
import Header from "../components/pokedex/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import PokemonList from "../components/pokedex/PokemonList"

const Pokedex = ({pokeLinearGradients, pokeBorderGradients, pokeNameColor}) => {
// Array de pokemons antes de filtrar
  const [pokemons, setPokemons] = useState([])

  // String para filtrar los pokemons por nombre
  const [namePokemon, setNamePokemon] = useState("")

  // Arreglo de tipos de pokemons posibles
  const [types, setTypes] = useState([])

  // String de tipo de pokemon actual, cambia de acuerdo al select
  const [currentType, setCurrentType] = useState("")

  // Página actual
  const [currentPage, setCurrentPage] = useState(1)
  
  // Estado global donde se almacena el nombre de usuario
  const nameTrainer = useSelector(store => store.nameTrainer)

  const pokemonsByName = pokemons.filter((pokemon) => pokemon.name.includes(namePokemon.toLowerCase().trim())) // filter genera un arreglo que cumpla con la condición, .trim quita los espacios al inicio y final.

  const handleSubmit = (e) => {
    e.preventDefault()
    setNamePokemon(e.target.namePokemon.value)
  }

  const handleChangeType = (e) => {
    setCurrentType(e.target.value);
  }

  const paginationLogic = () => {
    //Cantidad de pokemons por página
    const POKEMONS_PER_PAGE = 12

    // Pokemons que se van a mostrar en la página actual
    const sliceStart = (currentPage - 1) * POKEMONS_PER_PAGE
    const sliceEnd = sliceStart + POKEMONS_PER_PAGE
    const pokemonInPage = pokemonsByName.slice(sliceStart, sliceEnd)

    // Última página
    const lastPage = Math.ceil(pokemonsByName.length / POKEMONS_PER_PAGE) || 1

    // Bloque actual 
    const PAGES_PER_BLOCK = 8
    const actualBlock = Math.ceil( currentPage / PAGES_PER_BLOCK)

    // Páginas que se van a mostrar en el bloque actual
    const pagesInBlock = []
    const minPage = (actualBlock - 1) * PAGES_PER_BLOCK + 1
    const maxPage = actualBlock * PAGES_PER_BLOCK
    for ( let i = minPage; i <= maxPage; i++) {
      if( i <= lastPage) {
        pagesInBlock.push(i)
      }
    }

    return {
      pokemonInPage,
      lastPage,
      pagesInBlock
    }
  }

  const {lastPage, pagesInBlock, pokemonInPage} = paginationLogic()
  
  const handleClickFirstPage = () => {
    setCurrentPage(1)
  }

  const handleClickLastPage = () => {
    setCurrentPage(lastPage)
  }

  const handleClickPreviousPage = () => {
    if(currentPage > 1) {
       setCurrentPage(currentPage - 1)
    }
  }

  const handleClickNextPage = () => {
    if(currentPage < lastPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    if(!currentType) { // "!currentType es igual al string All (línea 72)"
      const url= "https://pokeapi.co/api/v2/pokemon?limit=1281"
  
      axios.get(url)
        .then(({data}) => setPokemons(data.results)) 
        .catch((err) => console.log(err))
    }
  }, [currentType])

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type"

    axios.get(url)
      .then(({data}) => setTypes(data.results))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if(currentType) {
      const url = `https://pokeapi.co/api/v2/type/${currentType}/`
  
      axios.get(url)
        .then(({data}) => {
          console.log(data) // el map es porque el formato de este url es diferente al de pokemons y al momento de que PokemonList lo lea no encontrará el dato.
          const pokemonsByType = data.pokemon.map(pokemon => pokemon.pokemon)
          setPokemons(pokemonsByType)
        })
        .catch((err) => console.log(err))
    }
  }, [currentType])

  useEffect(() => {
    setCurrentPage(1)
  }, [namePokemon])

  return (
    <main>
      <Header />
      <p className="pt-10 pb-6 px-4 text-center text-xl sm:text-xl md:text-2xl"><span className="text-red-500 font-bold capitalize ">Welcome {nameTrainer}!</span> Check out your favorite Pokemon here.</p>

      <form className="grid gap-3 px-3 justify-center sm:flex" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <input className="shadow-sm shadow-black/60 px-2" id="namePokemon" placeholder="Type a name of Pokemon..." type="text" />
          <button className="bg-red-500 p-2 text-white shadow-sm shadow-black/60">Search</button>
        </div>

        <select className="w-[150px] px-2 py-1 capitalize shadow-sm shadow-black" onChange={handleChangeType}>
          <option value="">All</option>
          {
            types.map((type) => <option value={type.name} key={type.url}>{type.name}</option>)
          }
        </select>
      </form>

      {/* Paginación */}
      <ul className="flex gap-2 justify-center pt-8 px-2 flex-wrap">

        {/* Página anterior */}
        <li  onClick={handleClickFirstPage} className="p-3 bg-black font-bold text-white rounded-md cursor-pointer"><i className='bx bx-chevrons-left'></i></li>
        <li onClick={handleClickPreviousPage} className="p-3 bg-black font-bold text-white rounded-md cursor-pointer"><i className='bx bx-chevron-left'></i></li>

        {/* Lista de páginas */}
        {
          pagesInBlock.map(numberPage => <li onClick={() => setCurrentPage(numberPage)} className={`px-4 py-3 font-bold rounded-md cursor-pointer ${numberPage === currentPage && "bg-red-500 text-white"}`} key={numberPage}>{numberPage}</li>)
        }

        {/* Página siguiente */}
        <li onClick={handleClickNextPage} className="p-3 bg-black font-bold text-white rounded-md cursor-pointer"><i className='bx bx-chevron-right' ></i></li>
        <li onClick={handleClickLastPage} className="p-3 bg-black font-bold text-white rounded-md cursor-pointer"><i className='bx bx-chevrons-right' ></i></li>
      </ul>

      <PokemonList pokeLinearGradients={pokeLinearGradients} pokemons={pokemonsByName} pokemonInPage = {pokemonInPage} pokeBorderGradients={pokeBorderGradients} pokeNameColor={pokeNameColor}/>
    </main>
  )
}
export default Pokedex