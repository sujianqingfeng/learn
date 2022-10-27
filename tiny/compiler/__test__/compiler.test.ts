import { expect, test } from 'vitest'
import { compiler } from '../compiler'

test('compiler', () => {
  const code = '(add 2 (subtract 4 2))'
  const result = compiler(code)

  expect(result).toMatchInlineSnapshot('"add(2, subtract(4, 2));"')
})
