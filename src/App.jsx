import { Route, Routes } from 'react-router-dom' // se puede colocar por ejemplo routes as rutas para renombrar. 
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtectedRoutes from './components/auth/ProtectedRoutes'

const pokeLinearGradients = {
  grass: "bg-gradient-to-t from-black/80 via-[#43d2ba] to-[#22c777] ",
  fire: "bg-gradient-to-t from-black/80 via-[#c85126] to-[#a80c17]",
  water: "bg-gradient-to-t from-black/80 via-[#4da1c3] to-[#156ec5]",
  poison: "bg-gradient-to-t from-black/80 via-[#522081] to-[#602ab6]",
  bug: "bg-gradient-to-t from-black/80 via-[#268427] to-[#28c722]",
  normal: "bg-gradient-to-t from-black/80 via-[#7e4b59] to-[#91434e]",
  fighting: "bg-gradient-to-t from-black/80 via-[#b6742e] to-[#ca6f35]",
  ground: "bg-gradient-to-t from-black/80 via-[#b8753d] to-[#6b4025]",
  rock: "bg-gradient-to-t from-black/80 via-[#777573] to-[#aaa5a2]",
  ghost: "bg-gradient-to-t from-black/80 via-[#515e4f] to-[#4f684e]",
  electric: "bg-gradient-to-t from-black/80 via-[#51502b] to-[#cacd0a]",
  ice: "bg-gradient-to-t from-black/80 via-[#7cb8c8] to-[#9accd7]",
  steel: "bg-gradient-to-t from-black/80 via-[#b1b07d] to-[#868735]",
  psychic: "bg-gradient-to-t from-black/80 via-[#b39b5d] to-[#c88808]",
  dragon: "bg-gradient-to-t from-black/80 via-[#d66d70] to-[#eb6775]",
  dark: "bg-gradient-to-t from-black/80 via-[#959090] to-[#0e0d0d]",
  fairy: "bg-gradient-to-t from-black/80 via-[#b7a8b0] to-[#e0aad7]",
}

const pokeBorderGradients = {
  grass: "border-8 border-[#22c777] rounded-md",
  fire: "border-8 border-[#a80c17] rounded-md",
  water: "border-8 border-[#156ec5] rounded-md",
  poison: "border-8 border-[#602ab6] rounded-md",
  bug: "border-8 border-[#268427] rounded-md",
  normal: "border-8 border-[#91434e] rounded-md",
  fighting: "border-8 border-[#ca6f35] rounded-md",
  ground: "border-8 border-[#6b4025] rounded-md",
  rock: "border-8 border-[#aaa5a2] rounded-md",
  ghost: "border-8 border-[#4f684e] rounded-md",
  ice: "border-8 border-[#9accd7] rounded-md",
  electric: "border-8 border-[#cacd0a] rounded-md",
  steel: "border-8 border-[#868735] rounded-md",
  psychic: "border-8 border-[#c88808] rounded-md",
  dragon: "border-8 border-[#eb6775] rounded-md",
  dark: "border-8 border-[#0e0d0d] rounded-md",
  fairy: "border-8 border-[#e0aad7] rounded-md",
  
}

const pokeNameColor = {
  grass: "text-green-700",
  fire: "text-red-800",
  water: "text-blue-800",
  poison: "text-purple-800",
  bug: "text-green-800",
  normal: "text-red-900",
  fighting: "text-orange-800",
  ground:"text-amber-900",
  rock: "text-gray-500",
  ghost: "text-green-900",
  ice: "text-cyan-500",
  electric: "text-black",
  steel: "text-yellow-800",
  psychic: "text-orange-700",
  dragon: "text-red-600",
  fairy: "text-fuchsia-700",

}
const pokeBgColor = {
  grass: "bg-green-700",
  fire: "bg-red-800",
  water: "bg-blue-800",
  poison: "bg-purple-800",
  bug: "bg-green-800",
  normal: "bg-red-900",
  fighting: "bg-orange-800",
  ground:"bg-amber-900",
  rock: "bg-gray-500",
  ghost: "bg-green-900",
  ice: "bg-cyan-500",
  electric: "bg-yellow-300",
  steel: "bg-yellow-800",
  psychic: "bg-orange-700",
  dragon: "bg-red-600",
  fairy: "bg-fuchsia-700",
  flying: "bg-sky-900"

}

function App() {


  return (
    <section className='font-["Inter"]'>
      <Routes>
        
        <Route path='/' element= {<Home />}/>

        <Route element={<ProtectedRoutes />}>
        <Route path='/pokedex' element= {<Pokedex pokeLinearGradients={pokeLinearGradients} pokeBorderGradients={pokeBorderGradients} pokeNameColor={pokeNameColor}/>}/>

        <Route path='/pokedex/:pokemonName' element= {<PokemonId  pokeLinearGradients={pokeLinearGradients} pokeBgColor={pokeBgColor}/>}/>
        </Route>


      </Routes>
    </section>
  )
}

export default App
