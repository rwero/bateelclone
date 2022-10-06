<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import {
	StarIcon,
	PlusIcon,
	PlusSmallIcon,
	MinusIcon,
	MinusSmallIcon,
} from "@heroicons/vue/20/solid";

const qte = ref(1);
const reviews = ref([
	{
		id: 1,
		first_name: "Redouane",
		last_name: "Moussaoui",
		date: "July 6, 2022",
		rating: 5,
		review: "Quality of goods was good . All the dates were of consistent size and fresh. Packing was good and promptly delivered. ",
	},
	{
		id: 2,
		first_name: "Redouane",
		last_name: "Moussaoui",
		rating: 4,
		date: "July 6, 2022",
		review: "Quality of goods was good . All the dates were of consistent size and fresh. Packing was good and promptly delivered. ",
	},
]);


const open = ref(false);
defineProps({
	product: Object,
});
</script>

<template>

	<Head title="Welcome" />
	<AuthenticatedLayout>
		<!-- <template #header> -->
		<!--     <div> -->
		<!--         Main Header page -->
		<!--          -->
		<!--     </div> -->
		<!-- </template> -->

		<template #main>
			<div>
				<div class="flex transform text-left text-base transition md:my-8 md:px-4 max-w-7xl mx-auto">
					<div
						class="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
						<div class="grid  w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
							<div class="overflow-hidden rounded-lg col-span-6">
								<TabGroup>
									<TabPanels class="mt-2">
										<TabPanel v-for="(image, i) in $page.props.product.images" :key="i">
											<img :src="image.path" alt="" class="object-cover object-center" />
										</TabPanel>
									</TabPanels>
									<TabList class="grid grid-cols-4 gap-4 my-2.5 mx-1 sm:grid-cols-2 md:grid-cols-4">
										<Tab v-for="(image, i) in $page.props.product.images" as="template" :key="i">
											<img :src="image.path" alt="" :class="[
                                                    'w-full   rounded-lg ',
                                                    ' focus:outline-none focus:ring-2',
                                                ]" />
										</Tab>
									</TabList>
								</TabGroup>
								<div class="hidden sm:block">
									<h2 class="font-bold text-2xl mt-4 mb-2">
										A gift of Ajwa is a rare treat for date
										connoisseurs
									</h2>

									<p>
										Known as the ‘Holy Date’, Ajwa dates
										have long held a special place within
										Arabic tradition. With their sweet,
										luscious taste and raisin-like texture,
										they are reminiscent of prunes, with a
										ﬂesh which beautifully melts in the
										mouth.
									</p>

									<p>
										Ranging in colour from a delicate soft
										brown to almost black, Bateel's gourmet
										Ajwa dates are delicious and packed with
										nutrients. With each mouthful, you will
										be consuming a high level of vitamins,
										healthy fats, protein and carotenoids.
										You can improve your digestive health,
										boost heart health, reduce blood
										pressure and your risk of a stroke, all
										while enjoying the sweet, creamy ﬂavour
										of these organic superfoods.
									</p>

									<p>
										Ajwa dates have been consumed in Arabia
										for more than 8000 years, given their
										irresistible ﬂavour and superb nutrient
										content. At Bateel, we supply only the
										ﬁnest Ajwa dates, providing a real treat
										for date connoisseurs. These enigmatic
										dates have become one of the most
										sought-after varieties in the world.
									</p>
								</div>
							</div>
							<div class="col-span-6 text-center sm:text-left" >
								<h2 class="text-2xl font-bold text-gray-900 sm:pr-12 ">
									{{ $page.props.product.title }}
								</h2>

								<section aria-labelledby="information-heading" class="mt-2">
									<h3 id="information-heading" class="sr-only">
										Product information
									</h3>
									<div class="text-gray-700  text-sm mb-2  ">{{$page.props.product.description}}</div>

									<div class="text-2xl text-gray-900">
										<span>{{ $page.props.product.price }}</span>
										<span class="text-sm"> per Kg</span>
									</div>

									<!-- Reviews -->
									<div class="mt-2">
										<h2 class="sr-only">Reviews</h2>
										<div class="flex items-center sm:justify-start justify-center">
											<div class="flex items-center">
												<StarIcon v-for="rating in [
												    0, 1, 2, 3, 4,
												]" :key="rating" :class="[
                                                        $page.props.product.stars > rating
                                                           ? 'text-yellow-400'
                                                : 'text-gray-200',
                                                        'h-5 w-5 flex-shrink-0',
                                                    ]" aria-hidden="true" />
											</div>
											<p class="sr-only">
												{{ $page.props.product.stars }} out of 5
												stars
											</p>
											<a href="#"
												class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{
												$page.props.product.reviews
												}}
												reviews</a>
										</div>
									</div>
								</section>

								<section aria-labelledby="options-heading" class="mt-4">
									<h3 id="options-heading" class="sr-only">
										Product options
									</h3>



									<form>
										<div class="mt-2">
											<h2>Kilograms</h2>
											<div class="mt-4  ">
												<div
													class="w-[150px] mx-auto sm:mx-0 flex items-start  justify-between gap-4 group relative border rounded-md p-3 font-medium">
													<button type="button" @click="
													    qte =
													        qte == 1
													            ? 1
													            : qte - 1
													">
														<MinusIcon
															class="w-5 h-5 hover:text-gray-700 text-gray-300 translate-y-[2px]" />
													</button>
													<span class="">{{
													qte
													}}</span>
													<button type="button" @click="qte += 1">
														<PlusIcon
															class="w-5 h-5 hover:text-gray-700 text-gray-300 translate-y-[2px]" />
													</button>
												</div>
											</div>
										</div>

										<button type="submit"
											class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
											Add to cart
										</button>
									</form>
									<!-- delivery -->
									<h2 class="font-bold text-lg mt-10">
										Delivery Details
									</h2>
									<div class="text-sm text-gray-700 mt-2">
										Ship to Algeria with approximate
										shipping fee of $28.00. Estimated
										delivery is between September 25 -
										September 28 .
									</div>
								</section>
							</div>
							<div class="  w-full col-span-6 ">
								<h1 class="text-2xl font-bold">
									Customer Reviews
								</h1>
								<div class="flex items-end gap-4  mt-3">
									<div class="flex items-center ">
										<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[
                                            $page.props.product.stars > rating
                                                ? 'text-yellow-400'
                                                : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0',
                                        ]" aria-hidden="true" />
									</div> <span class="text-gray-500 text-xs">{{$page.props.product.rating}} Based on
										{{$page.props.product.reviews}} reviews</span>
								</div>

								<div class="p-5 mt-4 border-b last:border-none" v-for="review in reviews"
									:key="review.id">
									<h2 class="font-bold text-xl">
										{{ review.first_name }}
										{{ review.last_name }}
									</h2>
									<p class="text-gray-500">
										{{ review.date }}
									</p>

									<div class="flex items-center mt-3 -translate-x-1">
										<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[
                                                review.rating > rating
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0',
                                            ]" aria-hidden="true" />
									</div>
									<p class="mt-3 text-gray-600">
										{{ review.review }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</AuthenticatedLayout>
</template>
