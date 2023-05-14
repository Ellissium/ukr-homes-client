import cn from 'clsx'
import Link from 'next/link'
import { FC, useRef, useState } from 'react'

import Button from '@/ui/button/Button'
import Form from '@/ui/form/Form'
import { FormType } from '@/ui/form/form.interface'
import Meta from '@/ui/meta/Meta'

import { useAuth } from '@/hooks/useAuth'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	const { isLoading } = useAuth()

	const [type, setType] = useState<FormType>('login')
	const containerRef = useRef<HTMLDivElement>(null)
	const [isActive, setIsActive] = useState(false)

	const [signUpDisable, setSignUpDisable] = useState(false)
	const [signInDisable, setSignInDisable] = useState(true)

	function handleClickSignUp() {
		setSignUpDisable(true)
		setTimeout(function () {
			setSignInDisable(false)
		}, 600)
	}

	function handleClickSignIn() {
		setSignInDisable(true)
		setTimeout(function () {
			setSignUpDisable(false)
		}, 600)
	}

	const toggleActive = () => {
		if (type === 'login') {
			handleClickSignUp()
		} else {
			handleClickSignIn()
		}
		setTimeout(function () {
			setType(type === 'login' ? 'register' : 'login')
		}, 300)
		setIsActive(!isActive)
		if (containerRef.current) {
			containerRef.current.classList.toggle(styles.right__panel__active)
		}
	}

	return (
		<Meta title='Auth'>
			{/* <div className={styles.wrapper}>{isLoading ? <Loader /> : <Form />}</div> */}
			<div className={styles.auth}>
				<div
					ref={containerRef}
					className={styles.auth__container}
					id='container'
				>
					<div className={cn(styles.auth__form, styles.auth__signin)}>
						<Form type={type} />
					</div>
					<div className={styles.auth__overlay}>
						<div className={styles.auth__overlayContainer}>
							<div
								className={cn(
									styles.auth__overlayPanel,
									styles.auth__overlayPanel_left
								)}
							>
								<h1>Hello, Friend!</h1>
								<p className={styles.p}>
									Enter your personal details and start journey with us
								</p>
								<Button
									variant='ghost'
									disabled={signInDisable}
									onClick={toggleActive}
								>
									Sign In
								</Button>
							</div>
							<div
								className={cn(
									styles.auth__overlayPanel,
									styles.auth__overlayPanel_right
								)}
							>
								<h1>Welcome Back!</h1>
								<p className={styles.p}>
									To keep connected with us please login with your personal info
								</p>
								<Button
									variant='ghost'
									disabled={signUpDisable}
									onClick={toggleActive}
								>
									Sign Up
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.auth__back}>
					<Link className={styles.auth__backLink} href='/'>
						{'<- На головну'}
					</Link>
				</div>
			</div>
		</Meta>
	)
}

export default Auth
