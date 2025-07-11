"use client"

import Image from "next/image"

import { stackDataSeconds } from "@/data/stack-data-seconds"

const DEFAULT_WIDTH = 811 - 100
const DEFAULT_HEIGHT = 695 - 100

export const CountriesSecond = () => {
	return (
		<>
			<section className="flex overflow-hidden relative flex-col col-span-1 justify-between items-center md:col-span-2 xl:col-span-8">
				<div className="flex justify-center items-center text-center">
					<Image
						src="/images/kjc-ambassador.png"
						alt="KJC - Contact"
						title="KJC - Contact"
						width={DEFAULT_WIDTH}
						height={DEFAULT_HEIGHT}
					/>
				</div>

				<div className="flex relative justify-center items-center top-[-90]">
					<div className="flex flex-wrap gap-5 justify-center items-center gap-y-5 gap-x-16 sm:gap-x-16 sm:gap-y-16">
						{stackDataSeconds.map((item) => (
							<article key={item.name}>
								<figure className="flex flex-col gap-3 justify-center items-center w-[107px] h-[145px] sm:w-[137px] sm:h-[183px]">
									{item.icon}
									<figcaption className="flex justify-center items-center sm:text-xl text-base font-medium text-center text-black">
										{item.title}
									</figcaption>
								</figure>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
