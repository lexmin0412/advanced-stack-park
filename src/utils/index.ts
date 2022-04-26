import dayjs from 'dayjs'

/**
 * 根据时间戳获取格式化时间
 * @param timestamp 时间戳
 */
export const getCurFormattedTime = (timestamp?: number) => {
	return (dayjs(timestamp || new Date())).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 根据key获取localStorage中的数据并parse
 * @param key 键
 */
export const getStorageSync = (key: string, defaultValue?: any): any => {
	const value = localStorage.getItem(key)
	if ( value ) {
		return JSON.parse(value)
	}
	return defaultValue
}

export const setStorageSync = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value))
}
