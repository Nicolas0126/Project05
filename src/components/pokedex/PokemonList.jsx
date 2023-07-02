import PokemonCard from "./PokemonCard"

const PokemonList = ({pokemons, pokemonInPage, pokeLinearGradients, pokeBorderGradients, pokeNameColor}) => {
  return (
    <section className="grid gap-6 mx-auto capitalize grid-cols-[repeat(auto-fill,280px)] xs:grid-cols-[repeat(auto-fill,300px)] max-w-[1024px] justify-center my-5">
        {
            pokemonInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl = {pokemon.url} pokeLinearGradients={pokeLinearGradients} pokeBorderGradients={pokeBorderGradients} pokeNameColor={pokeNameColor}/>)
        }
    </section>
  )
}
export default PokemonList