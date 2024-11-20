import { useState, useRef, useEffect } from "react";
import styles from "./Slider.module.css";
import Image from "next/image";

interface SliderProps {
	images?: {
		src: string;
		alt: string;
		id: string;
	}[];
}

const Slider = ({ images = [] }: SliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);

	const handlePrevious = () => {
		setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const handleDotClick = (index: number) => {
		setCurrentSlide(index);
	};

	useEffect(() => {
		if (trackRef.current) {
			trackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
		}
	}, [currentSlide]);

	if (images.length === 0) {
		return (
			<div className={styles.containerGallery}>
				<div className={styles.gallery}>
					<div className={styles.placeholder}>
						<div className={styles.placeholderContent}>No images available</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.containerGallery}>
			<div className={styles.gallery}>
				<div className={styles.gliderTrack} ref={trackRef}>
					{images.map((image) => (
						<figure key={image.id} className={styles.frame}>
							{image.src ? (
								<Image
									className={styles.image}
									src={image.src}
									alt={image.alt}
									fill
									sizes="100vw"
									priority={images.indexOf(image) === 0}
								/>
							) : (
								<div className={styles.imagePlaceholder}>Image not available</div>
							)}
						</figure>
					))}
				</div>
			</div>

			{images.length > 1 && (
				<div className={styles.galleryNav}>
					<button
						type="button"
						aria-label="Previous"
						className={styles.galleryPrev}
						onClick={handlePrevious}
					>
						←
					</button>

					<div className={styles.dots}>
						{images.map((image) => (
							<button
								type="button"
								key={image.id}
								aria-label={`Go to slide ${images.indexOf(image) + 1}`}
								className={`${styles.gliderDot} ${
									images.indexOf(image) === currentSlide ? styles.active : ""
								}`}
								onClick={() => handleDotClick(images.indexOf(image))}
							/>
						))}
					</div>

					<button
						type="button"
						aria-label="Next"
						className={styles.galleryNext}
						onClick={handleNext}
					>
						→
					</button>
				</div>
			)}
		</div>
	);
};

export default Slider;
