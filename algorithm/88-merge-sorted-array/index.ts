// 88. 合并两个有序数组
export function merge(nums1: number[], m: number, nums2: number[], n: number) {
  let tail = m + n - 1
  let p1 = m - 1,
    p2 = n - 1

  let current = 0
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      current = nums2[p2--]
    } else if (p2 === -1) {
      current = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      current = nums1[p1--]
    } else {
      current = nums2[p2--]
    }

    nums1[tail--] = current
  }
}
