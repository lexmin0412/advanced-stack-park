import dayjs from 'dayjs'

/**
 * 根据时间戳获取格式化时间
 * @param timestamp 时间戳
 */
export const getCurFormattedTime = (timestamp?: number) => {
	return (dayjs(timestamp || new Date())).format('YYYY-MM-DD HH:mm:ss')
}
