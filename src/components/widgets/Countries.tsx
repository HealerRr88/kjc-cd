"use client"

import { stackData } from "@/data/stack-data"

export const Countries = () => {
	return (
		<>
			<video
				autoPlay
				loop
				muted
				className="fixed top-0 right-0 bottom-0 left-0 min-w-fit min-h-fit w-full h-full -z-10"
			>
				<source src="/videos/intro.webm" type="video/webm" />
				<source src="/videos/intro.mp4" type="video/mp4" />
			</video>

			<section className="flex overflow-hidden relative flex-col col-span-1 justify-between items-center md:col-span-2 xl:col-span-8">
				<div className="flex flex-wrap gap-5 justify-center items-center gap-y-5 gap-x-16 sm:gap-x-16 sm:gap-y-16">
					{stackData.map((item) => (
						<article key={item.name}>
							<figure className="flex flex-col gap-3 justify-center items-center w-[107px] h-[145px] sm:w-[137px] sm:h-[183px]">
								{item.icon}
								<figcaption className="flex justify-center items-center sm:text-xl text-base font-medium text-center text-white">
									{item.title}
								</figcaption>
							</figure>
						</article>
					))}
				</div>
			</section>
		</>
	)
}
