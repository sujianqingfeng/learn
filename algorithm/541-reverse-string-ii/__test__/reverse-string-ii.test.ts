import { describe, it, expect } from "vitest"

import { reverseStr } from "../index"

describe.only("reverse-str-ii", () => {
  it("1", () => {
    const s = "abcdefg",
      k = 2
    const result = "bacdfeg"
    const res = reverseStr(s, k)
    expect(result).toEqual(res)
  })

  it("2", () => {
    const s = "abcd",
      k = 2
    const result = "bacd"
    const res = reverseStr(s, k)
    expect(result).toEqual(res)
  })

  it("3", () => {
    const s = "abcd",
      k = 3
    const result = "cbad"
    const res = reverseStr(s, k)
    expect(result).toEqual(res)
  })

  it("4", () => {
    const s = "abcdefg",
      k = 1
    const result = "abcdefg"
    const res = reverseStr(s, k)
    expect(result).toEqual(res)
  })
})
