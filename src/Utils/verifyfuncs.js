export const verifyLength = (min, max) => {
	return function(ret){
		return ret.length >= min && ret.length <= max
	}
}
export const verifyPhone = (ret) => {
	return ret.match(window.validPhone)
}
export const verifyAge = (ret) => {
	if (!ret.match(/^\d{2,3}$/)) {return false}
	var age = Number.parseInt(ret)
	if (age < 18 || age > 100) {
		return false
	}
	return true
}
export const verifyPercent = (ret) => {
	var percent = Number.parseFloat(ret)
	if (percent === NaN) {
		return false
	} else {
		return percent >= 0 && percent <= 100
	}
}
export const verifyMoney = (ret) => {
	if(!ret.match(/^\d+$/)) {
		return false
	}
	var money = Number.parseInt(ret)
	return money <= 9999999999
}