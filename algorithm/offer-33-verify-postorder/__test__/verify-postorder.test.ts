import { describe, it, expect } from 'vitest'
import { verifyPostorder } from '..'

describe('verify-postorder', () => {
  it('1', () => {
    const postorder = [1, 6, 3, 2, 5]
    const result = verifyPostorder(postorder) 
    expect(result).toEqual(false)
  })

  it('2', () => {
    const postorder = [1, 3, 2, 6, 5]
    const result = verifyPostorder(postorder) 
    expect(result).toEqual(true)
  })
})

