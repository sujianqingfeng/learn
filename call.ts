Function.prototype.newCall = function() {
	const args = Array.from(arguments)
	const context = args.shift() || window
	context.fn = this
	const result = context.fn(...args)
	delete context.fn
	return result
}




function f( a:number,b:number){
 console.log(a+b)
 console.log(this.name)
}
let obj={
 name:1
}
f.newCall(obj,1,2) //否则this指向window

