import Balancer from "react-wrap-balancer"
import Image from "next/image"

export const KJCThird = () => {
	return (
		<section className="flex flex-col gap-6 items-center">
			<div className="sm:w-auto w-[350px] m-auto">
				<Balancer as="h1" className="text-center text-gray-500 md:text-xl">
					<Image
						src="/images/logo-kjc-juventus.png"
						alt="kjc logo"
						title="kjc logo"
						width={686}
						height={253}
						priority
					/>
				</Balancer>
			</div>
		</section>
	)
}
