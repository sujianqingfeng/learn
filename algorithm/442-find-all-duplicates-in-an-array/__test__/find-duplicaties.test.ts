import { describe, it, expect } from "vitest"

import { findDuplicates } from "../index"

describe("find-duplicates", () => {
  it("1", () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1]
    const res = [2, 3]
    const result = findDuplicates(nums)
    expect(result).toEqual(res)
  })

  it("2", () => {
    const nums = [1, 1, 2]
    const res = [1]
    const result = findDuplicates(nums)
    expect(result).toEqual(res)
  })
})
