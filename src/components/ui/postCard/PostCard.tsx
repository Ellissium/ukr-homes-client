import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'
import { FiHeart } from 'react-icons/fi'

import { IPost } from '@/types/post.interface'

import styles from './PostCard.module.scss'
import postImage from '@/../public/images/home_interior.jpg'

interface PostCardProps {
	post: IPost
}
const PostCard: FC<PostCardProps> = ({ post }) => {
	const utilitiesPrice = 1000
	const depositPrice = 1000
	const totalPrice = 3000
	const router = useRouter()
	const overlayRef = useRef<HTMLDivElement>(null)

	const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 })
	const [overlayVisible, setOverlayVisible] = useState(false)

	const handleMouseMove = (e: any) => {
		e.preventDefault()
		setTimeout(() => {
			router.push(`/posts/${post.category.slug}/${post.slug}`)
		}, 100)
		if (!overlayVisible) {
			const block = e.currentTarget
			const rect = block.getBoundingClientRect()
			const overlaySize = {
				width: overlayRef.current?.getBoundingClientRect().width ?? 0,
				height: overlayRef.current?.getBoundingClientRect().height ?? 0
			}
			const x = e.clientX - rect.left - overlaySize.width / 2
			const y = e.clientY - rect.top - overlaySize.height / 2
			setOverlayPosition({ x: x, y: y })
			setOverlayVisible(true)
			setTimeout(function () {
				setOverlayVisible(false)
			}, 300)
		}
	}

	return (
		<Link
			href={`/posts/${post.category.slug}/${post.slug}`}
			passHref
			className={styles.postCard}
			onClick={handleMouseMove}
		>
			<div className={styles.postCard__container}>
				<div className={styles.postCard__gallery}>
					<Image
						src={postImage}
						alt='My Image'
						className={styles.postCard__galleryImage}
					></Image>
				</div>
				<div className={styles.postCard__information}>
					<div className={styles.postCard__description}>
						<div className={styles.postCard__textHeaders}>
							{post.id + ' ' + post.name}
						</div>
						<div className={styles.postCard__text}>
							{post.region +
								' ' +
								post.city +
								' ' +
								post.street +
								' ' +
								post.houseNumber}
						</div>
						<div className={styles.postCard__text}>
							{post.area +
								' м2 ' +
								post.roomsNumber +
								' кімнат ' +
								post.floor +
								' поверх '}
						</div>
					</div>
					<div className={styles.postCard__priceList}>
						<span className={styles.postCard__textHeaders}>rent:</span>
						<span className={styles.postCard__text}>{post.price + ' $'}</span>
						<span className={styles.postCard__textHeaders}>utilities:</span>
						<span className={styles.postCard__text}>
							{utilitiesPrice + ' $'}
						</span>
						<span className={styles.postCard__textHeaders}>deposit:</span>
						<span className={styles.postCard__text}>{depositPrice + ' $'}</span>
					</div>
					<div className={styles.postCard__total}>
						<div className={styles.postCard__favorite}>
							<FiHeart
								className={styles.postCard__favoriteIcon}
								onClick={e => e.stopPropagation()}
							/>
						</div>
						<div className={styles.postCard__totalPrice}>
							<span className={styles.postCard__textHeaders}>total:</span>
							<span className={styles.postCard__text}>{totalPrice}</span>
						</div>
					</div>
				</div>
			</div>
			<div
				ref={overlayRef}
				className={cn(
					styles.postCard__overlay,
					overlayVisible ? styles.postCard__overlay_animation : ''
				)}
				style={{
					transform: `translate(${overlayPosition.x}px, ${overlayPosition.y}px)`
				}}
			/>
		</Link>
	)
}

export default PostCard
