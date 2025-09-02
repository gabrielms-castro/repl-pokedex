import { State }  from "../state.js"

export async function commandExplore(state: State, areaExplore: string): Promise<void> {
    console.log(`Exploring ${areaExplore}...`)
    const location = await state.api.fetchLocation(areaExplore);

    console.log("Found Pokemon:")
    location.pokemon_encounters.forEach(
        (item) => console.log(` - ${item.pokemon.name}`)
    )
    console.log()
}