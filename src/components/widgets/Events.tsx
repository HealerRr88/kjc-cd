"use client"

import "@/assets/carousel/includes/swiper/swiper-bundle.min.css"
import "@/assets/carousel/css/main.css"

import Image from "next/image"

const Events = () => {
	return (
		<>
			<section className="max-w-full">
				<div className="carousel-block">
					<div className="container">
						<div className="slider-container">
							<div className="swiper mySwiper">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<a href="#1">
											<Image
												src="/images/slider3.png"
												alt="Ảnh 1"
												width={480}
												height={164}
												loading="lazy"
											/>
										</a>
									</div>
									<div className="swiper-slide">
										<a href="#2">
											<Image
												src="/images/slider3.png"
												alt="Ảnh 2"
												width={480}
												height={164}
												loading="lazy"
											/>
										</a>
									</div>
									<div className="swiper-slide">
										<a href="#3">
											<Image
												src="/images/slider3.png"
												alt="Ảnh 3"
												width={480}
												height={164}
												loading="lazy"
											/>
										</a>
									</div>
									<div className="swiper-slide">
										<a href="#4">
											<Image
												src="/images/slider3.png"
												alt="Ảnh 4"
												width={480}
												height={164}
												loading="lazy"
											/>
										</a>
									</div>
									<div className="swiper-slide">
										<a href="#5">
											<Image
												src="/images/slider3.png"
												alt="Ảnh 5"
												width={480}
												height={164}
												loading="lazy"
											/>
										</a>
									</div>
									<div className="swiper-slide">
										<a href="#6">
											<Image
												src="/images/slider3.png"
												alt="Ảnh 6"
												width={480}
												height={164}
												loading="lazy"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Events
