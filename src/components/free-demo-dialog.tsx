import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { FreeDemoForm } from "@/components/free-demo-form"
import { getI18N } from "@/i18n"

interface FreeDemoDialogProps {
	locale: string
}

export function FreeDemoDialog({ locale }: FreeDemoDialogProps) {
	const i18n = getI18N({ currentLocale: locale })

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>{i18n.HEADER_BUTTON}</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-balance text-center text-2xl font-normal">
						{i18n.OWNER_FORM.TITLE}
					</DialogTitle>
					<DialogDescription className="sr-only">{i18n.OWNER_FORM.DESCRIPTION}</DialogDescription>
				</DialogHeader>

				<FreeDemoForm locale={locale} />
			</DialogContent>
		</Dialog>
	)
}
