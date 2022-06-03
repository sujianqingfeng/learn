import { describe, it, expect } from "vitest"

import { checkPossibility } from "../index"

describe("check-possibility", () => {
  it("1", () => {
    const nums = [4, 2, 3]
    const res = true
    const result = checkPossibility(nums)
    expect(result).toEqual(res)
  })
})
