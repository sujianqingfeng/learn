// 剑指 Offer 17. 打印从1到最大的n位数
export function printNumbers(n:number) {

  const max = Math.pow(10, n)

  const ans = []
  for (let i = 1; i < max; i++) {
    ans.push(i)
  }

  return ans
}