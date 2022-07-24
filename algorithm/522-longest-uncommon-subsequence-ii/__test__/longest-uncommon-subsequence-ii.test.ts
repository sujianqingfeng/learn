import { describe, it, expect } from "vitest"

import { findUSlength } from "../index"

describe("longest-word-in-dictionary-through-deleting", () => {
  it("1", () => {
    const strs = ["aba", "cdc", "eae"]
    const result = findUSlength(strs)
    expect(result).toEqual(3)
  })

  it("2", () => {
    const strs = ["aabbcc", "aabbcc", "bc", "bcc", "aabbccc"]
    const result = findUSlength(strs)
    expect(result).toEqual(7)
  })

  it("3", () => {
    const strs = ["abcabc", "abcabc", "abcabc", "abc", "abc", "cca"]
    const result = findUSlength(strs)
    expect(result).toEqual(3)
  })
})
