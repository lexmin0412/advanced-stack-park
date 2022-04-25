export const TOOL_AUTH_PUBLIC = 'public'
export const TOOL_AUTH_PRIVATE = 'private'

export type ToolAuthType = 'public' | 'private'

export interface TabType {
	id: ToolAuthType
	title: ToolAuthType
}

export const tabs = [
	{
		id: 'public',
		title: 'public',
	},
	{
		id: 'private',
		title: 'private'
	}
]
