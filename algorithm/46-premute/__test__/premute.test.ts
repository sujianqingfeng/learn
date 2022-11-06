import { describe, it, expect } from 'vitest'

import { permute } from '../index'

describe('permute ', () => {
  it('1', () => {
    const nums = [1, 2, 3]
    const result = permute(nums)
    expect(result).toMatchInlineSnapshot(`
      [
        [
          1,
          2,
          3,
        ],
        [
          1,
          3,
          2,
        ],
        [
          2,
          1,
          3,
        ],
        [
          2,
          3,
          1,
        ],
        [
          3,
          2,
          1,
        ],
        [
          3,
          1,
          2,
        ],
      ]
    `)
  })
})
