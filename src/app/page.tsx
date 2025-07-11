import {
	BannerFooter,
	Contact,
	CountriesThird,
	KJCThird
} from "@/components/widgets"

const backgroundScreen =
	"min-h-screen min-w-screen flex flex-col justify-center sm:gap-10 gap-5 bg-[url('/images/kjc-bg.png')] bg-no-repeat bg-center bg-cover"

export default function EventsSecond() {
	return (
		<>
			<div className={backgroundScreen}>
				<div className="container-lg">
					<KJCThird />
				</div>

				<div className="bg-gray-500/30 backdrop-blur-2xl backdrop-opacity-10 py-5 sm:py-10">
					<div className="container">
						<CountriesThird />
					</div>
				</div>

				<div className="container">
					<BannerFooter />
					<Contact />
				</div>
			</div>
		</>
	)
}
