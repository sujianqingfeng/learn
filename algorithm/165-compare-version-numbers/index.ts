// 165. 比较版本号
export function compareVersion(version1: string, version2: string) {
  const n = version1.length
  const m = version2.length

  let i = 0,
    j = 0

  const zeroCode = '0'.charCodeAt(0)

  while (i < n || j < m) {
    let x = 0
    for (; i < n && version1[i] !== '.'; i++) {
      x = x * 10 + version1[i].charCodeAt(0) - zeroCode
    }
    i++

    let y = 0
    for (; j < m && version2[j] !== '.'; j++) {
      y = y * 10 + version2[j].charCodeAt(0) - zeroCode
    }
    j++
    if (x !== y) {
      return x > y ? 1 : -1
    }
  }
  return 0
}
