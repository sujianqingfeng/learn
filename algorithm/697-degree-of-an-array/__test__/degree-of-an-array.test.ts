import { describe, it, expect } from "vitest"

import { findShortestSubArray } from "../index"

describe("find-shortest-sub-array", () => {
  it("1", () => {
    const nums = [1, 2, 2, 3, 1, 4, 2]
    const res = 6
    const result = findShortestSubArray(nums)
    expect(result).toEqual(res)
  })

  it("2", () => {
    const nums = [1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2]
    const res = 9
    const result = findShortestSubArray(nums)
    expect(result).toEqual(res)
  })
})
