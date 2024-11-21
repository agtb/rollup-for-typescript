import { add, subtract } from "./math"

describe("Math.add", () => {
  it("Add 0 and 0 returns 0", () => {
    expect(add(0, 0)).toBe(0)
  })

  it("Add 1 and 1 returns 2", () => {
    expect(add(1, 1)).toBe(2)
  })
})

describe("Math.subtract", () => {
  it("Subtract 0 and 0 returns 0", () => {
    expect(subtract(0, 0)).toBe(0)
  })

  it("Subtract 1 and 1 returns 2", () => {
    expect(subtract(1, 1)).toBe(0)
  })
})
