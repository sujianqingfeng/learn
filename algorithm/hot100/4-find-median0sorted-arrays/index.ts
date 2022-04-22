function findMedianSortedArrays1(nums1: number[], nums2: number[]): any {
  let len1 = nums1.length;
  let len2 = nums2.length;

  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1];
  }

  const len = len1 + len2;

  let start = 0,
    end = len1;

  let part1, part2;

  while (start <= end) {
    part1 = (start + end) >> 1;
    part2 = ((len + 1) >> 1) - part1;

    const L1 = part1 === 0 ? -Infinity : nums1[part1 - 1];
    const L2 = part2 === 0 ? -Infinity : nums2[part2 - 1];
    const R1 = part1 === len1 ? Infinity : nums1[part1];
    const R2 = part2 === len2 ? Infinity : nums2[part2];

    if (L1 > R2) {
      end = part1 - 1;
    } else if (L2 > R1) {
      start = part1 + 1;
    } else {
      return len % 2 === 0
        ? (Math.max(L1, L2) + Math.min(R1, R2)) / 2
        : Math.max(L1, L2);
    }
  }
}

export const findMedianSortedArrays = findMedianSortedArrays1;
