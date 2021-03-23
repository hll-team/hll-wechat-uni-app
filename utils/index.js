export function parseTime(time, cFormat) {
	if (arguments.length === 0) {
		return null
	}
	const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if (('' + time).length === 10) time = parseInt(time) * 1000
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === 'a') {
			return ['日', '一', '二', '三', '四', '五', '六'][value]
		}
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value || 0
	})
	return time_str
}

/**
 * 
 * @param dateNow :Date类
 * @param intervalDays ：间隔天数
 * @param bolPastTime  ：Boolean,判断在参数date之前，还是之后，
 */
export function getDateRange(dateNow, intervalDays, bolPastTime) {
	let oneDayTime = 24 * 60 * 60 * 1000;
	let list = [];
	let lastDay;

	if (bolPastTime == true) {
		lastDay = new Date(dateNow.getTime() - intervalDays * oneDayTime);
		list.push(formateDate(lastDay));
		list.push(formateDate(dateNow));
	} else {
		lastDay = new Date(dateNow.getTime() + intervalDays * oneDayTime);
		list.push(formateDate(dateNow));
		list.push(formateDate(lastDay));
	}
	return list;
}
export function formateDate(time) {
	let year = time.getFullYear()
	let month = time.getMonth() + 1
	let day = time.getDate()

	if (month < 10) {
		month = '0' + month
	}

	if (day < 10) {
		day = '0' + day
	}

	return year + '-' + month + '-' + day + ''

}
/**
 * 人性化时间处理 传入时间戳
 */
export function formatTime(time) {
	// 当前时间
	    let nowTime = new Date();
	    let year = nowTime.getFullYear();
	    let month = nowTime.getMonth() + 1;
	    let day = nowTime.getDate();
	    let hours = parseInt(nowTime.getHours());
	    let minutes = nowTime.getMinutes();
	    // 传来time 2018-05-25 18:14:02 分解
	    let timeyear = time.substring(0, 4);
	    let timemonth = time.substring(5, 7);
	    let timeday = time.substring(8, 10);
	    let timehours = parseInt(time.substring(11, 13));
	    let timeminutes = time.substring(14, 16);
	    let timesecond = time.substring(17, 19);
	    let d_year = year - timeyear;
	    let d_month = Math.abs(month - timemonth);
	    let d_day = Math.abs(day - timeday);
	    let d_hours = Math.abs(hours - timehours);
	    let d_minutes = Math.abs(minutes - timeminutes);
	    if (d_day > 1) {
	      return timeyear + '-' + timemonth + '-' + timeday + '\n' + timehours + ':' + timeminutes + ':' + timesecond;
	    } else if (d_day == 0 && d_hours > 0 && d_hours <= 24) {
	      return d_hours + '小时前';
	    } else if (d_day == 1) {
	      if (d_hours > 0 && d_hours <= 24){
	        return hours + (24 - timehours) + '小时前';
	      }else{
	        return timeyear + '-' + timemonth + '-' + timeday + '\n' + timehours + ':' + timeminutes + ':' + timesecond;
	      }
	    } else if (d_minutes > 0 && d_minutes <= 60) {
	      return d_minutes + '分钟前';
	    } else {
	      return '1分钟前';
	    }
}
export function
formatMoenyNumber(num) {
	var ret = {}

	if (num >= 100000000) {
		ret.num = Math.round((num / 100000000) * 100) / 100
		ret.unit = '亿元'
	} else if (num >= 10000) {
		ret.num = Math.round((num / 10000) * 100) / 100
		ret.unit = '万元'
	} else if (num > 0) {
		ret.num = num
		ret.unit = '元'
	} else if (num < 0) {
		//  负数
		var num2 = 0 - num
		if (num2 >= 100000000) {
			ret.num = 0 - Math.round((num2 / 100000000) * 100) / 100
			ret.unit = '亿元'
		} else if (num2 >= 10000) {
			ret.num = 0 - Math.round((num2 / 10000) * 100) / 100
			ret.unit = '万元'
		} else if (num2 >= 0) {
			ret.num = 0 - num
			ret.unit = '元'
		}
	} else {
		ret.num = '0'
		ret.unit = '元'
	}
	ret.num = Math.round(ret.num * 100) / 100
	return ret
}

export function formatNumber(num) {
	if (num === undefined) return
	var res = num.toString().replace(/\d+/, function(n) { // 先提取整数部分
		return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
			return $1 + ','
		})
	})
	return res
}

// 获取当前坐标
export function getLocation(params = {}) {
	return new Promise((res, rej) => {
		uni.getLocation({
			...params,
			success: function(dataRes) {
				res({
					position_x: dataRes.latitude,
					position_y: dataRes.longitude,
				})
			},
			fail: function(res) {
				uni.showToast({
					title: '定位失败'
				})
			}
		})
	})
}