import { describe, it, expect } from "vitest"

import { findUSlength } from "../index"

describe("longest-uncommon-subsequence-i", () => {
  it("1", () => {
    const a = "aba",
      b = "cdc"
    const result = findUSlength(a, b)
    expect(result).toEqual(3)
  })
})
