import { State } from './state.js';

export function cleanInput (input: string): string[] {
    const stringArray: string[] = input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");

    return stringArray
}

export function startREPL(state: State) {
    state.readline.prompt();

    state.readline.on("line", async (input) => {
        const words = cleanInput(input);
        
        if (input.trim() === "") {
            state.readline.prompt();
        }
        
        const commandName = words[0]
        const commands = state.commands
        const command = commands[commandName];

        if (!command) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`,);
            state.readline.prompt();
            return;
        };


        try {
            command.callback(state);
        } catch (err) {
            console.log(err);
        }

        state.readline.prompt();
    });
}