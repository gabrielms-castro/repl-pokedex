import { State } from "src/state";
import { styleText } from "util";

export async function commandCatch(state: State, pokemon: string) {
    console.log(`Throwing a Pokeball at ${pokemon}...`)
    const pokemonSearch = await state.api.fetchPokemon(pokemon)
    const pokemonBaseExperience = pokemonSearch.base_experience
    const catchChances = Math.floor(Math.random() * 100)
    
    if (catchChances > pokemonBaseExperience) {
        console.log(`${pokemon} was caught!`)

        if (!state.pokedex) state.pokedex = {};
        
        state.pokedex[pokemon] = pokemonSearch
    } else {
        console.log(`${pokemon} escaped!`)
    }
}