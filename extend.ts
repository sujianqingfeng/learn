function Animal(name) {
  this.name = name
}

// function Dog(name) {}

// Dog.prototype = new Animal("dog")
// Dog.prototype.constructor = Dog

//2

// function Dog(name) {
//   Animal.call(this, name)
// }

// const dog = new Dog("dog")

// console.log(dog)

// function object(obj) {
//   function F() {}

//   F.prototype = obj
//   return new F()
// }

// const obj = {
//   name: "white-letter",
// }

// const a = object(obj)

// console.log(a)

// a.name = "name"
// console.log(a)

const a = [1, 2]

let O = Object(a)

console.log(O)

let len = O.length >>> 0

console.log(len)
