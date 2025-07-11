import Image from "next/image"
import Link from "next/link"

export const Contact = () => {
	return (
		<>
			<section className="flex relative flex-col col-span-1 items-center">
				<div className="sm:w-auto w-[250px] m-auto">
					<Link
						href="mailto:admin@kjc.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center"
					>
						<Image
							src="/images/kjc-contact-footer.png"
							alt="KJC - Contact"
							width={388}
							height={66}
						/>
					</Link>
				</div>
			</section>
		</>
	)
}
