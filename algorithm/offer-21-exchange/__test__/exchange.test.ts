import { describe, it, expect } from 'vitest'

import { exchange } from '../index'

describe('exchange', () => {
  it('1', () => {
    const nums = [1, 2, 3, 4]

    exchange(nums) 
    expect(nums).toMatchInlineSnapshot(`
      [
        1,
        3,
        2,
        4,
      ]
    `)
  })
})
