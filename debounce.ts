// 防抖是在事件结束后一段时间后执行

function debounce(fun: Function, time) {
	let timer = null

	return function () {
		timer && clearTimeout(timer)

		timer = setTimeout(() => {
			fun.apply(this, arguments)
		}, time)
	}
}
