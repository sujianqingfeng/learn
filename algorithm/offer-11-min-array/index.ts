// 剑指 Offer 11. 旋转数组的最小数字
export function minArray(numbers:number[]) {

  let l = 0, r = numbers.length -1 

  while (l<r) {
    const mid = ~~((l+r) / 2)
    // 右边找
    if (numbers[mid] > numbers[r]) {
      l = mid + 1
    } else if (numbers[mid] < numbers[r]) { 
      r = mid
    } else {
      r--
    }
    
  }
  return numbers[l]
}
