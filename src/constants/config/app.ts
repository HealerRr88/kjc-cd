export const APP_CONFIG = {
	GA_ID: process.env.NEXT_PUBLIC_GA_ID,
	API_TIMEOUT: 10000,
	APP_NAME: "KJC",
	APP_VERSION: "1.0.0",
	DEFAULT_LANGUAGE: "vi",
	DEFAULT_THEME: "light",
	SITE_URL: process.env.NEXT_PUBLIC_APP_URL || "https://kjc.com",
	APP_DESCRIPTION: "KJC",
	APP_KEYWORDS: [
		"kjc",
		"tập đoàn kjc",
		"trang chủ kjc",
		"rr88",
		"mm88",
		"xx88"
	] as string[],
	CREATOR: "kjc",
	TWITTER_HANDLE: "@kjc"
} as const

export type AppConfig = keyof typeof APP_CONFIG

export const CURRENCY_CONFIG = {
	VND: {
		locale: "vi-VN",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	},
	USD: {
		locale: "en-US",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}
} as const

export const DEFAULT_CURRENCY = "VND" as const
export type CurrencyCode = keyof typeof CURRENCY_CONFIG
