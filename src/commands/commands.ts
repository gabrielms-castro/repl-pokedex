// Registry of commands. Gives abstraction for managing commands

import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { CLICommand } from "../state.js";


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
        },

        map: {
            name: "map",
            description: "Displays the name of the 20 subsequent location areas",
            callback: commandMap
        },

        mapb: {
            name: "mapb",
            description: "Displays the name of the 20 previous location areas",
            callback: commandMapBack
        },

        
        // add more commands here in the future
    }
}   