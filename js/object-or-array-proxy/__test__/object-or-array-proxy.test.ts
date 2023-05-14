import { describe, expect, test } from 'vitest'
import { createObjectOrArrayProxy } from '..'

describe('object-or-array', () => {
  test('1', () => {
    const result = createObjectOrArrayProxy(true, { a: 1 })
    expect(result.isOk).toEqual(true)
    expect(result[0]).toEqual(true)
  })

  test('2', async () => {
    const fn = () => new Promise<any>((resolve) => {
      resolve(createObjectOrArrayProxy(false, 1))
    })

    fn().then((res) => {
      expect(res.isOk).toBeFalsy()
      expect(res[0]).toBeFalsy()
    })
  })

  test('3', async () => {
    const fn = () => new Promise<any>((resolve) => {
      resolve(createObjectOrArrayProxy(true, 1))
    })

    const res = await fn()
    const [isOk] = res
    const { isOk: isNewOk } = res
    expect(isOk).toBeTruthy()
    expect(isNewOk).toBeTruthy()
  })
})