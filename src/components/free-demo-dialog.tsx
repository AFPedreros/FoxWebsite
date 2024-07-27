import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Username
						</Label>
						<Input id="username" defaultValue="@peduarte" className="col-span-3" />
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Send</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
