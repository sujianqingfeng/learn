import { describe, it, expect } from "vitest"

import { countSubstring } from "../index"

describe("palindromic-substrings", () => {
  it("1", () => {
    const s = "abc"
    const result = countSubstring(s)
    expect(result).toEqual(3)
  })
})
