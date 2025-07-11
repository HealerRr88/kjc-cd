import Balancer from "react-wrap-balancer"
import Image from "next/image"

export const KJC = () => {
	return (
		<section className="flex flex-col gap-6 items-center">
			<Balancer as="h1" className="text-center text-gray-500 md:text-xl">
				<Image
					src="/images/kjc-logo-intro.png"
					alt="kjc logo"
					title="kjc logo"
					width={252}
					height={166}
					priority
				/>
			</Balancer>
		</section>
	)
}
