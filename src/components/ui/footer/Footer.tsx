import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Footer.module.scss'
import diia from '@/../public/images/diia_logo.png'
import prom from '@/../public/images/prom_logo.png'
import rozetka from '@/../public/images/rozetka_logo.png'
import vodafone from '@/../public/images/vodafone_logo.png'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__partners}>
				<div className={styles.footer__partnersText}>Партнери:</div>
				<div className={styles.footer__partnersLogo}>
					<Link
						className={styles.footer__link}
						href='https://diia.gov.ua'
						target='_blank'
					>
						<Image
							priority={true}
							src={diia}
							alt='My Image'
							width={40}
							height={40}
							className={styles.footer__diiaLogo}
						/>
					</Link>
					<Link
						className={styles.footer__link}
						href='https://prom.ua'
						target='_blank'
					>
						<Image
							priority={true}
							src={prom}
							alt='My Image'
							width={129}
							height={40}
							className={styles.footer__promLogo}
						/>
					</Link>
					<Link
						className={styles.footer__link}
						href='https://rozetka.com.ua'
						target='_blank'
					>
						<Image
							priority={true}
							src={rozetka}
							alt='My Image'
							width={173}
							height={40}
							className={styles.footer__promLogo}
						/>
					</Link>
					<Link
						className={styles.footer__link}
						href='https://www.vodafone.ua'
						target='_blank'
					>
						<Image
							priority={true}
							src={vodafone}
							alt='My Image'
							width={157}
							height={40}
							className={styles.footer__promLogo}
						/>
					</Link>
				</div>
			</div>
			<div className={styles.footer__copyrights}>
				<div className={styles.footer__copyrightsLinks}>
					<Link className={styles.footer__link} href='/aboutUs'>
						Про нас
					</Link>
					<Link className={styles.footer__link} href='/regulations'>
						Регламент
					</Link>
					<Link className={styles.footer__link} href='/partners'>
						Для партнерів
					</Link>
				</div>
				<div className={styles.footer__copyrightsText}>
					© 2023 UkrHomes is a registered trademark of Ellissium Corporation.
					All rights reserved.
				</div>
			</div>
		</div>
	)
}

export default Footer
