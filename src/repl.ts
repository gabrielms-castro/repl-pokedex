import { commandExit } from './commands/command_exit.js';
import { State } from './state.js';

export function cleanInput (input: string): string[] {
    const stringArray: string[] = input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");

    return stringArray
}

export async function startREPL(state: State) {
    state.readline.prompt();

    state.readline.on("line", async (input) => {
        const words = cleanInput(input);
        
        if (input.trim() === "") {
            state.readline.prompt();
        }
        
        const commandName = words[0]
        const args = words.slice(1)

        const commands = state.commands
        const command = commands[commandName];

        if (!command) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`,);
            state.readline.prompt();
            return;
        };


        try {
            await command.callback(state, ...args);
        } catch (err) {
            console.log((err as Error).message);
        }

        state.readline.prompt();
    });
}