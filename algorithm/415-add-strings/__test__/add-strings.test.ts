import { describe, it, expect } from 'vitest'

import { addString } from '../index'

describe('add-strings', () => {
  it('1', () => {
    const num1 = '456',
      num2 = '77'
    const result = addString(num1, num2)
    expect(result).toEqual('533')
  })

  it('2', () => {
    const num1 = '1',
      num2 = '9'
    const result = addString(num1, num2)
    expect(result).toEqual('10')
  })
})
