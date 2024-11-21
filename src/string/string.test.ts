import { toLowerCase, toUpperCase } from "./string"

describe("String.toLowerCase", () => {
  it('Transform "hello world" returns "hello world"', () => {
    expect(toLowerCase("hello world")).toBe("hello world")
  })

  it('Transform "HELLO WORLD" returns "hello world"', () => {
    expect(toLowerCase("HELLO WORLD")).toBe("hello world")
  })

  it('Transform "Hello World" returns "hello world"', () => {
    expect(toLowerCase("Hello World")).toBe("hello world")
  })
})

describe("String.toUpperCase", () => {
  it('Transform "HELLO WORLD" returns "hello world"', () => {
    expect(toUpperCase("HELLO WORLD")).toBe("HELLO WORLD")
  })

  it('Transform "hello world" returns "hello world"', () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD")
  })

  it('Transform "Hello World" returns "hello world"', () => {
    expect(toUpperCase("Hello World")).toBe("HELLO WORLD")
  })
})
