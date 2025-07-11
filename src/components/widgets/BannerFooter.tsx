import Image from "next/image"

export const BannerFooter = () => {
	return (
		<>
			<section className="flex relative flex-col col-span-1 items-center sm:pb-8 pb-5">
				<div className="max-w-3xl m-auto">
					<Image
						src="/images/kjc-footer.png"
						alt="KJC - Info"
						width={1515}
						height={214}
					/>
				</div>
			</section>
		</>
	)
}
