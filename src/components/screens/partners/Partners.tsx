import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Partners.module.scss'
import diia from '@/../public/images/diia_logo.png'
import prom from '@/../public/images/prom_logo.png'
import rozetka from '@/../public/images/rozetka_logo.png'
import team from '@/../public/images/team.png'
import vodafone from '@/../public/images/vodafone_logo.png'

const Partners: FC = () => {
	return (
		<div className={styles.partners}>
			<div className={styles.partners__main} />
			<div className={styles.partners__content}>
				<h1 className={styles.partners__heading}>Для партнерів</h1>
				<div className={styles.partners__text}>
					Компанія «Ellissium Corporation» активно співпрацює з підприємствами
					різних галузей економіки, які займаються продажем товарів та послуг
					через інтернет. Крім того, компанія має партнерські відносини з
					провідними постачальниками хмарних сервісів та інших технологій, що
					дозволяє забезпечувати своїм клієнтам найкращі рішення для розвитку
					бізнесу. Місія компанії «Ellissium Corporation» полягає у створенні
					найкращих програмних рішень для розвитку бізнесу в галузі електронної
					комерції. Основні цінності компанії полягають у професіоналізмі,
					інноваційності, та спрямованості на результат. Компанія прагне
					досягати максимальних результатів у своїй роботі та забезпечувати
					найвищу якість своїх продуктів і послуг. Компанія «Ellissium
					Corporation» планує далі розвиватись в сфері програмного забезпечення
					для електронної комерції та онлайн-сервісів, використовуючи
					найсучасніші технології.
				</div>
				<div className={styles.partners__logosContainer}>
					<div className={styles.partners__leftlogos}>
						<Link
							className={styles.partners__link}
							href='https://diia.gov.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={diia}
								alt='My Image'
								width={40}
								height={40}
								className={styles.partners__diiaLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://prom.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={prom}
								alt='My Image'
								width={129}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://rozetka.com.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={rozetka}
								alt='My Image'
								width={173}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://www.vodafone.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={vodafone}
								alt='My Image'
								width={157}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://diia.gov.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={diia}
								alt='My Image'
								width={40}
								height={40}
								className={styles.partners__diiaLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://prom.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={prom}
								alt='My Image'
								width={129}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://rozetka.com.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={rozetka}
								alt='My Image'
								width={173}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://www.vodafone.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={vodafone}
								alt='My Image'
								width={157}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
					</div>
					<div className={styles.partners__rightlogos}>
						<Link
							className={styles.partners__link}
							href='https://diia.gov.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={diia}
								alt='My Image'
								width={40}
								height={40}
								className={styles.partners__diiaLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://prom.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={prom}
								alt='My Image'
								width={129}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://rozetka.com.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={rozetka}
								alt='My Image'
								width={173}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://www.vodafone.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={vodafone}
								alt='My Image'
								width={157}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://diia.gov.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={diia}
								alt='My Image'
								width={40}
								height={40}
								className={styles.partners__diiaLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://prom.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={prom}
								alt='My Image'
								width={129}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://rozetka.com.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={rozetka}
								alt='My Image'
								width={173}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
						<Link
							className={styles.partners__link}
							href='https://www.vodafone.ua'
							target='_blank'
						>
							<Image
								priority={true}
								src={vodafone}
								alt='My Image'
								width={157}
								height={40}
								className={styles.partners__promLogo}
							/>
						</Link>
					</div>
				</div>
				<div className={styles.partners__logosContainer}></div>
				<div className={styles.partners__text}>
					Крім того, фахівці компанії «Ellissium Corporation» володіють
					глибокими знаннями в області безпеки програмного забезпечення, що
					дозволяє їм створювати програмні продукти, які відповідають найвищим
					стандартам безпеки та захисту даних. Компанія «Ellissium Corporation»
					забезпечує своїх клієнтів комплексними рішеннями, що включають в себе
					не лише розробку програмного забезпечення, але й підтримку та
					консультування з питань його використання. Компанія готова надати
					своїм клієнтам всебічну підтримку на всіх етапах проекту, починаючи
					від його планування та розробки і закінчуючи впровадженням та
					підтримкою в експлуатації. Завдяки високій якості роботи та
					професійному підходу до кожного проекту, компанія «Ellissium
					Corporation» здобула довіру та повагу своїх клієнтів та партнерів. Її
					програмні продукти з успіхом використовуються в різних сферах бізнесу,
					починаючи від малого підприємництва та закінчуючи великими
					корпораціями. В цілому, компанія «Ellissium Corporation» є
					висококваліфікованим та професійним розробником програмного
					забезпечення, який надає своїм клієнтам якісні та комплексні рішення в
					області програмування.
				</div>
				<Image
					src={team}
					alt='My Image'
					className={styles.team__image}
					width={303}
					height={306}
					priority
				></Image>
			</div>
		</div>
	)
}

export default Partners
