import { Badge } from "./ui/badge"

import stepPlaceholder from "@/assets/step-placeholder.png"

interface StepProps {
	isCurrent: boolean
	imageSrc: string
	imageAlt: string
	step: string
	title: string
	list: string[]
}

export function Step({ isCurrent, imageSrc, imageAlt, step, title, list }: StepProps) {
	return (
		<div className="relative flex h-fit items-center justify-center">
			<div className="w-1/2">
				<div className="h-fit w-full">
					<img
						className="mx-auto h-[28rem] w-auto rounded-md object-contain"
						src={isCurrent ? imageSrc : stepPlaceholder.src}
						alt={imageAlt}
						loading="eager"
					/>
				</div>
			</div>
			<div className="flex w-1/2 flex-col gap-8 text-center sm:text-left">
				<Badge className="w-fit text-sm" variant="default">
					{step}
				</Badge>

				<h2 className="text-3xl font-bold text-primary sm:text-5xl">{title}</h2>
				<ul className="list-disc pl-6 text-xl">
					{list.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	)
}
