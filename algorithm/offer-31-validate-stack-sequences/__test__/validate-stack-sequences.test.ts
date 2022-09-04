import { describe, it, expect } from 'vitest'
import { validateStackSequences } from '..'

describe('validate-stack-sequences', () => {
  it('1', () => {
    const pushed = [1, 2, 3, 4, 5], popped = [4, 5, 3, 2, 1]
    const result = validateStackSequences(pushed, popped)
    expect(result).toEqual(true)
  })
})
