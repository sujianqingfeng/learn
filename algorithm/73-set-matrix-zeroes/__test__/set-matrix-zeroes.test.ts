import { describe, it, expect } from "vitest"

import { setZeroes } from "../index"

describe("set-matrix-zeroes", () => {
  it("1", () => {
    const matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ]
    const res = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]
    setZeroes(matrix)
    expect(matrix).toEqual(res)
  })
})
