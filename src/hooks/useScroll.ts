import { useEffect, useState } from 'react'

function useScroll() {
	const [scrollPos, setScrollPos] = useState(0)

	useEffect(() => {
		function handleScroll() {
			setScrollPos(window.pageYOffset)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return scrollPos
}

export default useScroll
