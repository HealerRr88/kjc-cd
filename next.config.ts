import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizeCss: false // 👈 Tắt lightningcss
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	images: {
		unoptimized: true
	},
	output: "export", // ⚠️ Quan trọng để export static!
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
		})
		return config
	}
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
