import Image from 'next/image'
import { FC } from 'react'

import styles from './Loader.module.scss'
import walk from '@/../public/images/walk.gif'

const Loader: FC = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.loader__item}>
				<Image
					priority={true}
					src={walk}
					alt='My Image'
					width={40}
					height={40}
					className={styles.loader__image}
				/>
			</div>
		</div>
	)
}

export default Loader
