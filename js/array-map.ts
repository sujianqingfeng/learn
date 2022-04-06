function map(fun, thisArgs) {
  const length = this.length

  let index = 0
  const newArray = new Array(length)

  const original = this

  while (index < length) {
    const current = original[index]
    newArray[index] = fun.call(thisArgs, current, index, original)
    index++
  }

  return newArray
}

export default map
