import { describe, it, expect } from "vitest"

import { isPalindrome } from "../index"

describe("valid-palindrome", () => {
  it("1", () => {
    const s = "A man, a plan, a canal: Panama"
    const res = true
    const result = isPalindrome(s)
    expect(result).toEqual(res)
  })
})
