import { describe, it, expect } from "vitest"

import { countBattleships } from "../index"

describe("battleships-in-a-board", () => {
  it("1", () => {
    const board = [
      ["X", ".", ".", "X"],
      [".", ".", ".", "X"],
      [".", ".", ".", "X"],
    ]
    const res = 2
    const result = countBattleships(board)
    expect(result).toEqual(res)
  })
})
