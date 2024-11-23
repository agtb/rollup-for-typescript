import { toStringFromAlias } from "./alias"

describe("Alias.toStringFromAlias", () => {
  const expected = [
    { a: { x: 0, y: 0 }, result: "(0,0)" },
    { a: { x: 51.4779, y: 0.0015 }, result: "(51.4779,0.0015)" },
  ]

  test.each(expected)(
    `toStringFromAlias $a returns $result`,
    ({ a, result }) => {
      const actual = toStringFromAlias(a)
      expect(actual).toEqual(expect.any(String))
      expect(actual).toBe(result)
    },
  )
})
