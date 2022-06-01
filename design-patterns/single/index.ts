interface Foo {
  name: string
}

interface FooConstructor {
  new (name: string): Foo
  prototype: Foo
}

const foo = function (this: Foo, name: string) {
  this.name = name
} as unknown as FooConstructor

export const ProxyFooSingle = (function () {
  let instance: Foo | null = null

  return function (name: string) {
    if (!instance) {
      return (instance = new foo(name))
    }

    return instance
  }
})()
