import { describe, it, expect } from "vitest"

import { search } from "../index"

describe("binary-search", () => {
  it("1", () => {
    const nums = [-1, 0, 3, 5, 9, 12],
      target = 9
    const res = 4
    const result = search(nums, target)
    expect(result).toEqual(res)
  })

  it("2", () => {
    const nums = [-1, 0, 3, 5, 9, 12],
      target = 2
    const res = -1
    const result = search(nums, target)
    expect(result).toEqual(res)
  })
})
