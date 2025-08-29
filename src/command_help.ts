import { State } from "./state.js";

export function commandHelp(state: State) {
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();

    for (const commandName of Object.values(state.commands)) {
        console.log(`${commandName.name}: ${commandName.description}`);
    }
}