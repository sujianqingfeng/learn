// 535. TinyURL 的加密与解密
const STR = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
const K = 6
const PREFIX = 'https://tinyurl.com/'
const originToShort = new Map()
const shortToOrigin = new Map()
const getKey = (n: number) => {
  const temp = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    const r = ~~(Math.random() * STR.length)
    temp[i] = STR[r]
  }
  return temp.join('')
}

export function encode(url: string) {
  if (originToShort.has(url)) {
    return PREFIX + originToShort.get(url)
  }
  // 这里的key有可能重复
  const key = getKey(K)
  const shortUrl = PREFIX + key

  originToShort.set(url, shortUrl)
  shortToOrigin.set(shortUrl, url)
  return shortUrl
}

export function decode(shortUrl: string) {
  return shortToOrigin.get(shortUrl)
}
