import { useState, useEffect } from 'react'
import { toolbars, ToolType } from './data'
import { tabs, ToolAuthType, TOOL_AUTH_PUBLIC } from './tabs'
import { getStorageSync, setStorageSync } from './../../utils/index'
import { useSearchParams } from 'react-router-dom'

export default function Toolbar() {

	const [searchKeyword, setSearchKeyword] = useState('')

	const handleChange = (value: string) => {
		setSearchKeyword(value)
	}

	const handleClick = (item: ToolType) => {
		if (item.link) {
			window.open(item.link)
		}
	}

	const [currentTab, setCurrentTab] = useState<ToolAuthType>(TOOL_AUTH_PUBLIC)

	const [ searchRes, setSearchRes ] = useState<ToolType[]>([])

	const handleSearch = (keyword: string) => {
		const privateTools = getStorageSync('privateTools', []) as ToolType[]
		const currentTools = currentTab === TOOL_AUTH_PUBLIC ? toolbars : privateTools
		const searchResult = currentTools.filter((item) => {
			return item.title.includes(keyword) || item.desc.includes(keyword)
		})
		setSearchRes(searchResult)
	}

	const [searchParams] = useSearchParams()

	useEffect(() => {
		document.title = 'Toolbar'

		// 判断如果url上携带了token则存到localStorage
		const token = searchParams.get('token')
		if ( token ) {
			setStorageSync('token', token)
		}

		handleSearch(searchKeyword)
	}, [])

	useEffect(() => {
		handleSearch(searchKeyword)
	}, [currentTab, searchKeyword])

	const handleTabClick = (id: ToolAuthType) => {
		setCurrentTab(id)
	}

	const handleGithubAuth = () => {
		window.location.href = `https://github.com/login/oauth/authorize?client_id=bd933196d64a49c70a82&redirect_uri=https://api.cellerchan.top/github/oauth/redirect`
	}

	return (
		<div className='px-8 py-4'>
			<div className="text-2xl font-bold mb-4 flex">
				<div className='flex flex-grow overflow-hidden pr-4'>
					{/* <div>Toolbar</div> */}
					<input
						type="text"
						placeholder='请输入关键词'
						className='block border-sky-500 rounded-md border-2 text-base px-2 outline-none h-8 flex-grow'
						onChange={(e) => handleChange(e.target.value)}
						onKeyDown={(e: any) => {
							if (e.keyCode === 13) {
								handleSearch(e.target.value)
							}
						}}
					/>
				</div>
				<div className="login-box text-xl cursor-pointer"
					onClick={handleGithubAuth}
				>
					登录
				</div>
			</div>
			<div className="flex">
					{
						tabs.map((item) => {
							return (
								<div className={`border-b-2 text-xl px-4 mb-4 cursor-pointer h-10 ${currentTab===item.id ? ' border-cyan-500' : ''}`}
									onClick={()=>handleTabClick(item.id)}
								>
									{item.title}
								</div>
							)
						})
					}
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
