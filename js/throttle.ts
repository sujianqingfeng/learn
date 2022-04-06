// 节流是一段时间内执行一次



function throttle(fun:Function,time){

  let pre = 0

  return function(){
    let  t = Date.now() - pre
    if(t >=time){
      fun.apply(this,arguments)
      pre = Date.now()
    }
  }
}