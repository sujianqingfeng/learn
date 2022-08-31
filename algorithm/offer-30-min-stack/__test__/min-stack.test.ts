import { describe, it, expect } from 'vitest'
import { MinStack } from '..'

describe('min-stack', () => {
  it('1', () => {
    const minStack = new MinStack()

    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    expect(minStack.min()).toEqual(-3)
    minStack.pop()
    expect(minStack.top()).toEqual(0)
    expect(minStack.min()).toEqual(-2)
  })
})
