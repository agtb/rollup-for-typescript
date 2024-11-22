import { and, nand } from "./boolean/index.js"
import { add, subtract } from "./math/index.js"
import { toLowerCase, toUpperCase } from "./string/index.js"
import { toStringFromAlias, toStringFromInterface } from "./object/index.js"

const x = 22
const y = 11

console.log(`${x} + ${y} = ${add(x, y)}`)
console.log(`${x} - ${y} = ${subtract(x, y)}`)

console.log(toLowerCase("HELLO WORLD"))
console.log(toUpperCase("hello world"))

console.log(and(true, true))
console.log(nand(false, false))

console.log(toStringFromAlias({ x: 0, y: 180 }))
console.log(toStringFromInterface({ x: 180, y: 0, z: 1 }))
