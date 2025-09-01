import { State }  from "../state.js"

export async function commandExplore(state: State): Promise<void> {
    const locationName = "canalave-city-area"
    console.log(`Exploring ${locationName}...`)
    const location = await state.api.fetchLocation(locationName);
    console.log("Found Pokemon:")

    location.pokemon_encounters.forEach(
        (item) => console.log(` - ${item.pokemon.name}`)
    )
}