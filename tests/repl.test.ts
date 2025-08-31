import { cleanInput }  from "../src/repl.js";
import { describe, expect, test } from "vitest";

describe.each   ([
    {
        input: " Hello worLd ",
        expected: ["hello", "world"],
    },
    {
        input: " hello world     ",
        expected: ["hello", "world"],
    },
    {
        input: "word",
        expected: ["word"],
    },
    {
        input: "   the book is on the table  ",
        expected: ["the", "book", "is", "on", "the", "table"],
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);

        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i])
        }
    })
})