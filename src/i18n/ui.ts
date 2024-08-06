import SpainFlag from "@/components/flags/Spain.astro"
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro"

export const LANGUAGES: Record<string, { code: string; name: string; flag: typeof SpainFlag }> = {
	en: {
		code: "en",
		name: "English",
		flag: UnitedStatesFlag,
	},
	es: {
		code: "es",
		name: "Español",
		flag: SpainFlag,
	},
}

export const defaultLang = "en"
export const showDefaultLang = false

export const ui = {
	es: {
		"nav.home": "Inicio",
		"nav.what-we-offer": "Nuestros Servicios",
		"nav.support": "Soporte",
		"nav.order-online": "Ordena en línea",
		"nav.blog": "Blog",
	},
	en: {
		"nav.home": "Home",
		"nav.what-we-offer": "What we offer",
		"nav.support": "Support",
		"nav.order-online": "Order Online",
		"nav.blog": "Blog",
	},
} as const

export const routes = {
	es: {
		"what-we-offer": "nuestros-servicios",
		"support": "soporte",
		"order-online": "ordena-en-linea",
		"blog": "blog",

		// BLOGS
		"blog/improve-customer-experience-restaurant": "mejorar-experiencia-cliente-restaurante",
		"improve-customer-experience-restaurant": "blog/mejorar-experiencia-cliente-restaurante",
	},
	en: {
		"what-we-offer": "what-we-offer",
		"support": "support",
		"blog": "blog",
	},
}
