import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { FiHeart, FiLogOut } from 'react-icons/fi'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'
import useScroll from '@/hooks/useScroll'

import styles from './Navbar.module.scss'
import logo from '@/../public/images/logo.png'

interface INavbarProps {
	hideDistance?: number
}
const Navbar: FC<INavbarProps> = ({ hideDistance = 1 }) => {
	const { user } = useAuth()
	let profile = useProfile()
	const currentScrollPos = useScroll()
	const { logout } = useActions()
	const [prevScrollPos, setPrevScrollPos] = useState(0)
	const [isVisible, setIsVisible] = useState(true)
	useEffect(() => {
		setIsVisible(
			prevScrollPos > currentScrollPos || currentScrollPos < hideDistance
		)
		setPrevScrollPos(currentScrollPos)
	}, [currentScrollPos])

	const handleClick = () => {
		logout()
	}
	return (
		<div
			className={cn(
				styles.navbar,
				isVisible ? styles.navbar_visible : styles.navbar_hidden
			)}
		>
			<div className={styles.navbar__ukrPromo}>Stand with Ukraine</div>
			<div className={styles.navbar__container}>
				<Link href='/' className={styles.navbar__logo}>
					<Image
						src={logo}
						alt='My Image'
						className={styles.navbar__logoImage}
					></Image>
					<div className={styles.navbar__logoText}>
						<span>
							Ukr <br /> <span style={{ paddingLeft: '20px' }}>Homes</span>
						</span>
					</div>
				</Link>
				<nav className={styles.navbar__list}>
					<Link className={styles.navbar__listLink} href='/posts'>
						Усі
					</Link>
					<Link className={styles.navbar__listLink} href='/posts/refugee'>
						Для переселенців
					</Link>
					<Link className={styles.navbar__listLink} href='/posts/sale'>
						Продаж
					</Link>
					<Link className={styles.navbar__listLink} href='/posts/rent'>
						Оренда
					</Link>

					{user ? (
						<div className={styles.navbar__auth}>
							<Link className={styles.navbar__listLink} href='/posts/newPost'>
								Нове оголошення
							</Link>
							<Link className={styles.navbar__listLink} href='/favorites'>
								<FiHeart className={styles.navbar__favoriteIcon} />
							</Link>
							<Link className={styles.navbar__listLink} href='/profile'>
								<div className={styles.navbar__profileText}>Мій профіль</div>
								{profile?.avatarPath ? (
									<Image
										priority={false}
										src={profile.avatarPath}
										alt='My Image'
										width={50}
										height={50}
										className={styles.navbar__profileImage}
									/>
								) : (
									<div>hi</div>
								)}
							</Link>
							<Link
								className={styles.navbar__logout}
								onClick={handleClick}
								href='/'
							>
								<FiLogOut className={styles.navbar__logoutIcon} />
							</Link>{' '}
						</div>
					) : (
						<Link className={styles.navbar__listLink} href='/auth'>
							Авторизуватися
						</Link>
					)}
				</nav>
			</div>
		</div>
	)
}

export default Navbar
