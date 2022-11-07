import { describe, it, expect } from 'vitest'
import { combinationSum } from '../index'

describe('combination-sum', () => {
  it('one', () => {
    const candidates = [2, 3, 6, 7], target = 7
    const result = combinationSum(candidates, target)
    expect(result).toMatchInlineSnapshot(`
      [
        [
          7,
        ],
        [
          2,
          2,
          3,
        ],
      ]
    `)
  })
})
