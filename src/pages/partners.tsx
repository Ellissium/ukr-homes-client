import { NextPage } from 'next'

import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import Partners from '@/screens/partners/Partners'

const AboutUsPage: NextPage = () => {
	return (
		<Meta title='Partners'>
			<Layout>
				<Partners />
			</Layout>
		</Meta>
	)
}

export default AboutUsPage
