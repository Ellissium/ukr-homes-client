import { NextPage } from 'next'

import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import AboutUs from '@/screens/aboutUs/AboutUs'

const AboutUsPage: NextPage = () => {
	return (
		<Meta title='About Us'>
			<Layout>
				<AboutUs />
			</Layout>
		</Meta>
	)
}

export default AboutUsPage
