// Registry of commands. Gives abstraction for managing commands

import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (commands: Record<string, CLICommand>) => void;
}

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exists the Pokedex REPL",
            callback: commandExit
        },
        help: {
            name: "help",
            description: "Display a help message",
            callback: commandHelp
        }
        // add more commands here in the future
    }
}   