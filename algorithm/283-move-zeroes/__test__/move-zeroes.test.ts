import { describe, it, expect } from "vitest"

import { moveZeroes } from "../index"

describe("move-zeroes", () => {
  it("1", () => {
    const nums = [0, 1, 0, 3, 12]
    const res = [1, 3, 12, 0, 0]
    const result = moveZeroes(nums)
    expect(result).toEqual(res)
  })
})
