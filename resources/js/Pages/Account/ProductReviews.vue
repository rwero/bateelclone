<script setup>
import AccountLayout from '@/Layouts/AccountLayout.vue';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid'
import {formatDate} from '@/functions';

const showProduct = (id)=>{
	window.location = route("products.show",id)
}
</script>
<template>

	<AccountLayout>

		<template #content>
			<div>


				<div class="block block-dashboard-info">
					<div class="block-title text-xl  p-4">
						<strong>My Product Reviews</strong>
					</div>
					<div v-if="$page.props.reviews.length == 0"
						class="flex items-center justify-start gap-4 bg-indigo-600 rounded-md w-full text-white px-4 py-3">
						<div>
							<ExclamationTriangleIcon class="h-6 w-6 " />
						</div>
						<div>
							You Have submitted 0 reviews
						</div>
					</div>
					<div v-else class="overflow-scroll">
				<table class="min-w-full"> 
					<thead class="border-b">
						<tr>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Image</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Name</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left ">Review</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left ">Stars</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left ">Date</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="review in $page.props.reviews"  class="border-b hover:cursor-pointer hover:bg-gray-100"
				@click="showProduct(review.product.id)"	
						
						>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								<img :src="review.product.images[0].path" class="w-14 h-14 rounded-md" alt="">
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{review.product.title}}</td>
							<td class="px-6 py-4  max-w-10 text-sm font-medium text-gray-900">
								{{review.review}}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{{review.rating}}</td>

							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{{formatDate(review.created_at)}}</td>
						</tr>
					</tbody>
				

				</table>

					</div>

				</div>


			</div>
		</template>
	</AccountLayout>



</template>
