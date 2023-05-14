export function curry(func:(...rest:any)=>any, arity = func.length) {
  function generateCurried(args:any[]) {
    return function(arg:any) {
      const newArgs = [...args, arg]
      if (newArgs.length>= arity) {
        return func(...newArgs)
      } else {
        return generateCurried(newArgs)
      }
    }
  }
  return generateCurried([])
}