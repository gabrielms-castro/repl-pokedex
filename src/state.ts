import { createInterface, Interface } from "readline";
import { getCommands } from "./commands/commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from "./types/pokemon.js";
import { StdioNull } from "child_process";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
}

export type State = {   
    readline: Interface;
    commands: Record<string, CLICommand>;
    api: PokeAPI;
    nextLocationsURL: string | null;
    previousLocationsURL: string | null;
    pokedex: Record<string, Pokemon> | null
}

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    })
    
    return {
        readline: rl,
        commands: getCommands(),
        api: new PokeAPI(),
        nextLocationsURL: null,
        previousLocationsURL: null,
        pokedex: null,
    }
}