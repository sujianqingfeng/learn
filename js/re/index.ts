
export const findMatchPhoneIndex = (str:string, match: string) => {
  const splits = match.split('')
  const space= '\\s{0,1}'
  let reStr = splits.join(space)
  reStr = space +reStr+ space
  const matches= str.match(new RegExp(reStr))
  if (matches?.length) {
    return matches.index
  }
  return -1
}