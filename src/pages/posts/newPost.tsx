import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import NewPost from '@/screens/newPost/NewPost'

const NewPostPage: NextPageAuth = () => {
	return (
		<Meta title='New post'>
			<Layout>
				<NewPost />
			</Layout>
		</Meta>
	)
}
NewPostPage.isOnlyUser = true
export default NewPostPage
