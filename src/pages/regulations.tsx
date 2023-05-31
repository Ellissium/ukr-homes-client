import { NextPage } from 'next'

import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import Regulations from '@/screens/regulations/Regulations'

const RegulationsPage: NextPage = () => {
	return (
		<Meta title='Regulations'>
			<Layout>
				<Regulations />
			</Layout>
		</Meta>
	)
}

export default RegulationsPage
