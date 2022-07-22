import { describe, it, expect } from "vitest"

import { findLongestWord } from "../index"

describe("longest-word-in-dictionary-through-deleting", () => {
  it("1", () => {
    const s = "abpcplea",
      dictionary = ["ale", "apple", "monkey", "plea"]
    const result = findLongestWord(s, dictionary)
    expect(result).toEqual("apple")
  })
})
