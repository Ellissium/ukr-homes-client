import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { BiArea } from 'react-icons/bi'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import {
	MdOutlineBathroom,
	MdOutlineBedroomChild,
	MdOutlineBedroomParent,
	MdOutlinePriceChange
} from 'react-icons/md'
import { RiBuilding4Line } from 'react-icons/ri'

import ImageSlider from '@/ui/ImageSlider/ImageSlider'
import Button from '@/ui/button/Button'

import { IPostDetails } from '@/types/post.interface'

import styles from './Post.module.scss'
import { RegionEnum } from '@/services/category/dropdownEnum.types'

const Post: FC<IPostDetails> = ({ post }) => {
	const router = useRouter()
	function handleClick() {
		router.back()
	}

	return (
		<div className={styles.post}>
			<div className={styles.post__main} />
			<div className={styles.post__container}>
				<div className={styles.post__router}>
					<Button type='button' onClick={handleClick}>
						{'<- Назад'}
					</Button>
					<div className={styles.post__routerPath}>
						<Link href='/posts' className={styles.post__Link}>
							posts
						</Link>
						<span>{' > '}</span>
						<Link
							href={`/posts/${post.category.slug}`}
							className={styles.post__Link}
						>
							{post.category.slug}
						</Link>
						<span>{' > '}</span>
						<span>{post.slug}</span>
					</div>
				</div>
				<div className={styles.post__item}>
					<ImageSlider images={post.images} />
				</div>
				<div className={styles.post__mainInformation}>
					<h2 className={styles.post__textHeaders}>
						{'№' + post.id + ' ' + post.name}
					</h2>
					<span className={styles.post__text}>
						{post.city +
							', ' +
							post.street +
							' ' +
							post.houseNumber +
							', ' +
							RegionEnum.find(item => item.key === post.region)?.value}
					</span>
				</div>
				<div className={styles.post__secondaryInformation}>
					<span className={styles.post__textHeaders}>Головна інформація:</span>
					<div className={styles.post__descriptionField}>
						<BiArea className={styles.post__descriptionFieldIcon} />
						<div className={styles.post__text}>Площа: {post.area} м2</div>
					</div>
					<div className={styles.post__descriptionField}>
						<RiBuilding4Line className={styles.post__descriptionFieldIcon} />
						<div className={styles.post__text}>Поверх: {post.floor}</div>
					</div>
					<div className={styles.post__descriptionField}>
						<MdOutlineBedroomParent
							className={styles.post__descriptionFieldIcon}
						/>
						<div className={styles.post__text}>
							Кількість кімнат: {post.roomsNumber}
						</div>
					</div>
					<div className={styles.post__descriptionField}>
						<MdOutlineBedroomChild
							className={styles.post__descriptionFieldIcon}
						/>
						<div className={styles.post__text}>
							Кількість ліжок: {post.bedsNumber}
						</div>
					</div>
					<div className={styles.post__descriptionField}>
						<MdOutlineBathroom className={styles.post__descriptionFieldIcon} />
						<div className={styles.post__text}>
							Кількість санвузлів: {post.bathroomsNumber}
						</div>
					</div>
					<div className={styles.post__descriptionField}>
						<IoCalendarNumberOutline
							className={styles.post__descriptionFieldIcon}
						/>
						<div className={styles.post__text}>
							Мінімальна оренда на: {post.minRentalPeriod} місяців
						</div>
					</div>
				</div>
				<div className={styles.post__description}>
					<span className={styles.post__textHeaders}>Опис:</span>
					<span>{post.description}</span>
				</div>
				<div className={styles.post__total}>
					<span className={styles.post__textHeaders}>Ціна:</span>

					<div className={styles.post__descriptionField}>
						<MdOutlinePriceChange
							className={styles.post__descriptionFieldIcon}
						/>
						<div className={styles.post__text}>
							{post.category.id !== 2
								? 'Комунальні послуги: ' + post.utilitiesPrice + ' ₴'
								: 'Додаткові витрати: ' + post.utilitiesPrice + ' ₴'}
						</div>
					</div>
					{post.category.id === 2 ? (
						<div className={styles.post__descriptionField}>
							<MdOutlinePriceChange
								className={styles.post__descriptionFieldIcon}
							/>
							<div className={styles.post__text}>
								{'Ціна за м²: ' + (post.price / post.area).toFixed(2) + ' ₴'}
							</div>
						</div>
					) : (
						<div className={styles.post__descriptionField}>
							<MdOutlinePriceChange
								className={styles.post__descriptionFieldIcon}
							/>
							<div className={styles.post__text}>
								{'Ціна: ' + post.price + ' ₴'}
							</div>
						</div>
					)}
					{post.category.id !== 2 ? (
						<div className={styles.post__descriptionField}>
							<MdOutlinePriceChange
								className={styles.post__descriptionFieldIcon}
							/>
							<div className={styles.post__text}>
								Разом: {post.utilitiesPrice + post.price + ' ₴'}
							</div>
						</div>
					) : (
						<div className={styles.post__descriptionField}>
							<MdOutlinePriceChange
								className={styles.post__descriptionFieldIcon}
							/>
							<div className={styles.post__text}>
								Разом:{' '}
								{(post.price / post.area + post.utilitiesPrice).toFixed(2) +
									' ₴'}
							</div>
						</div>
					)}
				</div>
				<div className={styles.post__authorInfo}>
					<span className={styles.post__textHeaders}>Контакти:</span>
					<div className={styles.post__authorInfoContainer}>
						<img
							src={post.author.avatarPath}
							className={styles.post__authorPhoto}
						/>
						<div className={styles.post__authorMainInfo}>
							<span className={styles.post__text}>{post.author.name}</span>
							<span className={styles.post__text}>{post.author.email}</span>
							<span className={styles.post__text}>{post.author.phone}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post
