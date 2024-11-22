interface Point {
  x: number
  y: number
}

interface Pointier extends Point {
  z: number
}

export const toStringFromInterface = (point: Pointier) =>
  `(${point.x},${point.y},${point.z})`
