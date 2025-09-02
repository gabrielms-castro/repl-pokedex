// Registry of commands. Gives abstraction for managing commands

import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { CLICommand } from "../state.js";
import { commandInspect } from "./command_inspect.js";


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

        explore: {
            name: "explore",
            description: "Displays a list of all Pokemon in a given area",
            callback: commandExplore
        },

        catch: {
            name: "catch",
            description: "Try to catch a Pokemon",
            callback: commandCatch
        },

        inspect: {
            name: "catch",
            description: "Informs a Pokemon name, height, stats and type(s) if you have it in your Pokedex",
            callback: commandInspect
        }
        // add more commands here in the future
    }
}   