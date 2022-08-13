import { describe, it, expect } from 'vitest'

import { findPoisonedDuration } from '../index'

describe('find-max-consecutive-ones', () => {
  it('1', () => {
    const timeSeries = [1, 4],
      duration = 2
    const res = 4
    const result = findPoisonedDuration(timeSeries, duration)
    expect(result).toEqual(res)
  })
})
