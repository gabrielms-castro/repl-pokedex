import { createInterface } from 'node:readline';
export function cleanInput (input: string): string[] {
    const stringArray: string[] = input.toLowerCase().trim().split(" ");
    return stringArray
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    })

    rl.prompt()
    rl.on("line", (input) => {
        if (input.trim() === "") {
            rl.prompt();
        }
        const words = cleanInput(input);
        console.log(`Your command was: ${words[0]}`);
        rl.prompt();
    })

}