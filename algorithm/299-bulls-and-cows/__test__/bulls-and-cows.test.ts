import { test, expect } from 'vitest'

import { getHint } from '../index'

test('bulls-and-cows', () => {
  const secret = '1807',
    guess = '7810'
  const result = getHint(secret, guess)
  expect(result).toEqual('1A3B')
})
