import { toStringFromInterface } from "./interface"

describe("Alias.toStringFromInterface", () => {
  const expected = [
    { a: { x: 0, y: 0, z: 0 }, result: "(0,0,0)" },
    { a: { x: 51.4779, y: 0.0015, z: 9000 }, result: "(51.4779,0.0015,9000)" },
  ]

  test.each(expected)(
    `toStringFromInterface $a returns $result`,
    ({ a, result }) => {
      const actual = toStringFromInterface(a)
      expect(actual).toEqual(expect.any(String))
      expect(actual).toBe(result)
    },
  )
})
