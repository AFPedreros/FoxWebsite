import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { RestaurantSupportForm } from "@/components/RestaurantSupportForm"
import { getI18N } from "@/i18n"

interface FreeDemoDialogProps {
	locale: string
}

export function RestaurantSupportDialog({ locale }: FreeDemoDialogProps) {
	const i18n = getI18N({ currentLocale: locale })

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>{i18n.SUPPORT.HERO_BUTTON}</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-balance text-center text-2xl font-normal">
						{i18n.SUPPORT.RESTAURANT_FORM.TITLE}
					</DialogTitle>
					<DialogDescription className="sr-only">
						{i18n.SUPPORT.RESTAURANT_FORM.DESCRIPTION}
					</DialogDescription>
				</DialogHeader>

				<RestaurantSupportForm locale={locale} />
			</DialogContent>
		</Dialog>
	)
}
