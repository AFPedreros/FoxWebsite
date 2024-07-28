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

interface FreeDemoDialogProps {
	triggerButtonText: string
}

export function FreeDemoDialog({ triggerButtonText }: FreeDemoDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>{triggerButtonText}</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-balance text-center text-2xl font-normal">
						Are you the owner or manager of the restaurant?
					</DialogTitle>
					<DialogDescription className="sr-only">
						This form allows restaurant owners or managers to sign up for a free demo of our
						services.
					</DialogDescription>
				</DialogHeader>

				<FreeDemoForm />
			</DialogContent>
		</Dialog>
	)
}
