"use client"

import { stackDataThird } from "@/data/stack-data-third"

export const CountriesThird = () => {
	return (
		<>
			<section className="flex overflow-hidden relative flex-col col-span-1 gap-10 justify-between items-center md:col-span-2 xl:col-span-8">
				<div className="flex relative justify-center items-center">
					<div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-8 sm:gap-x-16 sm:gap-y-14">
						{stackDataThird.map((item) => (
							<article key={item.name}>
								<figure className="flex flex-col gap-3 justify-center items-center w-[87px] h-[125px] sm:w-[137px] sm:h-[183px]">
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
