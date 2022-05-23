import { describe, it, expect } from "vitest"

import { findMaxConsecutiveOnes } from "../index"

describe("find-max-consecutive-ones", () => {
  it("1", () => {
    const nums = [1, 1, 0, 1, 1, 1]
    const res = 3
    const result = findMaxConsecutiveOnes(nums)
    expect(result).toEqual(res)
  })
})
