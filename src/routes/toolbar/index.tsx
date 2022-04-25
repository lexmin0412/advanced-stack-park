import { useState, useEffect } from 'react'
import { toolbars, ToolType } from './data'

export default function Toolbar() {

	const handleClick = (item: ToolType) => {
		if (item.link) {
			window.open(item.link)
		}
	}

	const [ searchRes, setSearchRes ] = useState<ToolType[]>([])

	const handleSearch = (keyword: string) => {
		const searchResult = toolbars.filter((item) => {
			return item.title.includes(keyword) || item.desc.includes(keyword)
		})
		setSearchRes(searchResult)
	}

	useEffect(() => {
		handleSearch('')
	}, [])

	return (
		<div className='px-8 py-4'>
			<div className="text-2xl font-bold mb-4 flex">
				<div>Toolbar</div>
				<input
					type="search"
					placeholder='请输入关键词，回车键搜索'
					className='block w-60 border-sky-500 rounded-md border-2 text-base ml-4 px-2 outline-none'
					onKeyDown={(e: any) => {
						if (e.keyCode === 13) {
							handleSearch(e.target.value)
						}
					}}
				/>
			</div>
			<div className="tools flex flex-wrap">
				{
					searchRes.map((item)=>{
						return (
							<div className="tool mr-8 mb-4 p-3 shadow-[5px_5px_10px_1px_rgba(0,0,0,0.3)] cursor-pointer w-80 rounded-md" key={item.id}
								onClick={()=>handleClick(item)}
							>
								<div className='text-xl'>
									{item.title}
								</div>
								<div className="text-sm">
									{item.desc}
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}
