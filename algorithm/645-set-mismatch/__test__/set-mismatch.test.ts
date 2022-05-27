import { describe, it, expect } from "vitest"

import { findErrorNums } from "../index"

describe("find-error-nums", () => {
  it("1", () => {
    const nums = [3, 2, 3, 4, 6, 5]
    const res = [3, 1]
    const result = findErrorNums(nums)
    expect(result).toEqual(res)
  })
})
