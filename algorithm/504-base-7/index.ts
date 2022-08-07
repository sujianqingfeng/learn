// 504. 七进制数
export function convertToBase7(num: number) {
  const flag = num >= 0 ? true : false
  num = Math.abs(num)
  let ans = ""

  while (num / 7 >= 1) {
    ans = (num % 7) + ans
    num = Math.floor(num / 7)
  }
  ans = num + ans
  return flag ? ans : "-" + ans
}
