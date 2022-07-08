import { describe, it, expect } from "vitest"

import { encode, decode } from "../index"

describe("encode-and-decode", () => {
  it("1", () => {
    const url = "https://leetcode.com/problems/design-tinyurl"
    const shortUrl = encode(url)
    const originUrl = decode(shortUrl)
    expect(originUrl).toEqual(url)
  })
})
