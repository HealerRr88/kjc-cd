import Image from "next/image"

const DEFAULT_WIDTH = 137
const DEFAULT_HEIGHT = 137

export const stackDataThird = [
	{
		name: "vietnam",
		title: "Việt Nam",
		link: "https://Kjcvn.com",
		icon: (
			<Image
				src="/images/kjc-vietnam.gif"
				title="KJC - Việt Nam"
				alt="KJC - Việt Nam"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
				unoptimized
			/>
		)
	},
	{
		name: "brazil",
		title: "Brazil",
		link: "https://kjcbz.com",
		icon: (
			<Image
				src="/images/kjc-brazil.gif"
				title="KJC - Brazil"
				alt="KJC - Brazil"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
				unoptimized
			/>
		)
	},
	{
		name: "philippines",
		title: "Philippines",
		link: "https://kjcph.com",
		icon: (
			<Image
				src="/images/kjc-philippine.gif"
				title="KJC - Philippines"
				alt="KJC - Philippines"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
				unoptimized
			/>
		)
	},
	{
		name: "myanmar",
		title: "Myanmar",
		link: "https://kjcmm.com",
		icon: (
			<Image
				src="/images/kjc-myanmar.gif"
				title="KJC - Myanmar"
				alt="KJC - Myanmar"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
				unoptimized
			/>
		)
	},
	{
		name: "pakistan",
		title: "Pakistan",
		link: "https://kjcpkt.com",
		icon: (
			<Image
				src="/images/kjc-pakistan.gif"
				title="KJC - Pakistan"
				alt="KJC - Pakistan"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
				unoptimized
			/>
		)
	}
]
