var name = 'name1'

console.log(name)
if(true){
  // 不是函数  直接对全局作用域造成影响
  var name = "name2"
  console.log(name)
}
console.log(name)






var aa = 'aa'

console.log(aa)
function test(){
  var aa = 'aa1'
  console.log(aa)
}

// 函数AO 里面存在 aa 变量
test()

console.log(aa)
