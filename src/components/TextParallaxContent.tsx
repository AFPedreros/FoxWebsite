import { OverlayCopy } from "./OverlayCopy"
import { StickyImage } from "./StickyImage"

interface TextParallaxContentProps {
	imgUrl: string
	subheading: string
	heading: string
	cardNumber: string
	cardTitle: string
	cardText: string
}

export function TextParallaxContent({
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
