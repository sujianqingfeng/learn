import { describe, it, expect } from 'vitest'

import { removeDuplicates } from '../index'

describe('remove-duplicates', () => {
  it('1', () => {
    const nums = [1, 1, 2]
    const res = 2
    const result = removeDuplicates(nums)
    expect(result).toEqual(res)
  })
})
