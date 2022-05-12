import { describe, it, expect } from "vitest"

import { searchInsert } from "../index"

describe("search-insert-position", () => {
  it("1", () => {
    const nums = [1, 3, 5, 6],
      target = 2
    const res = 1
    const result = searchInsert(nums, target)
    expect(result).toEqual(res)
  })
})
