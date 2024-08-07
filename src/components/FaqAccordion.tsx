import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { getI18N } from "@/i18n"

interface FaqAccordionProps {
	locale: string
}

export function FaqAccordion({ locale }: FaqAccordionProps) {
	const i18n = getI18N({ currentLocale: locale })

	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger className="text-xl font-bold">{i18n.FAQ.QUESTION_1}</AccordionTrigger>
				<AccordionContent className="text-base">{i18n.FAQ.ANSWER_1}</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-2">
				<AccordionTrigger className="text-xl font-bold">{i18n.FAQ.QUESTION_2}</AccordionTrigger>
				<AccordionContent className="text-base">{i18n.FAQ.ANSWER_2}</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-3">
				<AccordionTrigger className="text-xl font-bold">{i18n.FAQ.QUESTION_3}</AccordionTrigger>
				<AccordionContent className="text-base">{i18n.FAQ.ANSWER_3}</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-4">
				<AccordionTrigger className="text-xl font-bold">{i18n.FAQ.QUESTION_4}</AccordionTrigger>
				<AccordionContent className="text-base">{i18n.FAQ.ANSWER_4}</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-5">
				<AccordionTrigger className="text-xl font-bold">{i18n.FAQ.QUESTION_5}</AccordionTrigger>
				<AccordionContent className="space-y-4 text-base">
					<p>{i18n.FAQ.ANSWER_5_1}</p>
					<p>{i18n.FAQ.ANSWER_5_2}</p>
					<ol className="list-decimal space-y-2 pl-4">
						<li>{i18n.FAQ.ANSWER_5_3}</li>
						<li>{i18n.FAQ.ANSWER_5_4}</li>
						<li>{i18n.FAQ.ANSWER_5_5}</li>
					</ol>
					<p>{i18n.FAQ.ANSWER_5_6}</p>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-6">
				<AccordionTrigger className="text-xl font-bold">{i18n.FAQ.QUESTION_6}</AccordionTrigger>
				<AccordionContent className="text-base">
					{i18n.FAQ.ANSWER_6_1}
					<a
						className="text-primary decoration-1 underline-offset-4 hover:underline"
						target="_blank"
						href={i18n.FAQ.ANSWER_6_2}
					>
						{i18n.FAQ.ANSWER_6_3}
					</a>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-7">
				<AccordionTrigger className="text-xl font-bold">{i18n.FAQ.QUESTION_7}</AccordionTrigger>
				<AccordionContent className="text-base">{i18n.FAQ.ANSWER_7}</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-8">
				<AccordionTrigger className="text-xl font-bold">{i18n.FAQ.QUESTION_8}</AccordionTrigger>
				<AccordionContent className="text-base">{i18n.FAQ.ANSWER_8}</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
