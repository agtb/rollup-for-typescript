type Point = {
  x: number
  y: number
}

export const toStringFromAlias = (point: Point) => `(${point.x},${point.y})`
