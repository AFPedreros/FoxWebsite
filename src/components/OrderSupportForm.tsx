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
import { Textarea } from "@/components/ui/textarea"

import { getI18N } from "@/i18n"

const phoneValidation = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/

interface FreeDemoFormProps {
	locale: string
}

export function OrderSupportForm({ locale }: FreeDemoFormProps) {
	const i18n = getI18N({ currentLocale: locale })
	const formSchema = z.object({
		name: z.string().min(1, { message: i18n.TEXT_ERROR_FIELD_REQUIRED }),
		lastName: z.string().min(1, { message: i18n.TEXT_ERROR_FIELD_REQUIRED }),
		restaurantName: z.string().min(1, { message: i18n.TEXT_ERROR_FIELD_REQUIRED }),
		restaurantAddress: z.string().min(1, { message: i18n.TEXT_ERROR_FIELD_REQUIRED }),
		email: z.string().min(1, { message: i18n.TEXT_ERROR_FIELD_REQUIRED }).email({
			message: i18n.TEXT_ERROR_FIELD_EMAIL,
		}),
		phone: z
			.string()
			.min(1, { message: i18n.TEXT_ERROR_FIELD_REQUIRED })
			.regex(phoneValidation, { message: i18n.TEXT_ERROR_FIELD_PHONE }),
		message: z.string().min(10, { message: i18n.TEXT_ERROR_FIELD_REQUIRED }),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			lastName: "",
			restaurantName: "",
			restaurantAddress: "",
			email: "",
			phone: "",
			message: "",
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
			<form className="grid grid-cols-4 gap-x-4" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>
								{i18n.SUPPORT.ORDER_FORM.LABEL_NAME}
								<span className="text-primary">*</span>
							</FormLabel>
							<FormControl>
								<Input placeholder={i18n.SUPPORT.ORDER_FORM.PLACEHOLDER_NAME} {...field} />
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
							<FormLabel>
								{i18n.SUPPORT.ORDER_FORM.LABEL_LAST_NAME}
								<span className="text-primary">*</span>
							</FormLabel>
							<FormControl>
								<Input placeholder={i18n.SUPPORT.ORDER_FORM.PLACEHOLDER_LAST_NAME} {...field} />
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
							<FormLabel>
								{i18n.SUPPORT.ORDER_FORM.LABEL_RESTAURANT_NAME}
								<span className="text-primary">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder={i18n.SUPPORT.ORDER_FORM.PLACEHOLDER_RESTAURANT_NAME}
									{...field}
								/>
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
							<FormLabel>
								{i18n.SUPPORT.ORDER_FORM.LABEL_RESTAURANT_ADDRESS}
								<span className="text-primary">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder={i18n.SUPPORT.ORDER_FORM.PLACEHOLDER_RESTAURANT_ADDRESS}
									{...field}
								/>
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
							<FormLabel>
								{i18n.SUPPORT.ORDER_FORM.LABEL_EMAIL}
								<span className="text-primary">*</span>
							</FormLabel>
							<FormControl>
								<Input placeholder={i18n.SUPPORT.ORDER_FORM.PLACEHOLDER_EMAIL} {...field} />
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
							<FormLabel>
								{i18n.SUPPORT.ORDER_FORM.LABEL_PHONE}
								<span className="text-primary">*</span>
							</FormLabel>
							<FormControl>
								<Input placeholder={i18n.SUPPORT.ORDER_FORM.PLACEHOLDER_PHONE} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="col-span-4">
							<FormLabel>
								{i18n.SUPPORT.ORDER_FORM.LABEL_MESSAGE}
								<span className="text-primary">*</span>
							</FormLabel>
							<FormControl>
								<Textarea placeholder={i18n.SUPPORT.ORDER_FORM.PLACEHOLDER_MESSAGE} {...field} />
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
					{i18n.SUPPORT.ORDER_FORM.BUTTON}
				</Button>
			</form>
		</Form>
	)
}
