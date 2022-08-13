import { describe, it, expect } from 'vitest'

import { imageSmoother } from '../index'

describe('image-smoother', () => {
  it('1', () => {
    const img = [
      [100, 200, 100],
      [200, 50, 200],
      [100, 200, 100],
    ]
    const res = [
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137],
    ]
    const result = imageSmoother(img)
    expect(result).toEqual(res)
  })
})
