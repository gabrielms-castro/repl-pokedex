import { Cache } from "../src/pokecache.js";
import { describe, expect, test } from "vitest";

test.concurrent.each([
    {
        key: "https://www.example.com",
        val: "testdata",
        interval: 500,
    },
    {
        key: "https://www.example.com/path",
        val: "moretestdata",
        interval: 1500,
    }
])("Test Caching $interval ms", async ({ key, val, interval }) => {
    const cache = new Cache(interval);
    cache.add(key, val);
    const cached = cache.get(key);
    expect(cached).toBe(val);

    await new Promise((resolve) => setTimeout(resolve, interval + 100));
    const reaped = cache.get(key);
    expect(reaped).toBe(undefined)
});