import { and, nand } from "./boolean"

describe("Boolean.and", () => {
  const expected = [
    { a: false, b: false, result: false },
    { a: false, b: true, result: false },
    { a: true, b: false, result: false },
    { a: true, b: true, result: true },
  ]

  test.each(expected)(`AND $a + $b returns $result`, ({ a, b, result }) => {
    const actual = and(a, b)
    expect(actual).toEqual(expect.any(Boolean))
    expect(actual).toBe(result)
  })
})

describe("Boolean.nand", () => {
  const expected = [
    { a: false, b: false, result: true },
    { a: false, b: true, result: true },
    { a: true, b: false, result: true },
    { a: true, b: true, result: false },
  ]

  test.each(expected)(`NAND $a + $b returns $result`, ({ a, b, result }) => {
    const actual = nand(a, b)
    expect(actual).toEqual(expect.any(Boolean))
    expect(actual).toBe(result)
  })
})
