import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const phoneValidation = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/

const formSchema = z.object({
	isOwner: z.string().min(1, { message: "Complete this field" }),
	name: z.string().min(1, { message: "Complete this field" }),
	lastName: z.string().min(1, { message: "Complete this field" }),
	email: z.string().min(1, { message: "Complete this field" }).email({
		message: "Must be a valid email",
	}),
	phone: z
		.string()
		.min(1, { message: "Complete this field" })
		.regex(phoneValidation, { message: "invalid phone" }),
	restaurantName: z.string().min(1, { message: "Complete this field" }),
	restaurantAddress: z.string().min(1, { message: "Complete this field" }),
})

export function FreeDemoForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			isOwner: "yes",
			name: "",
			lastName: "",
			email: "",
			phone: "",
			restaurantName: "",
			restaurantAddress: "",
		},
		mode: "onChange",
	})

	async function onSubmit(data: z.infer<typeof formSchema>) {
		await new Promise((resolve) => setTimeout(resolve, 500))
		// eslint-disable-next-line no-console
		console.log(data)
	}

	return (
		<Form {...form}>
			<form className="grid grid-cols-4 gap-4 py-4" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="isOwner"
					render={({ field }) => (
						<FormItem className="col-span-4">
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className="mx-auto max-w-36 bg-white text-black">
										<SelectValue placeholder="Select an option" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="yes">Yes</SelectItem>
									<SelectItem value="no">No</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="John" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>Last name</FormLabel>
							<FormControl>
								<Input placeholder="Doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="johndoe@example.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input placeholder="6019521325" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="restaurantName"
					render={({ field }) => (
						<FormItem className="col-span-4">
							<FormLabel>Restaurant's name</FormLabel>
							<FormControl>
								<Input placeholder="My Restaurant" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="restaurantAddress"
					render={({ field }) => (
						<FormItem className="col-span-4">
							<FormLabel>Restaurant's address</FormLabel>
							<FormControl>
								<Input placeholder="1600 Amphitheatre Parkway" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className="col-span-4"
					disabled={!form.formState.isValid || form.formState.isSubmitting}
					type="submit"
				>
					{form.formState.isSubmitting && (
						<LoaderCircle className="mr-2 size-4 shrink-0 animate-spin" aria-hidden="true" />
					)}
					Send
				</Button>
			</form>
		</Form>
	)
}
