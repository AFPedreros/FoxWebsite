import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"

import { type CarouselApi } from "./ui/carousel"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	DotButtons,
} from "./ui/carousel"
import { Step } from "./Step"

import step1 from "@/assets/step-1.gif"
import step2 from "@/assets/step-2.gif"
import step3 from "@/assets/step-3.gif"
import step4 from "@/assets/step-4.gif"
import { getI18N } from "@/i18n"

interface StepProps {
	currentLocale: string
}

export function SwipeCarousel({ currentLocale }: StepProps) {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(1)

	const i18n = getI18N({ currentLocale })

	useEffect(() => {
		if (!api) return

		const onSelect = () => {
			setCurrent(api.selectedScrollSnap() + 1)
		}

		api.on("select", onSelect)

		return () => {
			api.off("select", onSelect)
			return undefined
		}
	}, [api])

	return (
		<Carousel
			className="mx-auto w-full"
			plugins={[
				Autoplay({
					delay: 10000,
				}),
				Fade(),
			]}
			opts={{ loop: true }}
			setApi={setApi}
		>
			<CarouselContent>
				<CarouselItem>
					<Step
						isCurrent={current === 1}
						imageSrc={step1.src}
						imageAlt={i18n.STEP_ONE_IMG_ALT}
						step={i18n.STEP_ONE}
						title={i18n.STEP_ONE_TITLE}
						list={[i18n.STEP_ONE_LIST.ONE, i18n.STEP_ONE_LIST.TWO, i18n.STEP_ONE_LIST.THREE]}
					/>
				</CarouselItem>

				<CarouselItem>
					<Step
						isCurrent={current === 2}
						imageSrc={step2.src}
						imageAlt={i18n.STEP_TWO_IMG_ALT}
						step={i18n.STEP_TWO}
						title={i18n.STEP_TWO_TITLE}
						list={[i18n.STEP_TWO_LIST.ONE, i18n.STEP_TWO_LIST.TWO, i18n.STEP_TWO_LIST.THREE]}
					/>
				</CarouselItem>

				<CarouselItem>
					<Step
						isCurrent={current === 3}
						imageSrc={step3.src}
						imageAlt={i18n.STEP_THREE_IMG_ALT}
						step={i18n.STEP_THREE}
						title={i18n.STEP_THREE_TITLE}
						list={[
							i18n.STEP_THREE_LIST.ONE,
							i18n.STEP_THREE_LIST.TWO,
							i18n.STEP_THREE_LIST.THREE,
							i18n.STEP_THREE_LIST.FOUR,
						]}
					/>
				</CarouselItem>

				<CarouselItem>
					<Step
						isCurrent={current === 4}
						imageSrc={step4.src}
						imageAlt={i18n.STEP_FOUR_IMG_ALT}
						step={i18n.STEP_FOUR}
						title={i18n.STEP_FOUR_TITLE}
						list={[i18n.STEP_FOUR_LIST.ONE, i18n.STEP_FOUR_LIST.TWO, i18n.STEP_FOUR_LIST.THREE]}
					/>
				</CarouselItem>
			</CarouselContent>

			<DotButtons />

			<div className="absolute bottom-0 left-1/2 z-30 h-fit w-fit -translate-x-1 gap-x-2">
				<div className="relative flex h-10 gap-4 pl-1 pt-6">
					<CarouselPrevious className="size-8 border-none bg-white/50" />
					<CarouselNext className="size-8 border-none bg-white/50" />
				</div>
			</div>
		</Carousel>
	)
}
