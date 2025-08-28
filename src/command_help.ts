import { CLICommand, getCommands } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();

    for (const commandName of Object.values(commands)) {
        console.log(`${commandName.name}: ${commandName.description}`);
    }
}