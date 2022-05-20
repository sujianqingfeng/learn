import { describe, it, expect } from "vitest"

import { lenthOfLastWord } from "../index"

describe("length-of-last-word", () => {
  it("1", () => {
    const s = "   fly me   to   the moon  "
    const res = 4
    const result = lenthOfLastWord(s)
    expect(result).toEqual(res)
  })
})
