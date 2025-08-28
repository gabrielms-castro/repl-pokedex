import { createInterface } from 'node:readline';
import { getCommands } from './command.js';

export function cleanInput (input: string): string[] {
    const stringArray: string[] = input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");

    return stringArray
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    })
    
    rl.prompt();

    rl.on("line", async (input) => {
        
        const words = cleanInput(input);
        
        if (input.trim() === "") {
            rl.prompt();
        }
        
        const commandName = words[0]
        const commands = getCommands()
        const command = commands[commandName];

        if (!command) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`,);
            rl.prompt();
            return;
        };


        try {
            command.callback(commands);
        } catch (err) {
            console.log(err);
        }

        rl.prompt();
    });
}