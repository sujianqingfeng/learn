import { describe, it, expect } from 'vitest'

import { ProxyFooSingle } from '../index'

describe('single', () => {
  it('1', () => {
    const foo1 = ProxyFooSingle('foo')

    // 有过实例不会在创建
    const foo2 = ProxyFooSingle('foo2')

    expect(foo1.name).toBe('foo')
    expect(foo2.name).toBe('foo')
  })
})
