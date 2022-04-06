

export default function deepClone(obj:any) {

	if (obj === null) return null

	if (typeof obj !== 'object') return obj
	
	const newObject = Array.isArray(obj) ? [] :{}

	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			
			if(typeof obj[key] === 'object'){
				newObject[key] = deepClone(obj[key])
			}else{
				newObject[key] = obj[key]
			}

		}
	}
	return newObject
}