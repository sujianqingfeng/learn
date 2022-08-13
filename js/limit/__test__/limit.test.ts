import { describe, it, expect } from 'vitest'

import { createLimitAll } from '../index'

describe('limit', () => {
  it('resolve', async () => {
    const { addTask, run } = createLimitAll(5)
    const excepts: any = []

    const createTask = (i: number) => {
      excepts.push(i)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(i)
        }, 1000)
      })
    }

    for (let i = 0; i < 10; i++) {
      addTask(() => createTask(i))
    }

    const res = await run()

    expect(res).toMatchInlineSnapshot(`
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
      ]
    `)
  })
})
