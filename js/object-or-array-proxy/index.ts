export const createObjectOrArrayProxy = (isOk:boolean, data:any) => {
  const firstMatchKeys = ['isOk', '0']
  const secondMatchKeys = ['result', 'data', '1']
  const handler= {
    get: function(target: any, p: string, receiver:any) {
      if (firstMatchKeys.includes(p)) {
        return isOk
      }
      if (secondMatchKeys.includes(p)) {
        return data
      }

      return Reflect.get(target, p, receiver)
    }
  }

  return new Proxy([isOk, data], handler)
} 
