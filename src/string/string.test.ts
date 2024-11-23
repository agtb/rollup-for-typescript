import { toLowerCase, toUpperCase } from "./string"

describe("String.toLowerCase", () => {
  const expected = [
    { a: "hello world", answer: "hello world" },
    { a: "HELLO WORLD", answer: "hello world" },
    { a: "Hello World", answer: "hello world" },
  ]

  test.each(expected)(
    `Transform "$a" toLowerCase returns "$answer"`,
    ({ a, answer }) => {
      const actual = toLowerCase(a)
      expect(actual).toEqual(expect.any(String))
      expect(actual).toBe(answer)
    },
  )
})

describe("String.toUpperCase", () => {
  const expected = [
    { a: "hello world", answer: "HELLO WORLD" },
    { a: "HELLO WORLD", answer: "HELLO WORLD" },
    { a: "Hello World", answer: "HELLO WORLD" },
  ]

  test.each(expected)(
    `Transform "$a" toLowerCase returns "$answer"`,
    ({ a, answer }) => {
      const actual = toUpperCase(a)
      expect(actual).toEqual(expect.any(String))
      expect(actual).toBe(answer)
    },
  )
})
