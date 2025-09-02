import { State } from "src/state";

export async function commandInspect(state: State, pokemonName: string) {
    const pokedexRecords = state.pokedex
    if (!pokedexRecords) {
        throw new Error("You didn't caught any pokemon yet.");
    }
    
    const pokemonData = pokedexRecords[pokemonName]
    if (!pokemonData) {
        throw new Error("You didn't caught this Pokemon yet. Go get it!\n");
    }
    
    console.log(`Name: ${pokemonData.name}`);
    console.log(`Height: ${pokemonData.height}`);
    console.log(`Weight: ${pokemonData.weight}`);
    
    console.log(`Stats: `)
    pokemonData.stats.forEach((stats) => console.log(` -${stats.stat.name}: ${stats.base_stat}`));
    
    console.log(`Types: `);
    pokemonData.types.forEach((types) => console.log(` -${types.type.name}`));
    console.log()
}