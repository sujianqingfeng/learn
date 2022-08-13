import { describe, it, expect } from 'vitest'

import { findMinDifference } from '../index'

describe('minimum-time-difference', () => {
  it('1', () => {
    const timePoints = ['23:59', '00:00']
    const result = findMinDifference(timePoints)
    expect(result).toEqual(1)
  })
})
