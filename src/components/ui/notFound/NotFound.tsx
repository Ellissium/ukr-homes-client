import Image from 'next/image'
import { FC } from 'react'

import styles from './NotFound.module.scss'
import searcher from '@/../public/images/searcher.jpg'

const NotFound: FC = () => {
	return (
		<div className={styles.notFound}>
			<h1 className={styles.notFound__text}>Нічого не знайдено</h1>
			<Image
				src={searcher}
				alt='My Image'
				className={styles.notFound__image}
				width={500}
				height={500}
				priority
			></Image>
		</div>
	)
}

export default NotFound
