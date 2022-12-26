import { describe, test, expect } from 'vitest'
import { produce } from '..'

describe('immer', () => {

  test('happy-path', () => {

    const base = {
      a: 1,
      b: 2
    }

    const result = produce(base, (draft) => {
      draft.a = 2
    })

    expect(result).toMatchInlineSnapshot(`
      {
        "a": 2,
        "b": 2,
      }
    `)
  })

})