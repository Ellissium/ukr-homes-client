import Image from 'next/image'
import { FC } from 'react'

import styles from './AboutUs.module.scss'
import mind from '@/../public/images/mind.jpeg'
import rest from '@/../public/images/rest.png'

const AboutUs: FC = () => {
	return (
		<div className={styles.aboutUs}>
			<div className={styles.aboutUs__main} />
			<div className={styles.aboutUs__content}>
				<h1 className={styles.aboutUs__heading}>Про нас</h1>
				<div className={styles.aboutUs__text}>
					«Ellissium Corporation» була заснована в 2010 році групою ентузіастів,
					які бажали створити власний бізнес в області програмування. За
					декілька років існування компанії, «Ellissium Corporation» зуміла
					зайняти свою нішу на ринку програмного забезпечення. «Ellissium
					Corporation» спеціалізується на розробці програмного забезпечення для
					інтернет магазинів, сервісів електронної комерції та онлайн-платформ.
					Компанія зосереджена на створенні високоякісних рішень для бізнесу,
					які допомагають збільшити продажі та залучити нових клієнтів.
				</div>
				<Image
					src={rest}
					alt='My Image'
					className={styles.rest__image}
					width={513}
					height={394}
					priority
				></Image>
				<div className={styles.aboutUs__text}>
					Компанія «Ellissium Corporation» нараховує близько 90 співробітників,
					які мають високу кваліфікацію у сфері програмування та розробки ПЗ.
					Компанія надає різноманітні послуги у сфері розробки програмного
					забезпечення для інтернет магазинів та онлайн-сервісів. До основних
					продуктів компанії відносяться веб-додатки та платформи для розширення
					функціоналу існуючих онлайн-сервісів, а також власні розробки у сфері
					електронної комерції. Компанія «Ellissium Corporation» володіє
					сучасними технологіями та методиками розробки програмного
					забезпечення, які дозволяють забезпечувати високу якість продукції та
					забезпечувати своїм клієнтам професійний сервіс. Крім того, компанія
					зосереджена на постійному вдосконаленні своїх розробок та швидкому
					реагуванні на зміни в галузі електронної комерції.
				</div>
				<Image
					src={mind}
					alt='My Image'
					className={styles.mind__image}
					width={770}
					height={530}
					priority
				></Image>
			</div>
		</div>
	)
}

export default AboutUs
