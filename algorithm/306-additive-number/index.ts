// 306. 累加数
export function isAdditiveNumber(num: string) {
  const n = num.length

  const dps = (index: number, count: number, prePre: number, pre: number) => {
    if (index >= n) {
      return count > 2
    }

    let current = 0
    for (let i = index; i < n; i++) {
      const cC = +num[i]

      // 0 不能作为前导数 但是可以作为本身
      if (num[index] === '0' && i > index) {
        return false
      }

      current = current * 10 + cC

      // 获取到两个值才比较
      if (count >= 2) {
        const sum = prePre + pre

        // 第三个值 大于 前两个 直接放弃
        if (current > sum) {
          return false
        }
        if (current < sum) {
          // 小于则继续进行添加位数

          continue
        }
      }

      // 满足条件 或者 少于 2个值
      if (dps(i + 1, count + 1, pre, current)) {
        return true
      }
    }

    return false
  }

  return dps(0, 0, 0, 0)
}
