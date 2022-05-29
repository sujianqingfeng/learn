import { describe, it, expect } from "vitest"

import { findDisappearedNumbers } from "../index"

describe("third-max", () => {
  it("1", () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1]
    const res = [5, 6]
    const result = findDisappearedNumbers(nums)
    expect(result).toEqual(res)
  })
})
