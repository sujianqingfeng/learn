import { describe, it, expect } from "vitest"

import { detectCapitalUse } from "../index"

describe("detect-capital-use", () => {
  it("1", () => {
    const word = "USA"
    const result = detectCapitalUse(word)
    expect(result).toEqual(true)
  })
})
