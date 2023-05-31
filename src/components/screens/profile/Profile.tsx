import { useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegTimesCircle } from 'react-icons/fa'
import { FiEdit, FiSave } from 'react-icons/fi'

import Button from '@/ui/button/Button'
import Input from '@/ui/input/Input'
import Loader from '@/ui/loader/Loader'
import Modal from '@/ui/modal/Modal'
import NotFound from '@/ui/notFound/NotFound'
import Paginate from '@/ui/paginate/Paginate'
import PostList from '@/ui/postList/PostList'

import { PageFilters } from '@/store/page/pageFilters.interface'
import { TypeRootState } from '@/store/store'

import { useProfile } from '@/hooks/useProfile'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { TypePaginationPosts } from '@/types/post.interface'

import styles from './Profile.module.scss'
import { PostService } from '@/services/post/post.service'
import { TypeData, UserService } from '@/services/user/user.service'

const Profile: FC = () => {
	const queryClient = useQueryClient()
	const profile = useProfile()
	const [modal, setModal] = useState<boolean>(false)
	const [postId, setPostId] = useState<string | number | null>(null)
	const [isEditing, setIsEditing] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState('')
	const [isReLoading, setIsReLoading] = useState(true)
	const pageFilters = useTypedSelector<PageFilters>(
		(state: TypeRootState) => state.pageFilters
	)
	const { data, isLoading } = useQuery<TypePaginationPosts>(
		['user posts', profile?.id, pageFilters.userPage],
		() =>
			PostService.getAll({
				user: profile?.id,
				page: pageFilters.userPage,
				perPage: pageFilters.perPage
			}),
		{
			keepPreviousData: true,
			staleTime: 60000,
			cacheTime: 600000
		}
	)
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		setError,
		reset,
		clearErrors
	} = useForm<TypeData>({
		mode: 'onChange'
	})
	useEffect(() => {
		// reset()
		// setPreviewImages([])
		// setSelectedFiles(null)
		// setSelectedCategoryId(CategoryEnum[0].key)
		if (profile) {
			console.log(profile)
			setValue('name', profile.name)
			setValue('email', profile.email)
			setValue('phone', profile.phone)
			setPreviewImages([profile.avatarPath])
			// setPreviewImages(data.images)
		}
		setIsReLoading(false)
	}, [profile])
	// Обработчик нажатия кнопки редактирования
	const handleEditClick = (e: any) => {
		e.preventDefault()
		e.stopPropagation()

		setIsEditing(true)
	}
	const handleNoEditClick = (e: any) => {
		setIsEditing(false)
		if (profile) {
			setPreviewImages([profile?.avatarPath])
		}
	}

	let editPostFiles: FileList | null = null
	const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)
	const [previewImages, setPreviewImages] = useState<string[]>([])
	const [errorSend, setErrorSend] = useState('')
	// Обработчик нажатия кнопки отправки данных
	const handleSubmitClick = async (data: any) => {
		const formData = new FormData()

		formData.append('name', data.name)
		formData.append('email', data.email)
		formData.append('phone', data.phone)
		if (selectedFiles) {
			formData.append('avatarPath', selectedFiles[0])
		}
		try {
			const res = await UserService.updateProfile(formData)
			setIsReLoading(true)
			window.location.reload()
		} catch (error: any) {
			console.log(error.message)
		}

		setIsEditing(false)
	}

	const handleDeletePost = (postId: string | number) => {
		setModal(true)
		setPostId(postId)
	}

	const handleDeleteButton = async () => {
		if (postId) {
			await PostService.delete(postId)

			queryClient.invalidateQueries([
				'user posts',
				profile?.id,
				pageFilters.userPage
			])

			setModal(false)
		}
	}

	const handlePreventButton = () => {
		setPostId(null)
		setModal(false)
	}
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
				if (profile) {
					setPreviewImages([profile?.avatarPath])
				}
			}
		}

		readImages()
	}, [selectedFiles])

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newFiles: FileList | null = e.target.files
		if (newFiles?.length === 0) {
			setSelectedFiles(null)

			editPostFiles = null
			setErrorSend('')
		} else {
			setSelectedFiles(newFiles)
			setErrorSend('')
		}
	}
	return (
		<div className={styles.profile}>
			<div className={styles.profile__navbar}></div>
			{isReLoading ? (
				<Loader />
			) : (
				<div>
					{' '}
					<form
						className={styles.profile__main}
						onSubmit={handleSubmit(handleSubmitClick)}
					>
						{previewImages.length ? (
							<div className={styles.profile__mainImageContainer}>
								<Image
									priority={true}
									src={previewImages[0]}
									alt='My Image'
									width={1000}
									height={500}
									className={styles.profile__mainImage}
								/>
								{isEditing && (
									<Button
										type='button'
										onClick={() =>
											(
												document.querySelector(
													'input[type=file]'
												) as HTMLInputElement
											)?.click()
										}
									>
										Змінити фото
									</Button>
								)}
							</div>
						) : (
							<div className={styles.profile__mainImageContainer} />
						)}
						<div className={styles.profile__mainInfo}>
							{isEditing ? (
								<div className={styles.profile__mainInfoContainer}>
									<Input
										className={styles.fileInput}
										placeholder='Фото'
										type='file'
										accept='.jpg,.jpeg,.png'
										{...register('avatarPath')}
										onChange={handleFileChange}
									/>
									<Input
										type='text'
										placeholder="Вкажіть ім'я"
										label="Вкажіть ім'я"
										{...register('name', {
											required: "Вкажіть ім'я"
										})}
										error={errors.name?.message}
									/>
									<Input
										type='text'
										placeholder='Вкажіть пошту'
										label='Вкажіть пошту'
										{...register('email', {
											required: 'Вкажіть пошту'
										})}
										error={errors.email?.message}
									/>
									<Input
										type='text'
										placeholder='Вкажіть телефон'
										label='Вкажіть телефон'
										{...register('phone', {
											required: 'Вкажіть телефон'
										})}
										error={errors.phone?.message}
									/>
								</div>
							) : (
								<div className={styles.profile__mainInfoContainer}>
									<div className={styles.profile__name}>{profile?.name}</div>
									<div className={styles.profile__email}>{profile?.email}</div>
									<div className={styles.profile__phone}>{profile?.phone}</div>
								</div>
							)}
						</div>
						{!isEditing ? (
							<div className={styles.profile__edit}>
								<Button
									type='button'
									variant='editProfile'
									onClick={handleEditClick}
								>
									<FiEdit className={styles.profile__editIcon} />
								</Button>
							</div>
						) : (
							<div className={styles.profile__edit}>
								<Button type='submit' variant='editProfile'>
									<FiSave className={styles.profile__editIcon} />
								</Button>
								<Button
									type='button'
									variant='noEditProfile'
									onClick={handleNoEditClick}
								>
									<FaRegTimesCircle className={styles.profile__editIcon} />
								</Button>
							</div>
						)}
					</form>
					{isLoading ? (
						<Loader />
					) : (
						<div className={styles.profile__posts}>
							<h1 className={styles.profile__heading}>Мої оголошення</h1>
							{data?.length ? (
								<PostList
									isProfileList={true}
									length={data?.length ? data.length : 0}
									posts={data?.posts ? data.posts : []}
									onDeletePost={handleDeletePost}
								></PostList>
							) : (
								<NotFound />
							)}

							{data?.length ? (
								<Paginate data={data} userPage={true} />
							) : (
								<div />
							)}
						</div>
					)}
					<Modal visible={modal} setVisible={setModal}>
						<h3 className={styles.profile__modalHeading}>Видалити пост?</h3>
						<div className={styles.profile__modalButtons}>
							<Button variant='alert' onClick={handleDeleteButton}>
								Так
							</Button>
							<Button onClick={handlePreventButton}>Ні</Button>
						</div>
					</Modal>
				</div>
			)}
		</div>
	)
}

export default Profile
