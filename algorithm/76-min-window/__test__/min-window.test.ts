import { describe, it, expect } from "vitest"

import { minWindow } from "../index"

describe("min-window", () => {
  it("1", () => {
    const s = "ADOBECODEBANC",
      t = "ABC"
    const res = "BANC"
    const result = minWindow(s, t)
    expect(result).toEqual(res)
  })
})
