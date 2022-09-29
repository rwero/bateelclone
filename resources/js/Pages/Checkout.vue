<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import TextInput from "@/Components/TextInput.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { PhoneIcon, CheckCircleIcon } from "@heroicons/vue/24/solid";

const header = ref(true);

const products = [
	{
		id: 1,
		name: "Segai Dates",
		href: "#",
		color: "Salmon",
		price: "$90.00",
		quantity: 1,
		imageSrc:
			"https://bateel.com/media/catalog/product/cache/db93ac8ff02164348dcd3b18eaad565a/0/1/01_sgai_lf.jpg",
		imageAlt:
			"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
	},
	{
		id: 2,
		name: "Ajwa Dates",
		href: "#",
		color: "Blue",
		price: "$32.00",
		quantity: 1,
		imageSrc:
			"https://bateel.com/media/catalog/product/cache/db93ac8ff02164348dcd3b18eaad565a/0/1/01_ajwa_lf.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
	},
	// More products...
];
</script>

<template>
	<div>
		<div class="min-h-screen bg-gray-100">
			<nav class="bg-white border-b border-gray-100">
				<!-- Primary Navigation Menu -->
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="flex justify-between h-16">
						<div class="flex">
							<!-- Logo -->
							<div class="shrink-0 flex items-center">
								<Link :href="route('home.index')">
								<ApplicationLogo class="block h-9 w-auto" />
								</Link>
							</div>

							<!-- Navigation Links -->
						</div>

						<!-- Hamburger -->
					</div>
				</div>

				<!-- Responsive Navigation Menu -->
			</nav>

			<!-- Page Heading -->
			<header class="max-w-7xl mx-auto my-8 px-8" v-if="header">
				<div
					class="flex items-center justify-center gap-8 rounded-lg bg-indigo-600 px-8 py-4 font-medium text-white">
					<span class="text-center">
						Orders are usually shipped within 24 hours of order
						acceptance (Monday to Friday) and expected to arrive
						within 10 working days.
					</span>
					<XMarkIcon class="h-5 w-5 min-w-[1.25rem] cursor-pointer" @click="header = false" />
				</div>
			</header>

			<!-- Page Content -->
			<main class="max-w-7xl mx-auto mt-8 px-8">
				<div class="grid md:grid-cols-7 grid-cols-1 gap-8">
					<div class="md:col-span-4 col-span-1 mb-8">
						<div class>
							<form action="#" method="POST">
								<div class="overflow-hidden shadow-lg rounded-lg">
									<div class="bg-white p-6">
										<h2 class="text-xl font-bold mb-4">Shipping Information</h2>
										<div class="grid grid-cols-6 gap-6">
											<div class="col-span-6 sm:col-span-3">
												<label for="first-name"
													class="block text-sm font-medium text-gray-700">First name</label>
												<input type="text" name="first-name" id="first-name"
													autocomplete="given-name"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
													:value="
														$page.props.auth.user
															.first_name
													" />
											</div>

											<div class="col-span-6 sm:col-span-3">
												<label for="last-name"
													class="block text-sm font-medium text-gray-700">Last name</label>
												<input type="text" name="last-name" id="last-name"
													autocomplete="family-name"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
													:value="
														$page.props.auth.user
															.last_name
													" />
											</div>

											<div class="col-span-6 sm:col-span-3">
												<label for="email-address"
													class="block text-sm font-medium text-gray-700">Email
													address</label>
												<input type="text" name="email-address" id="email-address"
													autocomplete="email"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
													:value="
														$page.props.auth.user
															.email
													" />
											</div>
											<div class="col-span-6 sm:col-span-3">
												<label for="company-website"
													class="block text-sm font-medium text-gray-700">Phone number</label>
												<div class="mt-1 flex rounded-md shadow-sm">
													<span
														class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
														<PhoneIcon class="h-5 w-5" />
													</span>
													<input type="text" name="company-website" id="company-website"
														class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
														placeholder />
												</div>
											</div>

											<div class="col-span-6 sm:col-span-3">
												<label for="country"
													class="block text-sm font-medium text-gray-700">Country</label>
												<select id="country" name="country" autocomplete="country-name"
													class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
													<option>United States</option>
													<option>Canada</option>
													<option>Mexico</option>

													<option selected>Algeria</option>
												</select>
											</div>

											<div class="col-span-6">
												<label for="street-address"
													class="block text-sm font-medium text-gray-700">Street
													address</label>
												<input type="text" name="street-address" id="street-address"
													autocomplete="street-address"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
											</div>

											<div class="col-span-6 sm:col-span-6 lg:col-span-2">
												<label for="city"
													class="block text-sm font-medium text-gray-700">City</label>
												<input type="text" name="city" id="city" autocomplete="address-level2"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
											</div>

											<div class="col-span-6 sm:col-span-3 lg:col-span-2">
												<label for="region"
													class="block text-sm font-medium text-gray-700">State /
													Province</label>
												<input type="text" name="region" id="region"
													autocomplete="address-level1"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
											</div>

											<div class="col-span-6 sm:col-span-3 lg:col-span-2">
												<label for="postal-code"
													class="block text-sm font-medium text-gray-700">ZIP / Postal
													code</label>
												<input type="text" name="postal-code" id="postal-code"
													autocomplete="postal-code"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
											</div>
										</div>
										<div class="mt-6">
											<label for="about" class="block text-sm font-medium text-gray-700">Order
												Notes</label>
											<div class="mt-1">
												<textarea id="about" name="about" rows="3"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
													placeholder="you@example.com" />
											</div>
											<p class="mt-2 text-sm text-gray-500">
												Notes about your order, e.g.
												special notes for delivery.
											</p>
										</div>
										<div class="bg-white border-b border-t border-gray-300  pt-6 mt-6 pb-8">
											<h2 class="text-xl font-bold ">Shipping Information</h2>
											<div
												class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between mt-6">
												<div class="rounded-lg border-2 border-indigo-500 p-4">
													<div class="flex items-center justify-between">
														<span class="font-bold">Standrad</span>
														<CheckCircleIcon class="h-6 w-6 text-indigo-500" />
													</div>
													<p class="text-gray-500">4-10 business days</p>
													<p class="mt-6 font-bold">$5.00</p>
												</div>
												<div class="rounded-lg border  border-gray-300 p-4">
													<div class="flex items-center justify-between">
														<span class="font-bold">Express</span>
														<CheckCircleIcon class="h-6 w-6 hidden" />
													</div>
													<p class="text-gray-500">2-5 business days</p>
													<p class="mt-6 font-bold">$16.00</p>
												</div>
											</div>
										</div>
										<div class="pt-6 pb-4 ">
											<h2 class="text-xl font-bold ">Payment</h2>
											<div class="flex gap-8 items-center pt-6">
												<div class="flex items-center justify-start gap-3">
													<input type="radio" name="payment" id="cc"
														class="focus:ring-0 border border-gray-300" />
													<label for="cc" class="text-gray-700">Credit Card</label>
												</div>

												<div class="flex items-center justify-start gap-3">
													<input type="radio" name="payment" id="pp"
														class="focus:ring-0 border border-gray-300" />
													<label for="pp" class="text-gray-700">Paypal</label>
												</div>

												<div class="flex items-center justify-start gap-3">
													<input type="radio" name="payment" id="et"
														class="focus:ring-0 border border-gray-300" />
													<label for="et" class="text-gray-700">eTransfer</label>
												</div>
											</div>
											<div class="col-span-6 2 mt-6">
												<label for="card-number"
													class="block text-sm font-medium text-gray-700">Card number</label>
												<input type="text" name="card-number" id="card-number"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
											</div>
											<div class="col-span-6 mt-6">
												<label for="name-on-card"
													class="block text-sm font-medium text-gray-700">Name on card</label>
												<input type="text" name="name-on-card" id="name-on-card"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
											</div>
											<div class="col-span-6 grid grid-cols-4 gap-4 mt-6">
												<div class="col-span-3">
													<label for="expiration"
														class="block text-sm font-medium text-gray-700">Expiration
														date(MM/YY)</label>
													<input type="text" name="expiration" id="expiration"
														class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
												</div>
												<div class="col-span-1">
													<label for="CVC"
														class="block text-sm font-medium text-gray-700">CVC</label>
													<input type="text" name="CVC" id="CVC"
														class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="md:col-span-3 col-span-1 mb-8">
						<div class="rounded-lg bg-white border border-gray-100 p-4 shadow-lg">
							<h2 class="text-xl font-bold pb-2 border-b border-gray-100 mb-4">Summary</h2>
							<div class="flow-root">
								<ul role="list" class="-my-6 divide-y divide-gray-200">
									<li v-for="product in products" :key="product.id" class="flex py-6">
										<div
											class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<img :src="product.imageSrc" :alt="product.imageAlt"
												class="h-full w-full object-cover object-center" />
										</div>

										<div class="ml-4 flex flex-1 flex-col">
											<div>
												<div class="flex justify-between text-base font-medium text-gray-900">
													<h3>
														<a :href="product.href">
															{{
															product.name
															}}
														</a>
													</h3>
													<p class="ml-4">{{ product.price }}</p>
												</div>
												<p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
											</div>
											<div class="flex flex-1 items-end justify-between text-sm">
												<p class="text-gray-500">Qty {{ product.quantity }}</p>

												<div class="flex">
													<button type="button"
														class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div class="border-t border-gray-200 mt-6 pt-4">
								<div class="flex justify-between text-base font-medium text-gray-900 mb-2">
									<p>Subtotal</p>
									<p>$262.00</p>
								</div>

								<div class="flex justify-between text-base font-medium text-gray-900 my-2">
									<p>Shipping</p>
									<p>$5.00</p>
								</div>

								<div class="flex justify-between text-base font-medium text-gray-900 my-2">
									<p>Total</p>
									<p>$69.00</p>
								</div>

								<div class="mt-6">
									<a :href="route('checkout.show')"
										class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Confirm
										order</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
