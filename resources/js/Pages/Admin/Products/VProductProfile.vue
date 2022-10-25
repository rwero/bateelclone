<template>
	<div class="container-aside">
		<v-ret-btn @back="emit('back')" />
		<div class="product-container">
			<div class="img-prod">
				<img :src="prod.images[0].path" alt="" class="img" />
			</div>

			<div style="">
				<div style="
						display: flex;
						justify-content: center;
						align-items: center;
						gap: 1rem;
					">
					<p class="title">{{ prod.title }}</p>
					<button class="btn-save delivered" @click="updateProductDetails">Sauvegarder</button>
				</div>
				<div class="table" style="margin: 1rem 0">
					<table class="details-table">
						<tr>
							<td style="width: 1%">
								<h5>Description</h5>
							</td>

							<td>
								<textarea v-model="prod.description" class="input " rows="4" cols="100
									" style="width: 100%" />
							</td>
						</tr>


						<tr>
							<td>
								<h5>Price:</h5>
							</td>
							<td class="flex items-center justify-start gap-4">
								<p class="items">{{formatCurrency(prod.price) }}</p>
								<input type="text" v-model="prod.price" class="border border-gray-400 rounded-lg">
							</td>
						</tr>
						<tr>
							<td>
								<h5>Status:</h5>
							</td>
							<td>
								<select name="" id="" v-model="prod.is_available" class="input"
									@change="toggleAvailable">
									<option value="0">Not available</option>
									<option value="1">Available</option>
								</select>
								<p class="items"></p>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>

		<div class="  w-full  ">
			<h1 class="text-2xl font-bold">
				Customer Reviews
			</h1>
			<div class="flex items-end gap-4  m-4">
				<div class="flex items-center ">
					<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[
					    prod.stars > rating
					        ? 'text-yellow-400'
					        : 'text-gray-200',
					    'h-5 w-5 flex-shrink-0',
					]" aria-hidden="true" />
				</div>
				<span class="text-gray-500 text-xs">{{prod.rating}} Based on
					{{prod.all_reviews.length}} review(s)</span>
			</div>

			<div class="p-5 mt-4 border-b last:border-none" v-for="review in prod.all_reviews" :key="review.id">
				<h2 class="font-bold text-xl" style="margin-left: 0;">
					{{findUser( review.user_id )}}
				</h2>
				<p class="text-gray-500">
					{{ formatDate(review.created_at)}}
				</p>

				<div class="flex items-center mt-3 -translate-x-1">
					<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[
					    review.rating > rating
					        ? 'text-yellow-400'
					        : 'text-gray-200',
					    'h-5 w-5 flex-shrink-0',
					]" aria-hidden="true" />
				</div>
				<p class="mt-3 text-gray-600 text-xl">
					{{ review.review }}
				</p>
			</div>
		</div>


	</div>


</template>

<script setup>
import { ref } from 'vue';
import { useDataStore } from '@/Stores/data';
import VRetBtn from '../Btns/VRetBtn.vue';
import { formatCurrency, formatDate } from "@/functions";
import { StarIcon } from "@heroicons/vue/20/solid";
const store = useDataStore();

const props = defineProps({
	prod: Object,
});

const findUser = (id) => {
	let user = store.data.clients.filter(el => el.id == id)[0];
	return ` ${user.first_name} ${user.last_name}`;
}

async function toggleAvailable() {
	const jsonData = {
		seller_product_id: props.prod.seller_product_id,
		is_available: props.prod.is_available,
	};

	try {
		const response = await fetch(
			store.path + '/api/v1/products/updateProductAvailability',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(jsonData),
			}
		);
		const data = await response.json();
		alert(data.message);
		if (data.success) {
			for (let child of props.prod.children) {
				child.is_available = props.prod.is_available;
			}
		}
	} catch (error) {
		alert(error);
	}
}

const emit = defineEmits(['back']);
</script>

<style scoped>
.product-container {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 1rem;
}

@media (max-width: 1000px) {
	.product-container {
		grid-template-columns: 1fr;
	}
}

.img-prod {
	border-radius: 12px;
	box-shadow: var(--vz-box-shadow);
	display: flex;
	justify-content: center;
}

.img {
	object-fit: cover;
	border-radius: 12px;
	width: 100%;

	max-width: 500px;
}

.title {
	padding: 0;
}

.items {
	font-size: 0.8rem;
}

h5 {
	font-size: 14px;
}

h2 {
	font-size: 1.2rem;
	margin: 1rem;
}

.details-table td {
	border: none;
	padding: 0.5rem;
}

.prod-details-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
}

.table-b {
	border: 1px solid var(--vz-border-color);
	border-radius: 12px;
	margin: 1rem 0;
	overflow: scroll;
}

@media (max-width: 1000px) {
	.prod-details-container {
		margin: -1rem -1rem;
		grid-template-columns: 1fr;
	}

	.table-b {
		border: none;
	}
}

.input {
	padding: 10px;
}

.btn-save {
	border-radius: 12px;
	padding: 0.8rem 2rem;
}
</style>
