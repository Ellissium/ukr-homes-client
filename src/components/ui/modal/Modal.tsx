import { FC, MouseEvent, PropsWithChildren } from 'react'

import styles from './Modal.module.scss'

interface IModalProps {
	visible: boolean
	setVisible: (visible: boolean) => void
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
	children,
	visible,
	setVisible
}) => {
	const rootClasses: string[] = [styles.myModal]

	if (visible) {
		rootClasses.push(styles.active)
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div
				className={styles.myModal__Content}
				onClick={(e: MouseEvent) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}

export default Modal
