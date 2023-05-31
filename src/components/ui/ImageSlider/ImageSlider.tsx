import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import styles from './ImageSlider.module.scss'

function SampleNextArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles.arrowRight} onClick={onClick}>
			<RiArrowRightSLine className={styles.arrowRightIcon} />
		</div>
	)
}

function SamplePrevArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles.arrowLeft} onClick={onClick}>
			<RiArrowLeftSLine className={styles.arrowLeftIcon} />
		</div>
	)
}

function ImageSlider({ images }: any) {
	const [currentImage, setCurrentImage] = useState(0)
	const settings = {
		dots: true,
		infinite: true,
		speed: 200,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: styles.slick_dots,
		nextArrow: (
			<SampleNextArrow
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
				imagesLength={images.length}
			/>
		),
		prevArrow: (
			<SamplePrevArrow
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
				imagesLength={images.length}
			/>
		),
		afterChange: (current: any) => setCurrentImage(current),
		appendDots: (dots: JSX.Element[]) => (
			<div>
				<ul className={styles.dots}>{dots}</ul>
			</div>
		),
		customPaging: (i: number) => (
			<div className={cn(i === currentImage ? styles.active : '', styles.dot)}>
				<Image
					width={192}
					height={108}
					className={styles.dotImage}
					src={images[i]}
					alt={images[i]}
				/>
			</div>
		)
	}

	return (
		<Slider {...settings} className={styles.slider}>
			{images.map((image: any, index: number) => (
				<div className={styles.imageContainer} key={index}>
					<Image
						width={1920}
						height={1080}
						className={styles.image}
						src={image}
						alt={image}
					/>
				</div>
			))}
		</Slider>
	)
}

export default ImageSlider
