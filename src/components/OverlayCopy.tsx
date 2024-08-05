import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface OverlayCopyProps {
	subheading: string
	heading: string
	cardNumber: string
	cardTitle: string
	cardText: string
}

export function OverlayCopy({
	subheading,
	heading,
	cardNumber,
	cardTitle,
	cardText,
}: OverlayCopyProps) {
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
