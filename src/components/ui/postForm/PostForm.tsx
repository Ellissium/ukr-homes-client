import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useProfile } from '@/hooks/useProfile'

import { IPost } from '@/types/post.interface'

import { convertFilesToFileList } from '@/utils/fileConverter'

import ImageSlider from '../ImageSlider/ImageSlider'
import Button from '../button/Button'
import Dropdown from '../dropdown/Dropdown'
import Input from '../input/Input'

import styles from './PostForm.module.scss'
import { IPostFormProps } from './PostFrom.interface'
import {
	CategoryEnum,
	RegionEnum
} from '@/services/category/dropdownEnum.types'
import { PostService } from '@/services/post/post.service'

const PostForm: FC<IPostFormProps> = ({ postId, title = 'Форма' }) => {
	const router = useRouter()
	const maxFiles = 10
	const [errorSend, setErrorSend] = useState('')
	const profile = useProfile()
	let editPostFiles: FileList | null = null
	const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)
	const [previewImages, setPreviewImages] = useState<string[]>([])
	const [post, setPost] = useState<IPost | null>(null)
	const [selectedCategoryId, setSelectedCategoryId] = useState(
		CategoryEnum[0].key
	)
	const [selectedRegionId, setSelectedRegionId] = useState(RegionEnum[0].key)
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		setError,
		reset,
		clearErrors
	} = useForm<IPost>({
		mode: 'onChange'
	})

	useEffect(() => {
		reset()
		setPreviewImages([])
		setSelectedFiles(null)
		setSelectedCategoryId(CategoryEnum[0].key)
		setSelectedRegionId(RegionEnum[0].key)
		const fetchPost = async () => {
			try {
				if (typeof postId === 'string') {
					const data = await PostService.getById(postId)
					setPost(data)
					setValue('category.id', data.category.id)
					setValue('name', data.name)
					setValue('description', data.description)
					setValue('price', data.price)
					setValue('utilitiesPrice', data.utilitiesPrice)
					setValue('floor', data.floor)
					setValue('area', data.area)
					setValue('minRentalPeriod', data.minRentalPeriod)
					setValue('roomsNumber', data.roomsNumber)
					setValue('bedsNumber', data.bedsNumber)
					setValue('bathroomsNumber', data.bathroomsNumber)
					setValue('region', data.region)
					setValue('city', data.city)
					setValue('street', data.street)
					setValue('houseNumber', data.houseNumber)
					setValue('mapCoordinates', data.mapCoordinates)
					setPreviewImages(data.images)
				}
			} catch (error) {
				router.push('/posts/newPost')
				console.error('Помилка при отриманні даних поста', error)
			}
		}

		if (postId) {
			fetchPost()
		}
	}, [postId])

	useEffect(() => {
		setPreviewImages([])
		const readImages = async () => {
			const urls: string[] = []
			if (selectedFiles) {
				for (let i = 0; i < selectedFiles.length; i++) {
					const file = selectedFiles[i]
					const reader = new FileReader()
					reader.readAsDataURL(file)
					reader.onload = () => {
						urls.push(reader.result as string)
						if (urls.length === selectedFiles.length) {
							setPreviewImages(urls)
						}
					}
				}
			} else {
				setPreviewImages([])
			}
		}

		readImages()
	}, [selectedFiles])

	useEffect(() => {
		if (post && post.category) {
			const selectedCategory = CategoryEnum.find(
				item => item.key === post.category.id.toString()
			)
			setValue('category.id', post.category.id)
			setSelectedCategoryId(
				selectedCategory ? selectedCategory.key : CategoryEnum[1].key
			)

			console.log(selectedCategory)
		}
		if (post && post.region) {
			const selectedRegion = RegionEnum.find(item => item.key === post.region)
			setValue('category.id', post.category.id)
			setSelectedRegionId(
				selectedRegion ? selectedRegion.key : RegionEnum[1].key
			)

			console.log(selectedRegion)
		}
	}, [post])

	const handleCategoryChange = (selectedKey: string) => {
		// setSelectedCategoryId(selectedKey)
		setValue('category.id', +selectedKey)
		console.log(selectedKey)
	}

	const handleRegionChange = (selectedKey: string) => {
		// setSelectedRegionId(selectedKey)
		setValue('region', selectedKey)
		console.log(selectedKey)
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newFiles: FileList | null = e.target.files
		if (newFiles?.length === 0) {
			setSelectedFiles(newFiles)
			editPostFiles = null
			setErrorSend('')
			setError('images', {
				type: 'required',
				message: 'Додайте зображення'
			})
		} else if (newFiles && newFiles.length > maxFiles) {
			setSelectedFiles(newFiles)
			editPostFiles = null
			clearErrors('images')
			setErrorSend(`Оберіть не більше ${maxFiles} файлів`)
		} else {
			clearErrors('images')
			setSelectedFiles(newFiles)
			setErrorSend('')
		}
	}

	const onSubmit = async (data: IPost) => {
		const formData = new FormData()

		if (!selectedFiles && !errors.images) {
			try {
				const files = []

				for (const url of previewImages) {
					const response = await fetch(url)

					if (!response.ok) {
						throw new Error(`Не вдалось отримати файл за ${url}`)
					}

					const arrayBuffer = await response.arrayBuffer()
					const extension = url.split('.').pop()
					const file = new File([arrayBuffer], `filename.${extension}`, {
						type: `image/${extension}`
					})
					files.push(file)
				}
				editPostFiles = convertFilesToFileList(files)
			} catch (error) {
				console.error(error)
			}
		} else {
			editPostFiles = selectedFiles
		}

		formData.append('categoryId', data.category.id.toString())
		formData.append('authorId', profile ? profile?.id.toString() : '')
		formData.append('id', post ? post?.id.toString() : '')
		formData.append('name', data.name)
		formData.append('description', data.description)
		formData.append('price', data.price.toString())
		formData.append('utilitiesPrice', data.utilitiesPrice.toString())
		formData.append('floor', data.floor.toString())
		formData.append('area', data.area.toString())
		formData.append('minRentalPeriod', data.minRentalPeriod.toString())
		formData.append('roomsNumber', data.roomsNumber.toString())
		formData.append('bedsNumber', data.bedsNumber.toString())
		formData.append('bathroomsNumber', data.bathroomsNumber.toString())
		formData.append('region', data.region)
		formData.append('city', data.city)
		formData.append('street', data.street)
		formData.append('houseNumber', data.houseNumber)
		formData.append('mapCoordinates', data.mapCoordinates)

		if (postId && editPostFiles) {
			for (let i = 0; i < editPostFiles.length; i++) {
				formData.append('images', editPostFiles[i])
			}
			try {
				const res = await PostService.update(+data.id, formData)
				router.push('/posts/newPost')
			} catch (error: any) {
				console.log(error.message)
			}
			setPreviewImages([])
			reset()
		} else if (!postId && selectedFiles && !errorSend) {
			for (let i = 0; i < selectedFiles.length; i++) {
				formData.append('images', selectedFiles[i])
			}
			try {
				const res = await PostService.create(formData)
			} catch (error: any) {
				console.log(error.message)
			}
			setPreviewImages([])
			reset()
		} else {
			setErrorSend(`Оберіть не більше ${maxFiles} файлів`)
		}
	}

	return (
		<form className={styles.postForm} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.postForm__heading}>
				{postId ? 'Редагування оголошення №' + postId : title}
			</h2>
			<div className={styles.postForm__category}>
				<h3 className={styles.postForm__categoryHeading}>
					Оберіть категорію оголошення
				</h3>
				{selectedCategoryId && (
					<Dropdown
						key={selectedCategoryId}
						enumValues={CategoryEnum}
						defaultValue={selectedCategoryId}
						onDropdownChange={handleCategoryChange}
					/>
				)}
			</div>
			<div className={styles.postForm__title}>
				<h3 className={styles.postForm__categoryHeading}>
					Заголовок оголошення
				</h3>
				<Input
					placeholder='Заголовок'
					{...register('name', {
						required: 'Напишіть заголовок для оголошення'
					})}
					error={errors.name?.message}
				/>
			</div>
			{/* <Input
				placeholder='Activity'
				type='checkbox'
				{...register('activity')}
			/> */}
			<div className={styles.postForm__mainInfo}>
				<h3 className={styles.postForm__categoryHeading}>Опис оголошення</h3>
				<textarea
					id='description'
					className={cn(
						errors.description && styles.textareaError,
						styles.postForm__mainInfoDescription
					)}
					placeholder='Опис'
					{...register('description', {
						required: 'Напишіть опис для оголошення'
					})}
				/>
				{errors.description && (
					<span className={styles.error}>{errors.description.message}</span>
				)}
			</div>

			<div className={styles.postForm__mainInfo}>
				<h3 className={styles.postForm__categoryHeading}>Основна інформація</h3>
				<div className={styles.postForm__mainInfoInputs}>
					<Input
						className={styles.numbers}
						placeholder='Ціна'
						label='Ціна'
						type='number'
						{...register('price', {
							required: 'Вкажіть ціну'
						})}
						error={errors.price?.message}
					/>
					<Input
						className={styles.numbers}
						placeholder='Ціна за комунальні послуги'
						label='Ціна за комунальні послуги'
						type='number'
						{...register('utilitiesPrice', {
							required: 'Вкажіть ціну за комунальні послуги'
						})}
						error={errors.utilitiesPrice?.message}
					/>

					<Input
						className={styles.numbers}
						placeholder='Поверх'
						label='Поверх'
						type='number'
						min='0'
						{...register('floor', {
							required: 'Вкажіть поверх'
						})}
						error={errors.floor?.message}
					/>
					<Input
						className={styles.numbers}
						placeholder='Площа'
						label='Площа'
						type='number'
						{...register('area', {
							required: 'Вкажіть площу'
						})}
						error={errors.area?.message}
					/>
					<Input
						className={styles.numbers}
						placeholder='Мінімамльний час оренди (в місяцях)'
						label='Мінімамльний час оренди (в місяцях)'
						type='number'
						{...register('minRentalPeriod', {
							required: 'Вкажіть мінімальний час оренди'
						})}
						error={errors.minRentalPeriod?.message}
					/>
				</div>
			</div>

			<div className={styles.postForm__mainInfo}>
				<h3 className={styles.postForm__categoryHeading}>
					Додаткова інформація
				</h3>
				<div className={styles.postForm__mainInfoInputs}>
					<Input
						className={styles.numbers}
						placeholder='Кількість кімнат'
						label='Кількість кімнат'
						type='number'
						{...register('roomsNumber', {
							required: 'Вкажіть кількість кімнат'
						})}
						error={errors.roomsNumber?.message}
					/>
					<Input
						className={styles.numbers}
						placeholder='Кількість ліжок'
						label='Кількість ліжок'
						type='number'
						{...register('bedsNumber', {
							required: 'Вкажіть кількість ліжок'
						})}
						error={errors.bedsNumber?.message}
					/>
					<Input
						className={styles.numbers}
						placeholder='Кількість ванних кімнат'
						label='Кількість ванних кімнат'
						type='number'
						{...register('bathroomsNumber', {
							required: 'Вкажіть кількість ванних кімнат'
						})}
						error={errors.bathroomsNumber?.message}
					/>
				</div>
			</div>

			<div className={styles.postForm__mainInfo}>
				<h3 className={styles.postForm__categoryHeading}>Розсташування </h3>
				<div className={styles.postForm__mainInfoInputs}>
					<div className={styles.postForm__regionDropdown}>
						<div className={styles.postForm__regionDropdownText}>Регіон</div>
						{selectedRegionId && (
							<Dropdown
								key={selectedRegionId}
								regiondropdown={true}
								enumValues={RegionEnum}
								defaultValue={selectedRegionId}
								onDropdownChange={handleRegionChange}
							/>
						)}
					</div>

					{/* <Input
						placeholder='Регіон'
						label='Регіон'
						{...register('region', {
							required: 'Вкажіть регіон'
						})}
						error={errors.region?.message}
					/> */}
					<Input
						placeholder='Місто'
						label='Місто'
						{...register('city', {
							required: 'Вкажіть місто'
						})}
						error={errors.city?.message}
					/>
					<Input
						placeholder='Вулиця'
						label='Вулиця'
						{...register('street', {
							required: 'Вкажіть вулицю'
						})}
						error={errors.street?.message}
					/>
					<Input
						placeholder='Номер дому'
						label='Номер дому'
						{...register('houseNumber', {
							required: 'Вкажіть номер дому'
						})}
						error={errors.houseNumber?.message}
					/>
					<Input
						placeholder='Координати'
						label='Координати'
						{...register('mapCoordinates', {
							required: 'Вкажіть координати'
						})}
						error={errors.mapCoordinates?.message}
					/>
				</div>
			</div>

			<div className={styles.postForm__gallery}>
				<h3 className={styles.postForm__categoryHeading}>Галерея </h3>
				<div className={styles.postForm__galleryList}>
					<Button
						type='button'
						onClick={() =>
							(
								document.querySelector('input[type=file]') as HTMLInputElement
							)?.click()
						}
					>
						Додати фото
					</Button>
					<Input
						className={styles.fileInput}
						placeholder='Фото'
						type='file'
						accept='.jpg,.jpeg,.png'
						multiple
						{...register('images')}
						onChange={handleFileChange}
					/>
					{errorSend == '' && errors.images && (
						<span className={styles.error}>{errors.images.message}</span>
					)}
					{errorSend && <div className={styles.error}>{errorSend}</div>}
					{previewImages.length > 0 && (
						<div className={styles.selectedFiles}>
							<h4
								className={cn(
									previewImages.length > 10 ? styles.selectedFiles__error : '',
									styles.selectedFiles__heading
								)}
							>
								Обрані файли: {previewImages.length}/10
							</h4>
						</div>
					)}
				</div>
			</div>
			{/* <div className={styles.postForm__mainInfo}> */}
			{previewImages.length < 11 && (
				<div className={styles.post__item}>
					<ImageSlider images={previewImages} />
				</div>
			)}
			{/* </div> */}
			<div className={styles.postForm__mainInfo}>
				<Button type='submit'>
					{postId ? 'Редагувати оголошення' : 'Розмістити оголошення'}
				</Button>
			</div>
		</form>
	)
}

export default PostForm
