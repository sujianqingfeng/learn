import { describe, it, expect } from "vitest"

import { findDiagonalOrder } from "../index"

describe("diagonal-traverse", () => {
  it("1", () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const res = [1, 2, 4, 7, 5, 3, 6, 8, 9]
    const result = findDiagonalOrder(mat)
    expect(result).toEqual(res)
  })
})
