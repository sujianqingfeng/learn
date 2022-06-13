import { describe, it, expect } from "vitest"

import { matrixReshape } from "../index"

describe("reshape-the-matrix", () => {
  it("1", () => {
    const mat = [
        [1, 2],
        [3, 4],
      ],
      r = 1,
      c = 4
    const res = [[1, 2, 3, 4]]
    const result = matrixReshape(mat, r, c)
    expect(result).toEqual(res)
  })
})
