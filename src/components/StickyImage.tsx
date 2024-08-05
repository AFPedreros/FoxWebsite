import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface StickyImageProps {
	imgUrl: string
}

export function StickyImage({ imgUrl }: StickyImageProps) {
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
