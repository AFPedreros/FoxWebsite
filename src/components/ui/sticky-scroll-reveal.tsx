import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

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

interface TextParallaxContentProps {
	imgUrl: string
	subheading: string
	heading: string
	cardNumber: string
	cardTitle: string
	cardText: string
}

function TextParallaxContent({
	imgUrl,
	subheading,
	heading,
	cardNumber,
	cardTitle,
	cardText,
}: TextParallaxContentProps) {
	return (
		<div className="relative h-[125vh]">
			<StickyImage imgUrl={imgUrl} />
			<div className="container flex h-full justify-start">
				<OverlayCopy
					heading={heading}
					subheading={subheading}
					cardNumber={cardNumber}
					cardTitle={cardTitle}
					cardText={cardText}
				/>
			</div>
		</div>
	)
}

function StickyImage({ imgUrl }: { imgUrl: string }) {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end start"],
	})

	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
	const y = useTransform(scrollYProgress, [0, 1], ["0", "100%"])

	return (
		<motion.img
			ref={targetRef}
			src={imgUrl}
			style={{ opacity, y }}
			className="absolute right-0 top-0 h-full w-1/2 object-cover object-right"
		/>
	)
}

interface OverlayCopyProps {
	subheading: string
	heading: string
	cardNumber: string
	cardTitle: string
	cardText: string
}

function OverlayCopy({ subheading, heading, cardNumber, cardTitle, cardText }: OverlayCopyProps) {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	})

	const y = useTransform(scrollYProgress, [0, 1], [250, -250])
	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

	return (
		<motion.div
			ref={targetRef}
			style={{
				y,
				opacity,
			}}
			className="flex h-screen w-[calc((100vw/2)-4.5rem)] flex-col justify-center gap-16 2xl:w-[calc((100vw/2)-8rem)]"
		>
			<div>
				<h2 className="text-3xl font-bold text-primary">{heading}</h2>
				<p className="text-pretty text-5xl font-light">{subheading}</p>
			</div>

			<div className="flex max-w-sm items-center gap-4">
				<span className="text-9xl font-light text-primary">{cardNumber}</span>
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold text-primary">{cardTitle}</h3>
					<p className="text-pretty">{cardText}</p>
				</div>
			</div>
		</motion.div>
	)
}
