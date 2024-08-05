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
		"nav.inicio": "Inicio",
		"nav.nuestros-servicios": "Nuestros Servicios",
		"nav.soporte": "Soporte",
		"nav.blog": "Blog",
	},
	en: {
		"nav.inicio": "Home",
		"nav.what-we-offer": "What we offer",
		"nav.support": "Support",
		"nav.blog": "Blog",
	},
} as const

export const routes = {
	es: {
		"what-we-offer": "nuestros-servicios",
		"support": "soporte",
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
