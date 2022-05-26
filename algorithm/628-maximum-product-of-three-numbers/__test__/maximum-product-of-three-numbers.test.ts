import { describe, it, expect } from "vitest"

import { maximumProduct } from "../index"

describe("maximum-product", () => {
  it("1", () => {
    const nums = [1, 2, 3]
    const res = 6
    const result = maximumProduct(nums)
    expect(result).toEqual(res)
  })
})
