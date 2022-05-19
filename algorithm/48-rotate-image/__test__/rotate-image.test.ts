import { describe, it, expect } from "vitest"

import { rotate } from "../index"

describe("rotate", () => {
  it("1", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const res = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]
    const result = rotate(matrix)

    expect(result).toEqual(res)
  })
})
