export type CacheEntry<T> = {
    createdAt: number;
    val: T
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;
    
    constructor(interval: number) {
        this.#interval = interval
        this.#startReapLoop()
    }

    #reap(): void {
        for (const [key, value] of this.#cache) {
            if (value.createdAt < Date.now() - this.#interval) {
                this.#cache.delete(key)
            }
        }
    }

    #startReapLoop(): void {
        const intervalID = setInterval(() => this.#reap(), this.#interval)
        this.#reapIntervalId = intervalID
    }

    stopReapLoop(): void {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId)
            this.#reapIntervalId = undefined
        }
        
    }

    add<T>(key: string, val: T): void {
        const entry: CacheEntry<T> = {
            createdAt: Date.now(),
            val: val
        };

        this.#cache.set(key, entry);
    }

    get<T>(key: string): T | undefined{
        return this.#cache.get(key)?.val
    }
}