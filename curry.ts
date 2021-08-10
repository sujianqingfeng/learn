function curry1() {
	let args = [].slice.call(arguments, 1)
	const fn = arguments[0]

	return function () {
		let newArgs = args.concat([].slice.call(arguments))
		return fn.apply(this, newArgs)
	}
}

function curry(fn) {
	const jump = (...arg) => {
		return fn.length === arg.length ? fn(...arg) : (args) => jump(...arg, ...args)
	}

	return jump
}
