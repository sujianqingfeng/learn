function map(
  fun: (c: any, i?: any, o?: any) => any,
  thisArgs: any
) {
  const length = this.length

  let index = 0
  const newArray = new Array(length)

  const self = this

  while (index < length) {
    const current = self[index]
    newArray[index] = fun.call(thisArgs, current, index, self)
    index++
  }

  return newArray
}

export default map
