// 537. 复数乘法
export function complexNumberMultiply(num1: string, num2: string) {
  const getComplex = (str: string) => {
    const t = str.split('+')
    return [+t[0], +t[1].replace('i', '')]
  }

  const complex1 = getComplex(num1)
  const complex2 = getComplex(num2)

  return `${complex1[0] * complex2[0] - complex1[1] * complex2[1]}+${
    complex1[0] * complex2[1] + complex1[1] * complex2[0]
  }i`
}
