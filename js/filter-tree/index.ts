export type BadgeTree = {
  num:number
  link:string
  children?: BadgeTree[]
}

const filterLink  = (link:string, re:string | string[]) => {
  const match = (re:string) => new RegExp(re).test(link)
  if (typeof re ==='string') {
    return match(re)
  }
  return re.some(match)
}

export function filterTree(original:BadgeTree, whiteRegList:(string| string[])[], index = 0) {
  const ans: BadgeTree = {
    num: 0,
    link: original.link,
    children: []
  }

  const nextLayerRe = whiteRegList[index+1]

  if (!nextLayerRe) {
    ans.num = original.num
    return ans
  }

  const { children } = original
  if (children) {
    const finalChildren = children.filter(child => {
      return filterLink(child.link, nextLayerRe)
    })

    const total = finalChildren.reduce((pre, cur) => {
      return pre+cur.num
    }, 0)

    ans.num = total

    if (finalChildren.length) {
      ans.children = finalChildren.map(child => {
        return filterTree(child, whiteRegList, index+1)
      })
    }
  }
  return ans
}