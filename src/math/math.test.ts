import { add, subtract } from "./math"

describe("Math.add", () => {
  const expected = [
    { a: 0, b: 0, result: 0 },
    { a: 1, b: 1, result: 2 },
    { a: -1, b: -1, result: -2 },
  ]

  test.each(expected)(`Add $a + $b returns $result`, ({ a, b, result }) => {
    const actual = add(a, b)
    expect(actual).toEqual(expect.any(Number))
    expect(actual).toBe(result)
  })
})

describe("Math.subtract", () => {
  const expected = [
    { a: 0, b: 0, result: 0 },
    { a: 1, b: 1, result: 0 },
    { a: -1, b: -1, result: 0 },
  ]

  test.each(expected)(
    `Subtract $a - $b returns $result`,
    ({ a, b, result }) => {
      const actual = subtract(a, b)
      expect(actual).toEqual(expect.any(Number))
      expect(actual).toBe(result)
    },
  )
})
