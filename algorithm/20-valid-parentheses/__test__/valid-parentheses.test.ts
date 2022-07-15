import { describe, it, expect } from "vitest"

import { isValid } from "../index"

describe("valid-parentheses", () => {
  it("1", () => {
    const s = "()[]{}"
    const res = true
    const result = isValid(s)
    expect(result).toEqual(res)
  })
})
