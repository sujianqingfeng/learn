export function produce<T extends object>(base:T, recipe:(draft:T)=>void) {
  let copy:any 
  const baseHandler = {
    set(target:T, p: string, value:any) {
      if (!copy) {
        copy = { ...base }
      }
      copy[p] = value
      return true
    }
  }

  const draft = new Proxy<T>(base, baseHandler)
  recipe(draft)
  return Object.freeze(copy || base)
}