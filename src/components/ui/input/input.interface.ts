import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	Icon?: IconType
	error?: string
	handleSearch?: () => void
}
