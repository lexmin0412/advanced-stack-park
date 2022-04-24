import { expect, test } from 'vitest'
import { getCurFormattedTime } from './index'
import dayjs from 'dayjs'

// 无参数校验
test('getCurFormattedTime with params', () => {
	const res = getCurFormattedTime(1650819583003)
	console.log('res', res)
	expect(res).toBe('2022-04-25 00:59:43')
})

// 传参数校验
test('getCurFormattedTime without params', () => {
	const res = getCurFormattedTime()
	console.log('res', res)
	expect(res).toBe(dayjs().format('YYYY-MM-DD HH:mm:ss'))
})
