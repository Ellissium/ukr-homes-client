import { FC, PropsWithChildren } from 'react'

import styles from './FilterCrumb.module.scss'

const FilterCrumb: FC<PropsWithChildren> = ({ children }) => {
	return <div className={styles.filterCrumb__container}>{children}</div>
}

export default FilterCrumb
