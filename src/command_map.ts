import { stat } from "fs";
import { State } from "./state.js";

export async function commandMap(state: State) {
    const response = await state.api.fetchLocations(state.nextLocationsURL) // if not null, will pass the URL saved in current State

    // for next calls
    state.nextLocationsURL = response.next
    state.previousLocationsURL = response.previous

    response.results.forEach((results) => console.log(results.name))
    console.log()
}

export async function commandMapBack(state: State) {
    if (!state.previousLocationsURL) {
        throw new Error("you're on the first page");
    }

    const response = await state.api.fetchLocations(state.previousLocationsURL)
    
    state.nextLocationsURL = response.next
    state.previousLocationsURL = response.previous

    response.results.forEach((results) => console.log(results.name))
    console.log()
}

