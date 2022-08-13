import { describe, test, expect } from 'vitest'

import map from '..'

describe('array map', () => {
  test('test array', () => {
    const array = [1, 2]
    const newArray = map.call(array, (item: any) => item + 1)
    expect(newArray).toEqual([2, 3])
  })
})
