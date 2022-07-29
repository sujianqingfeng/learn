// 482. 密钥格式化
export function licenseKeyFormatting(s: string, k: number) {
  const str = s.split("-").join("").toUpperCase()

  const mod = str.length % k

  let ans = str.substring(0, mod)

  for (let i = mod; i < str.length; i += k) {
    ans += "-" + str.substring(i, i + k)
  }

  // 为0 多一个- 所以要去掉
  if (mod === 0) ans = ans.substring(1)

  return ans
}
