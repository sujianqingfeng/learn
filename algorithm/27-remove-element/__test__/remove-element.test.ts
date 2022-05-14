import { describe, it, expect } from "vitest"

import { removeElement } from "../index"

describe("remove-element", () => {
  it("1", () => {
    const nums = [3, 2, 2, 3],
      val = 3
    const res = 2
    const result = removeElement(nums, val)
    expect(result).toEqual(res)
  })
})
