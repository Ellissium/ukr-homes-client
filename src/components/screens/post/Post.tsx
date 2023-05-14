import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Button from '@/ui/button/Button'
import Footer from '@/ui/footer/Footer'
import Meta from '@/ui/meta/Meta'
import Navbar from '@/ui/navbar/Navbar'

import { IPostDetails } from '@/types/post.interface'

import styles from './Post.module.scss'
import postImage from '@/../public/images/home_interior.jpg'

const Post: FC<IPostDetails> = ({ post }) => {
	const totalPrice = 3000
	return (
		<Meta title={post.name}>
			<div className={styles.post}>
				<div className={styles.post__main}>
					<Navbar />
					{/* <Image src={main} alt='My Image' className={styles.image}></Image>
				<PostFilter filter={filter} setFilter={setFilter} /> */}
				</div>
				<div className={styles.post__container}>
					<div className={styles.post__router}>
						<Button>{'<- Назад'}</Button>
						<div className={styles.post__routerPath}>
							<Link href='/posts'>posts</Link>
							<span>{' > '}</span>
							<Link href={`/posts/${post.category.slug}`}>
								{post.category.slug}
							</Link>
							<span>{' > '}</span>
							<span>{post.slug}</span>
						</div>
					</div>
					<div className={styles.post__item}>
						<div className={styles.post__gallery}>
							<Image
								src={postImage}
								alt='My Image'
								className={styles.post__galleryImage}
							></Image>
						</div>
					</div>
					<div className={styles.post__mainInformation}>
						<h1 className={styles.post__textHeaders}>
							{'#' + post.id + ' ' + post.name}
						</h1>
						<span className={styles.post__text}>
							{post.region +
								' ' +
								post.city +
								' ' +
								post.street +
								' ' +
								post.houseNumber}
						</span>
						<span className={styles.post__text}>
							{post.area +
								' м2 ' +
								post.roomsNumber +
								' кімнат ' +
								post.floor +
								' поверх '}
						</span>
						<span className={styles.post__text}>
							{post.area +
								' м2 ' +
								post.roomsNumber +
								' кімнат ' +
								post.floor +
								' поверх '}
						</span>
					</div>
					<div className={styles.post__secondaryInformation}>
						<span className={styles.post__text}>Площа: {post.area} м2</span>
						<span className={styles.post__text}>Поверх: {post.floor}</span>
						<span className={styles.post__text}>
							Кількість кімнат: {post.roomsNumber}
						</span>
						<span className={styles.post__text}>
							Кількість ліжок: {post.bedsNumber}
						</span>
						<span className={styles.post__text}>
							Кількість санвузлів: {post.bathroomsNumber}
						</span>
						<span className={styles.post__text}>
							Мінімальна оренда на: {post.minRentalPeriod} місяців
						</span>
						<span className={styles.post__text}>
							Комунальні послуги: {post.utilitiesPrice} $
						</span>
					</div>
					<div className={styles.post__priceList}>
						<span>{post.description}</span>
					</div>
					<div className={styles.post__total}>
						{/* <div className={styles.post__favorite}>
							<FiHeart
								className={styles.post__favoriteIcon}
								onClick={e => e.stopPropagation()}
							/>
						</div> */}
						<div className={styles.post__totalPrice}>
							<span className={styles.post__textHeaders}>total:</span>
							<span className={styles.post__text}>{totalPrice}</span>
						</div>
					</div>
					{/* <div
		ref={overlayRef}
		className={cn(
			styles.post__overlay,
			overlayVisible ? styles.post__overlay_animation : ''
		)}
		style={{
			transform: `translate(${overlayPosition.x}px, ${overlayPosition.y}px)`
		}}
	/> */}
				</div>
				<Footer />
			</div>
		</Meta>
	)
}

export default Post
