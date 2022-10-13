import { describe, it, expect } from 'vitest'

import { merge } from '../index'

describe('merge-intervals', () => {
  it('1', () => {
    const intervals =  [[1, 3], [2, 6], [8, 10], [15, 18]]

    const result = merge(intervals) 

    expect(result).toEqual([[1, 6], [8, 10], [15, 18]])
  })
})
