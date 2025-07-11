import Balancer from "react-wrap-balancer"
import Image from "next/image"

export const KJCSecond = () => {
	return (
		<section className="flex flex-col gap-6 items-center">
			<Balancer as="h1" className="text-center text-gray-500 md:text-xl">
				<Image
					src="/images/kjc-sologan.png"
					alt="kjc logo"
					title="kjc logo"
					width={230}
					height={151}
					priority
				/>
			</Balancer>
		</section>
	)
}
