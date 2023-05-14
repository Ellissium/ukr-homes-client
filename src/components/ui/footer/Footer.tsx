import { FC } from 'react'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__partners}>1</div>
			<div className={styles.footer__copyrights}>2</div>
		</div>
	)
}

export default Footer
