export function maxArea(height: number[]) {
  let i = 0
  let j = height.length - 1

  if (j <= 0) { return -1 }

  let res = 0

  while (i < j) {
    const m = Math.min(height[i], height[j])
    res = Math.max(res, m * (j - i))

    if (height[i] > height[j]) { j-- } else { i++ }
  }

  return res
}
