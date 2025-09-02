import { State } from "src/state";

export async function commandPokedex(state: State) {
    const pokedexRecords = state.pokedex
    if (!pokedexRecords) {
        throw new Error("There are no records in your Pokédex.")
    } else {
        console.log("Your Pokedex:")
        for (const element in pokedexRecords) {
            console.log(` - ${element}`)
        }
    }
    console.log()
}