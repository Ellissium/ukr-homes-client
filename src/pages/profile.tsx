import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { setCategory, setUserPage } from '@/store/page/pageFilters.slice'

import Profile from '@/screens/profile/Profile'

const ProfilePage: NextPageAuth = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setUserPage(1))
		dispatch(setCategory(undefined))
	}, [])
	return <Profile />
}

ProfilePage.isOnlyUser = true
export default ProfilePage
