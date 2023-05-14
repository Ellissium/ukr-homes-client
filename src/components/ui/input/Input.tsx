import cn from 'clsx'
import { forwardRef } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

import Button from '../button/Button'

import styles from './Input.module.scss'
import { IInput } from './input.interface'

const Input = forwardRef<HTMLInputElement, IInput>(
	(
		{ placeholder, error, type = 'text', style, Icon, handleSearch, ...rest },
		ref
	) => {
		return (
			<div className={styles.input}>
				{/* <label className={styles.input__label}>
					<span className={cn('', className)} style={style}>
						{Icon && <Icon />}
						{placeholder}
					</span>
				</label> */}
				<input
					className={cn(
						error ? styles.error : '',
						type === 'search' ? styles.input__search : styles.input__field
					)}
					ref={ref}
					type={type}
					placeholder={placeholder}
					{...rest}
				/>
				{type === 'search' && (
					<Button variant='search' onClick={handleSearch}>
						<BiSearchAlt className={styles.input__searchIcon} />
					</Button>
				)}

				{error && <div className={styles.input__error}>{error}</div>}
			</div>
		)
	}
)

Input.displayName = 'Input'
export default Input
