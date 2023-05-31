import { NextPage } from 'next'

import Meta from '@/ui/meta/Meta'

import Auth from '@/screens/auth/Auth'

const AuthPage: NextPage = () => {
	return (
		<Meta title='Auth'>
			<Auth />
		</Meta>
	)
}

export default AuthPage
