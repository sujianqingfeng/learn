
export function intToRoman(num:number) {

  const thousand = ['', 'M', 'MM', 'MMM']
  const hundred = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  const bits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

  const t = ~~(num / 1000)
  const h = ~~(num % 1000 / 100)
  const te = ~~(num % 100 / 10)
  const b = num % 10

  // console.log(t,h,te,b);

  let res = ''
  res += thousand[t]
  res += hundred[h]
  res += tens[te]
  res += bits[b]

  return res
}

