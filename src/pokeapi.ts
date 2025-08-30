import { Location } from "./types/location.js"
import { ShallowLocations } from "./types/shallow_locations.js"

export class PokeAPI {
    private static baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        /* 
            first call will bring the first 20 location-areas
            we'll be using pageURL argument to call next/previous 20 locations
        */ 
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area` 
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
        });
        if (!response.ok) {
            throw new Error(`Error fetching locations: ${response.status} ${response.statusText}`);
        }
        const result: ShallowLocations = await response.json();
        return result
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location/${locationName}`;
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
        });
        if (!response.ok) {
            throw new Error(`Error fetching ${locationName} location: ${response.status} ${response.statusText}`)
        }
        const result: Location = await response.json()
        return result;
    }
}