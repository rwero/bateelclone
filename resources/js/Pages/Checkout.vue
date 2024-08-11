<script setup>
import { ref, onMounted, computed } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Textinput from "@/Components/TextInput.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { PhoneIcon, CheckCircleIcon } from "@heroicons/vue/24/solid";
import { loadStripe } from "@stripe/stripe-js";
import { usePage } from "@inertiajs/inertia-vue3";
import { getCartProducts } from "../functions";
import axios from "axios";

const header = ref(true);
const products = ref([]);
const stripe = ref({});
const cardElement = ref({});
const processing = ref(false);

const user = computed(
	() =>
		usePage().props.value.auth.user || ({
			first_name: "",
			last_name: "",
			email: "",
			address: "",
			city: "",
			state: "",
			postal_code: "",
		})
);
console.log("dd user : ", user.value);

onMounted(async () => {
	products.value = getCartProducts();

	stripe.value = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
	const elements = stripe.value.elements();
	cardElement.value = elements.create("card", {
		classes: {
			base: "bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out",
		},
	});
	cardElement.value.mount("#card-element");
});
let subtotal = computed(() => {
	let res = 0;
	for (let prod of products.value) {
		res += prod.price * prod.quantity;
	}

	return res;
});
const processPayment = async () => {
	processing.value = true;
	const { paymentMethod, error } = await stripe.value.createPaymentMethod(
		"card",
		cardElement.value,
		{
			billing_details: {
				name: user.value.first_name + " " + user.value.last_name,
				email: user.value.email,
				address: {
					line1: user.value.address,
					city: user.value.city,
					state: user.value.state,
					postal_code: user.value.zip_code,
				},
			},
		}
	);
	if (error) {
		processing.value = false;
		console.error(error);
		alert(error.message);
	} else {
		user.value.payment_method_id = paymentMethod.id;
		user.value.subtotal = subtotal.value;
		user.value.delivery_fee = 500;
		user.value.cart = JSON.stringify(products.value);
		const res = await axios.post("/purchase", user.value);
		processing.value = false;
		if (res.status == 200) {
			console.log("200");
			products.value = [];
			localStorage.setItem("cart", "[]");
			window.location = route("orders.index");
		}
	}
};
</script>

<template>
	<div>
		<div class="min-h-screen bg-gray-100">
			<nav class="bg-white border-b border-gray-100">
				<!-- Primary Navigation Menu -->
				<div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
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
			<header class="max-w-7xl mx-auto my-8 px-3 sm:px-8" v-if="header">
				<div
					class="flex items-center justify-center gap-8 rounded-lg bg-indigo-600 sm:px-8 px-4 py-4 font-medium text-white">
					<span class="text-center">
						Orders are usually shipped within 24 hours of order acceptance (Monday to
						Friday) and expected to arrive within 10 working days.
					</span>
					<XMarkIcon class="h-5 w-5 min-w-[1.25rem] cursor-pointer" @click="header = false" />
				</div>
			</header>

			<!-- Page Content -->
			<main class="max-w-7xl mx-auto mt-8 px-4 sm:px-8">
				<div class="grid md:grid-cols-7 grid-cols-1 gap-8">
					<div class="md:col-span-4 col-span-1 mb-8">
						<div class>
							<form action="#" method="POST">
								<div class="overflow-hidden shadow-lg rounded-lg">
									<div class="bg-white p-4 sm:p-6">
										<h2 class="text-xl font-bold mb-4">Shipping Information</h2>
										<div class="grid grid-cols-6 gap-6">
											<div class="col-span-6 sm:col-span-3">
												<label for="first-name"
													class="block text-sm font-medium text-gray-700">First name</label>
												<input :disabled="processing" type="text" name="first-name"
													id="first-name" autocomplete="given-name"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
													:value="user.first_name" />
											</div>

											<div class="col-span-6 sm:col-span-3">
												<label for="last-name"
													class="block text-sm font-medium text-gray-700">Last name</label>
												<input :disabled="processing" type="text" name="last-name"
													id="last-name" autocomplete="family-name"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
													:value="user.last_name" />
											</div>

											<div class="col-span-6 sm:col-span-3">
												<label for="email-address"
													class="block text-sm font-medium text-gray-700">Email
													address</label>
												<input :disabled="processing" type="text" name="email-address"
													id="email-address" autocomplete="email"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
													:value="user.email" />
											</div>
											<div class="col-span-6 sm:col-span-3">
												<label for="company-website"
													class="block text-sm font-medium text-gray-700">Phone number</label>
												<div class="mt-1 flex rounded-md shadow-sm">
													<span
														class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
														<PhoneIcon class="h-5 w-5" />
													</span>
													<input :disabled="processing" type="text" name="company-website"
														id="company-website"
														class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
														placeholder />
												</div>
											</div>

											<div class="col-span-6 sm:col-span-3">
												<label for="country"
													class="block text-sm font-medium text-gray-700">Country</label>
												<select :disabled="processing" id="country" name="country"
													autocomplete="country-name"
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
												<input :disabled="processing" type="text" name="street-address"
													id="street-address" autocomplete="street-address"
													v-model="user.address"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
											</div>

											<div class="col-span-6 sm:col-span-6 lg:col-span-2">
												<label for="city"
													class="block text-sm font-medium text-gray-700">City</label>
												<input :disabled="processing" type="text" name="city" id="city"
													autocomplete="address-level2" v-model="user.city"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
											</div>

											<div class="col-span-6 sm:col-span-3 lg:col-span-2">
												<label for="region"
													class="block text-sm font-medium text-gray-700">State /
													Province</label>
												<input :disabled="processing" type="text" name="region" id="region"
													autocomplete="address-level1" v-model="user.state"
													class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
											</div>

											<div class="col-span-6 sm:col-span-3 lg:col-span-2">
												<label for="postal-code"
													class="block text-sm font-medium text-gray-700">ZIP / Postal
													code</label>
												<input :disabled="processing" type="text" name="postal-code"
													id="postal-code" autocomplete="postal-code" v-model="user.zip_code"
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
												Notes about your order, e.g. special notes for
												delivery.
											</p>
										</div>
										<div class="bg-white border-b border-t border-gray-300 pt-6 mt-6 pb-8">
											<h2 class="text-xl font-bold">Shipping Information</h2>
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
												<div class="rounded-lg border border-gray-300 p-4 hidden">
													<div class="flex items-center justify-between">
														<span class="font-bold">Express</span>
														<CheckCircleIcon class="h-6 w-6 hidden" />
													</div>
													<p class="text-gray-500">2-5 business days</p>
													<p class="mt-6 font-bold">$16.00</p>
												</div>
											</div>
										</div>
										<div class="pt-6 pb-4">
											<h2 class="text-xl font-bold">Payment</h2>
											<div class="flex gap-8 items-center pt-6">
												<div class="flex items-center justify-start gap-3">
													<input :disabled="processing" type="radio" name="payment" id="cc"
														class="focus:ring-0 border border-gray-300" checked />
													<label for="cc" class="text-gray-700">Credit Card</label>
												</div>
											</div>

											<div class="pt-6 pb-4">
												<div id="card-element"></div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="md:col-span-3 col-span-1 mb-8">
						<div class="rounded-lg bg-white border border-gray-100 p-4 shadow-lg">
							<h2 class="text-xl font-bold pb-2 border-b border-gray-100 mb-4">
								Summary
							</h2>
							<div class="flow-root">
								<ul role="list" class="-my-6 divide-y divide-gray-200">
									<li v-for="product in products" :key="product.product_id" class="flex py-6">
										<div
											class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<img :src="product.image.path" alt=""
												class="h-full w-full object-cover object-center" />
										</div>

										<div class="ml-4 flex flex-1 flex-col">
											<div>
												<div class="flex justify-between text-base font-medium text-gray-900">
													<h3>
														<a :href="route(
															'products.show',
															product.product_id
														)
															">
															{{ product.title }}
														</a>
													</h3>
													<p class="ml-4">{{ product.price }}</p>
												</div>
											</div>
											<div class="flex flex-1 items-end justify-between text-sm">
												<p class="text-gray-500">
													Qty {{ product.quantity }}
												</p>

												<div class="flex">
													<button type="button"
														class="font-medium text-indigo-600 hover:text-indigo-500">
														Remove
													</button>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div class="border-t border-gray-200 mt-6 pt-4">
								<div class="flex justify-between text-base font-medium text-gray-900 mb-2">
									<p>Subtotal</p>
									<p>${{ subtotal }}</p>
								</div>

								<div class="flex justify-between text-base font-medium text-gray-900 my-2">
									<p>Shipping</p>
									<p>$5.00</p>
								</div>

								<div class="flex justify-between text-base font-medium text-gray-900 my-2">
									<p>Total</p>
									<p>${{ subtotal + 5.0 }}</p>
								</div>

								<div class="mt-6">
									<button @click="processPayment"
										class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
										v-text="processing ? 'Processing...' : 'Confirm Order'
											"></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
