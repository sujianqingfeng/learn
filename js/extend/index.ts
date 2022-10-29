export function Person(name:string) {
  this.name = name
  this.setName = function(name:string) {
    this.name = name
  }
}

Person.prototype.getName = function() {
  return this.name
}

export function getStudent(name:string, book:string) {
  function Student(name:string, book:string) {
    Person.call(this, name)
    this.book = book
  }

  Student.prototype = Object.create(Person.prototype)
  Student.prototype.constructor = Student
  Student.prototype.getBook = function() {
    return this.book
  }

  const student = new (Student as any)(name, book)
  return student 
}
