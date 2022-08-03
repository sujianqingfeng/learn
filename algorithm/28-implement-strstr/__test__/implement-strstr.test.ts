import { describe, it, expect } from "vitest"

import { strStr } from "../index"

describe("implement-strStr", () => {
  it("1", () => {
    const haystack = "hello",
      needle = "ll"
    const result = strStr(haystack, needle)
    expect(result).toEqual(2)
  })
})
