import { Component, useState, useEffect, useRef } from 'react'
import { getCurFormattedTime } from './../../utils/index'

export function TimeMachine() {

	const [time, setTime] = useState(getCurFormattedTime())

	useEffect(() => {
		const interval = setInterval(() => {
			 setTime(getCurFormattedTime())
		}, 1000);
		return () => {
			clearInterval(interval)
		}
	}, [time])

	return (
		<div className='flex justify-center align-middle flex-col w-screen h-screen'>
			<div className="title text-4xl text-center font-bold">
				time machine
			</div>
			<div className="machine-time text-2xl text-center my-5">
				{time}
			</div>
		</div>
	)
}

export default TimeMachine
