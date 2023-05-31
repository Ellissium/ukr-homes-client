import cn from 'clsx'
import { forwardRef } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

import Button from '../button/Button'

import styles from './Input.module.scss'
import { IInput } from './input.interface'

const Input = forwardRef<HTMLInputElement, IInput>(
	(
		{
			placeholder,
			label,
			className,
			error,
			type = 'text',
			style,
			Icon,
			handleSearch,
			...rest
		},
		ref
	) => {
		return (
			<div className={cn(styles.input, className)}>
				{label && (
					<label className={styles.input__label}>
						<div className={styles.input__labelText}>
							{/* {Icon && <Icon />} */}
							{label}
						</div>
					</label>
				)}
				<div className={styles.input__container}>
					<input
						className={cn(
							error ? styles.error : '',
							type === 'search' ? styles.input__search : styles.input__field,
							className
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
				</div>
				{error && <div className={styles.input__error}>{error}</div>}
			</div>
		)
	}
)

Input.displayName = 'Input'
export default Input
