import { useRouter } from 'next/router'
import { FC } from 'react'

import PostForm from '@/ui/postForm/PostForm'

import styles from './NewPost.module.scss'

const NewPost: FC = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<div className={styles.newPost}>
			<div className={styles.newPost__navbar}></div>
			<div className={styles.newPost__main}>
				<PostForm postId={id} title='Нове оголошення'></PostForm>
			</div>
		</div>
	)
}

export default NewPost
