import { describe, it, expect } from 'vitest'

import { Person } from '../index'

describe('prototype', () => {
  it('1', () => {
    
    const person = new Person('John')
    const person2 = person.clone()

    expect(person.speak('hi')).toMatchInlineSnapshot('"John--hi"')
    expect(person2.speak('hi')).toMatchInlineSnapshot('"John--hi"')

    person2.changeName('Jane')
    expect(person.speak('hi')).toMatchInlineSnapshot('"John--hi"')
    expect(person2.speak('hi')).toMatchInlineSnapshot('"Jane--hi"')
  })
})
