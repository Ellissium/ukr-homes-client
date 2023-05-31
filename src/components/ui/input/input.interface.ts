import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string
	label?: string
	Icon?: IconType
	error?: string
	handleSearch?: () => void
}
