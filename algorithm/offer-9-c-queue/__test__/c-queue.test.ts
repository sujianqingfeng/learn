import { describe, it, expect } from 'vitest'

import { CQueue } from '../index'

describe('c-queue', () => {
  it('1', () => {

    const c =new CQueue()
    c.appendTail(1)
    c.deleteHead()
    const t = c.deleteHead()

    expect(t).toEqual(-1)
  })
})
