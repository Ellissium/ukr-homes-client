import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: '' | 'ghost' | 'search' | 'logout'

	active?: boolean
}
const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	variant = '',
	...rest
}) => {
	return (
		<button {...rest} className={cn(styles.button, styles[variant])}>
			{children}
		</button>
	)
}

export default Button
