import { test, expect } from "vitest"

import { reverseString } from "../index"

test("reverse-string", () => {
  const s = ["h", "e", "l", "l", "o"]
  reverseString(s)
  expect(s).toEqual(["o", "l", "l", "e", "h"])
})
