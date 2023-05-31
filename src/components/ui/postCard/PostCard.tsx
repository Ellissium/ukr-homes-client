import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import { IPost } from '@/types/post.interface'

import FavoriteButton from '../favoriteButton/FavoriteButton'

import styles from './PostCard.module.scss'
import { RegionEnum } from '@/services/category/dropdownEnum.types'

interface PostCardProps {
	handleDeletePost?: (postId: number | string) => void
	isProfilePost: boolean
	post: IPost
}

const PostCard: FC<PostCardProps> = ({
	handleDeletePost,
	isProfilePost,
	post
}) => {
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
	const handleDelete = (e: any) => {
		e.stopPropagation()
		console.log('delete')
		if (handleDeletePost) {
			handleDeletePost(post.id)
		}
	}
	return (
		<div className={styles.postCard} onClick={handleMouseMove}>
			<div className={styles.postCard__container}>
				<div className={styles.postCard__gallery}>
					<Image
						src={post.images[0]}
						width={1000}
						height={1000}
						alt='My Image'
						className={styles.postCard__galleryImage}
					></Image>
				</div>
				<div className={styles.postCard__information}>
					<div className={styles.postCard__description}>
						<div>
							<div className={styles.postCard__textMainHeaders}>
								{'№' + post.id + ' ' + post.name}
							</div>
							<div className={styles.postCard__text}>
								{post.city +
									', ' +
									post.street +
									' ' +
									post.houseNumber +
									', ' +
									RegionEnum.find(item => item.key === post.region)?.value}
							</div>
						</div>
						<div className={styles.postCard__textDescription}>
							{post.description}
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
						<span className={styles.postCard__textHeaders}>
							{post.category.id === 2 ? 'Ціна за м²' : 'Комунальні послуги:'}:
						</span>
						<span className={styles.postCard__text}>
							{post.category.id === 2
								? (post.price / post.area).toFixed(2) + ' ₴'
								: post.utilitiesPrice + ' ₴'}
						</span>
						{post.category.id === 2 && (
							<div className={styles.postCard__utilitiesContainer}>
								<span className={styles.postCard__textHeaders}>
									Додаткові витрати:
								</span>
								<span className={styles.postCard__text}>
									{post.utilitiesPrice + ' ₴'}
								</span>{' '}
							</div>
						)}
						{post.category.id !== 2 && (
							<div className={styles.postCard__utilitiesContainer}>
								<span className={styles.postCard__textHeaders}>Ціна:</span>
								<span className={styles.postCard__text}>
									{post.price + ' ₴'}
								</span>{' '}
							</div>
						)}
					</div>
					<div className={styles.postCard__total}>
						<div className={styles.postCard__totalButtons}>
							<FavoriteButton productId={post.id}></FavoriteButton>

							{isProfilePost && (
								<Link
									className={styles.postCard__edit}
									href={`/posts/newPost?id=${post.id}`}
								>
									<FiEdit
										className={styles.postCard__editIcon}
										onClick={e => e.stopPropagation()}
									/>
								</Link>
							)}
							{isProfilePost && (
								<div className={styles.postCard__bin} onClick={handleDelete}>
									<FiTrash2 className={styles.postCard__binIcon} />
								</div>
							)}
						</div>

						<div className={styles.postCard__totalPrice}>
							{post.category.id !== 2 ? (
								<>
									<span className={styles.postCard__textHeaders}>Разом:</span>
									<span className={styles.postCard__text}>
										{post.price + post.utilitiesPrice + ' ₴'}
									</span>
								</>
							) : (
								<>
									<span className={styles.postCard__textHeaders}>Ціна:</span>
									<span className={styles.postCard__text}>
										{(post.price / post.area + post.utilitiesPrice).toFixed(2) +
											' ₴'}
									</span>
								</>
							)}
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
		</div>
	)
}

export default PostCard
