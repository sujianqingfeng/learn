import { describe, expect, test } from 'vitest'
import { curry } from '..'

describe('curry', () => {
  test('1', () => {
    const testFn = (a:number, b:number, c:number) => {
      return a+b+c
    }
    const testCurry =  curry(testFn)

    const result = testCurry(1)(2)(3)
    expect(result).toEqual(6)
  })
})