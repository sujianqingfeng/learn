import { describe, it, expect } from 'vitest'

import { getStudent, Person } from '../index'

describe('extend', () => {
  it('1', () => {
    const student = getStudent('foo', 'one')
    
    expect(student.getName()).toEqual('foo')
    student.setName('xx')
    expect(student.getName()).toEqual('xx')
    expect(student.getBook()).toEqual('one')
    expect(Object.getPrototypeOf(student)).not.toEqual(Person)
  })
})