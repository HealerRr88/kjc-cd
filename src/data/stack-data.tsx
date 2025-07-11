import Image from "next/image"

const DEFAULT_WIDTH = 137
const DEFAULT_HEIGHT = 137

export const stackData = [
	{
		name: "vietnam",
		title: "Việt Nam",
		icon: (
			<Image
				src="/images/kjc-vietnam.gif"
				title="KJC - Việt Nam"
				alt="KJC - Việt Nam"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
			/>
		)
	},
	{
		name: "brazil",
		title: "Brazil",
		icon: (
			<Image
				src="/images/kjc-brazil.gif"
				title="KJC - Brazil"
				alt="KJC - Brazil"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
			/>
		)
	},
	{
		name: "philippines",
		title: "Philippines",
		icon: (
			<Image
				src="/images/kjc-philippine.gif"
				title="KJC - Philippines"
				alt="KJC - Philippines"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
			/>
		)
	},
	{
		name: "myanmar",
		title: "Myanmar",
		icon: (
			<Image
				src="/images/kjc-myanmar.gif"
				title="KJC - Myanmar"
				alt="KJC - Myanmar"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
			/>
		)
	},
	{
		name: "pakistan",
		title: "Pakistan",
		icon: (
			<Image
				src="/images/kjc-pakistan.gif"
				title="KJC - pakistan"
				alt="KJC - pakistan"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
			/>
		)
	}
]
