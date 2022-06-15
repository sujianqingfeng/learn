import { describe, it, expect } from "vitest"

import { gameOfLife } from "../index"

describe("game-of-life", () => {
  it("1", () => {
    const board = [
      [1, 1],
      [1, 0],
    ]
    const res = [
      [1, 1],
      [1, 1],
    ]
    const result = gameOfLife(board)
    expect(result).toEqual(res)
  })
})
