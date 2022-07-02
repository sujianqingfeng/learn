import { describe, it, expect } from "vitest"

import { groupAnagrams } from "../index"

describe("group-anagrams", () => {
  it("1", () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    const result = groupAnagrams(strs)
    expect(result).toMatchInlineSnapshot(`
      [
        [
          "eat",
          "tea",
          "ate",
        ],
        [
          "tan",
          "nat",
        ],
        [
          "bat",
        ],
      ]
    `)
  })
})
