import cn from 'clsx'
import { FC, useState } from 'react'

import styles from './Dropdown.module.scss'
import { EnumValue } from '@/services/category/dropdownEnum.types'

interface IDropdownProps {
	regiondropdown?: boolean
	enumValues: EnumValue[]
	defaultValue?: string | number
	onDropdownChange: (selectedKey: string) => void
}

const Dropdown: FC<IDropdownProps> = ({
	regiondropdown = false,
	enumValues,
	defaultValue,
	onDropdownChange
}) => {
	// const dispatch = useDispatch()
	// const pageFilters = useTypedSelector(
	// 	(state: TypeRootState) => state.pageFilters
	// )
	const [isOpen, setIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState(defaultValue)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}
	// dispatch(setPage(1))
	// dispatch(setSort(item))
	// setSelectedValue(item)
	// setIsOpen(false)
	const handleItemClick = (item: EnumValue) => {
		setSelectedValue(item.key)
		onDropdownChange(item.key)
		setIsOpen(false)
	}

	return (
		<div
			className={cn(
				regiondropdown ? styles.regionDropdown : '',
				styles.dropdown
			)}
		>
			<div className={styles.dropdown__toggle} onClick={toggleDropdown}>
				{enumValues.find(item => item.key === selectedValue)?.value}
				<span
					className={`${styles.dropdown__arrow} ${
						isOpen ? styles.dropdown__arrow_down : styles.dropdown__arrow_up
					}`}
				/>
			</div>
			{isOpen && (
				<div className={styles.dropdown__menu}>
					<ul>
						{enumValues.map(item => (
							<li key={item.key} onClick={() => handleItemClick(item)}>
								{item.value}
							</li>
						))}
						{/* {Object.values(enumValues).map((item: any) => (
							<li
								key={item}
								onClick={() => handleItemClick(item)}
								className={
									selectedValue === item
										? styles.dropdown__menu__item_selected
										: ''
								}
							>
								{item}
							</li>
						))} */}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Dropdown
