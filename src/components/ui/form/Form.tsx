import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IEmailPassword, IUserEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import Button from '../button/Button'
import Heading from '../heading/Heading'
import Input from '../input/Input'

import styles from './Form.module.scss'
import { FormType, IFormProps } from './form.interface'
import { validEmail } from '@/screens/auth/valid-email'

const Form: FC<IFormProps> = ({ type }) => {
	useAuthRedirect()
	const { auth } = useActions()
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<FormType extends 'login' ? IEmailPassword : IUserEmailPassword>({
		mode: 'onChange'
	})
	const onSubmit: SubmitHandler<IEmailPassword | IUserEmailPassword> = data => {
		auth({ type, data })
		reset()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.form__content}>
				<Heading>{type === 'login' ? 'Log in' : 'Create Account'}</Heading>
				{type === 'register' && (
					<Input
						{...formRegister('name', {
							required: 'Name is required'
						})}
						placeholder='Name'
						error={errors.name?.message}
					/>
				)}
				<Input
					{...formRegister('email', {
						required: 'Email is required',
						pattern: {
							value: validEmail,
							message: 'Please enter valid email address'
						}
					})}
					placeholder='Email'
					error={errors.email?.message}
				/>
				<Input
					{...formRegister('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Min length should be more 6 symbols '
						}
					})}
					type='password'
					placeholder='Password'
					error={errors.password?.message}
				/>
			</div>
			<Button variant=''>{type === 'login' ? 'Sign in' : 'Sign up'}</Button>
		</form>
	)
}

export default Form
