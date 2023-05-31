import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import { IPost, IPostDetails } from '@/types/post.interface'

import Post from '@/screens/post/Post'
import { PostService } from '@/services/post/post.service'

type Params = {
	slug?: string
}

type Props = {
	post?: IPost
}

const PostPage: NextPage<IPostDetails> = ({ post }) => {
	return (
		<Meta title={post.name}>
			<Layout>
				<Post post={post} />
			</Layout>
		</Meta>
	)
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	try {
		const data = await PostService.getAll({ page: 1, perPage: 10 })
		const paths = data.posts.map((post: IPost) => ({
			params: { slug: post.slug }
		}))
		return { paths, fallback: 'blocking' }
	} catch (error) {
		console.error(error)
		return { paths: [], fallback: false }
	}
}

export const getStaticProps: GetStaticProps<IPostDetails, Params> = async ({
	params
}) => {
	if (!params || !params.slug) {
		return {
			notFound: true
		}
	}

	const { slug } = params
	const { data: post } = await PostService.getBySlug(slug)
	return {
		props: {
			post
		},
		revalidate: 10
	}
}

export default PostPage
