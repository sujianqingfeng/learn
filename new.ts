

function n(fun:Function,...arg:any[]){

  function F(){}

  F.prototype = fun.prototype

  const obj = new F()


 const res= fun.apply(obj,arg)

  
 return res instanceof Object ?res:obj
}