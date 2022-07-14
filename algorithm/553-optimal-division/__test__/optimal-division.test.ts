import { describe, it, expect } from "vitest"

import { optimalDivision } from "../index"

describe("optimal-division", () => {
  it("1", () => {
    const nums = [1000, 100, 10, 2]
    const result = optimalDivision(nums)
    expect(result).toEqual("1000/(100/10/2)")
  })
})
