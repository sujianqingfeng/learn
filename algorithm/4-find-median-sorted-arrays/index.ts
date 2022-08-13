function findMedianSortedArrays1(nums1: number[], nums2: number[]): any {
  let len1 = nums1.length
  let len2 = nums2.length

  // 保证第一个数组是最短的  是为了第二个数组的中位线两边都有值
  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1]
  }

  const len = len1 + len2

  let start = 0,
    end = len1

  let part1, part2

  // 遍历第一个数组 就能确定第一个中位线的位置 确定了第一个 第二个也能确定
  while (start <= end) {
    part1 = (start + end) >> 1
    part2 = ((len + 1) >> 1) - part1

    // 边界条件 第一个中位线左边没值 中位数就要取第二个数组的左边的中位数  所以让第一个无限小
    const L1 = part1 === 0 ? -Infinity : nums1[part1 - 1]
    // 上面同理
    const L2 = part2 === 0 ? -Infinity : nums2[part2 - 1]
    // 边界条件 第一个中位线右边没值  中位数就要取第二个数组右边的中位数 所以让当前无限大
    const R1 = part1 === len1 ? Infinity : nums1[part1]
    // 同理
    const R2 = part2 === len2 ? Infinity : nums2[part2]

    // 因为两个数组都是有序的 交叉对比就行
    // 下面两个判断就是不断的移动中位线的位置 直到满足条件
    if (L1 > R2) {
      end = part1 - 1
    } else if (L2 > R1) {
      start = part1 + 1
    } else {
      // 偶数  中位线左边最大值 + 中位线右边最小值 / 2
      // 奇数  左边最大
      return len % 2 === 0
        ? (Math.max(L1, L2) + Math.min(R1, R2)) / 2
        : Math.max(L1, L2)
    }
  }
}

export const findMedianSortedArrays = findMedianSortedArrays1
