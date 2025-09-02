import { LocationByName } from "./types/location.js"
import { ShallowLocations } from "./types/shallow_locations.js"
import { Cache } from "./pokecache.js"
import { Pokemon } from "./types/pokemon.js";

export class PokeAPI {
    private static baseURL = "https://pokeapi.co/api/v2";
    cache = new Cache(120000)

    constructor() {
    }

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        /* 
            first call will bring the first 20 location-areas
            we'll be using pageURL argument to call next/previous 20 locations
        */ 
       const url = pageURL ?? `${PokeAPI.baseURL}/location-area` 
       
       try {
            // Return the cache result if it exists
            const hit = this.cache.get<ShallowLocations>(url);
            if (hit) return hit;

            const response = await fetch(url, {
                method: "GET",
                mode: "cors",
            });

            if (!response.ok) {
                throw new Error(`Error fetching locations: ${response.status} ${response.statusText}`);
            }

            const result: ShallowLocations = await response.json();

            // store the result in the cache
            this.cache.add(url, result);

            return result;        

       } catch (err) {
        throw new Error(`Error fetching locations: ${(err as Error).message}`);    
       }
    }

    async fetchLocation(locationName: string): Promise<LocationByName> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        
        try {
            // return the cached location if it exists/stored
            const hit = this.cache.get<LocationByName>(url);
            if (hit) return hit;
    
            const response = await fetch(url, {
                method: "GET",
                mode: "cors",
            });
    
            if (!response.ok) {
                throw new Error(`Error fetching ${locationName} location: ${response.status} - ${response.statusText}`);
            }
    
            const result: LocationByName = await response.json();
    
            // store the result in the cache
            this.cache.add(url, result);
    
            return result;
        } catch (err) {
            throw new Error(`Error fetching location '${locationName}': ${(err as Error).message}`)
        }
    }

    async fetchPokemon(pokemonName: string) : Promise<Pokemon> {
        const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`
        
        try {
            const hit = this.cache.get<Pokemon>(url);
            if (hit) return hit;

            const response = await fetch(url, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error(`Error fetching Pokemon '${pokemonName}': ${response.status} - ${response.statusText}`)
            }

            const result = await response.json()

            this.cache.add(url, result)

            return result;

        } catch (err) {
            throw new Error(`Error fetching Pokemon '${pokemonName}': ${(err as Error).message}`)
        }
    }
}