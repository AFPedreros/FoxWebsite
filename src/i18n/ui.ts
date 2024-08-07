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
		"nav.about-us": "Sobre Nosotros",
		"nav.blog": "Blog",
		"nav.google-3rd-party-disclosure-statement": "Google 3rd Party Disclosure Statement",
		"nav.frequently-asked-questions": "Preguntas Frecuentes",
	},
	en: {
		"nav.home": "Home",
		"nav.what-we-offer": "What we offer",
		"nav.support": "Support",
		"nav.order-online": "Order Online",
		"nav.about-us": "About Us",
		"nav.blog": "Blog",
		"nav.google-3rd-party-disclosure-statement": "Google 3rd Party Disclosure Statement",
		"nav.frequently-asked-questions": "Frequently Asked Questions",
	},
} as const

export const routes = {
	es: {
		"what-we-offer": "nuestros-servicios",
		"support": "soporte",
		"order-online": "ordena-en-linea",
		"about-us": "sobre-nosotros",
		"blog": "blog",
		"frequently-asked-questions": "preguntas-frecuentes",

		// GOOGLE 3RD PARTY DISCLOSURE STATEMENT
		"google-3rd-party-disclosure-statement": "google-3rd-party-disclosure-statement",

		// BLOGS
		"blog/improve-customer-experience-restaurant": "mejorar-experiencia-cliente-restaurante",
		"improve-customer-experience-restaurant": "blog/mejorar-experiencia-cliente-restaurante",
	},
	en: {
		"what-we-offer": "what-we-offer",
		"support": "support",
		"order-online": "order-online",
		"about-us": "about-us",
		"blog": "blog",
		"frequently-asked-questions": "frequently-asked-questions",

		// GOOGLE 3RD PARTY DISCLOSURE STATEMENT
		"google-3rd-party-disclosure-statement": "google-3rd-party-disclosure-statement",
	},
}
