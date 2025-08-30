import { State } from "./state.js";

export async function commandMap(state: State) {
    try {
        const response = await state.api.fetchLocations(state.nextLocationsURL) // if not null, will pass the URL saved in current State

        // for next calls
        state.nextLocationsURL = response.next

        response.results.forEach((results) => console.log(results.name))
        console.log()

    } catch (err) {
        console.log(`Error fetching location-areas: ${err}`)
    }
}

export async function commandMapBack(state: State) {
    try {
        const response = await state.api.fetchLocations(state.previousLocationsURL)
        
        state.previousLocationsURL = response.previous
        
        response.results.forEach((results) => console.log(results.name))
        console.log()

    } catch (err) {
        console.log(`Error fetching location-areas: ${err}`)
    }
}

