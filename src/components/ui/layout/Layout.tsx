import { FC, PropsWithChildren } from 'react'

import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

interface ILayoutProps {
	hideDistance?: number
}

const Layout: FC<PropsWithChildren<ILayoutProps>> = ({
	children,
	hideDistance
}) => {
	return (
		<div>
			<Navbar hideDistance={hideDistance}></Navbar>
			<main>{children}</main>
			<Footer></Footer>
		</div>
	)
}

export default Layout
