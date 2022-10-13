export class Person {
  name

  constructor(name:string) {
    this.name = name
  }

  changeName(name:string) {
    this.name = name
  }

  speak(msg:string) {
    return `${this.name}--${msg}` 
  }

  clone():this {
    return Object.create(this)
  }
}