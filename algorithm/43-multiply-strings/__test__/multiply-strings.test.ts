import { describe, it, expect } from 'vitest'

import { multiply } from '../index'

describe('multiply-strings', () => {
  it('1', () => {
    const num1 = '123',
      num2 = '456'
    const result = multiply(num1, num2)

    expect(result).toEqual('56088')
  })

  it('2', () => {
    const num1 = '9',
      num2 = '9'
    const result = multiply(num1, num2)

    expect(result).toEqual('81')
  })
})
