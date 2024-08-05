import { TextParallaxContent } from "./TextParallaxContent"

import whyFox1 from "@/assets/why-fox-1.jpg"
import whyFox2 from "@/assets/why-fox-2.jpg"
import whyFox3 from "@/assets/why-fox-3.jpg"
import whyFox4 from "@/assets/why-fox-4.jpg"

import { getI18N } from "@/i18n"

interface StepProps {
	currentLocale: string
}

export function StickyScrollReveal({ currentLocale }: StepProps) {
	const i18n = getI18N({ currentLocale })
	return (
		<section className="overflow-hidden">
			<TextParallaxContent
				imgUrl={whyFox1.src}
				heading={i18n.WHY_FOX_TITLE}
				subheading={i18n.WHY_FOX_SUBTITLE}
				cardNumber={i18n.WHY_FOX_1}
				cardTitle={i18n.WHY_FOX_1_TITLE}
				cardText={i18n.WHY_FOX_1_TEXT}
			/>
			<TextParallaxContent
				imgUrl={whyFox2.src}
				heading={i18n.WHY_FOX_TITLE}
				subheading={i18n.WHY_FOX_SUBTITLE}
				cardNumber={i18n.WHY_FOX_2}
				cardTitle={i18n.WHY_FOX_2_TITLE}
				cardText={i18n.WHY_FOX_2_TEXT}
			/>
			<TextParallaxContent
				imgUrl={whyFox3.src}
				heading={i18n.WHY_FOX_TITLE}
				subheading={i18n.WHY_FOX_SUBTITLE}
				cardNumber={i18n.WHY_FOX_3}
				cardTitle={i18n.WHY_FOX_3_TITLE}
				cardText={i18n.WHY_FOX_3_TEXT}
			/>
			<TextParallaxContent
				imgUrl={whyFox4.src}
				heading={i18n.WHY_FOX_TITLE}
				subheading={i18n.WHY_FOX_SUBTITLE}
				cardNumber={i18n.WHY_FOX_4}
				cardTitle={i18n.WHY_FOX_4_TITLE}
				cardText={i18n.WHY_FOX_4_TEXT}
			/>
		</section>
	)
}
