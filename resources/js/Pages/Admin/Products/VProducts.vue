<template>
	<div class="container" v-if="!selectedProduct">
			<h1>Products</h1>

			<div class="input-wrapper " style="margin:  1rem; margin-bottom: 1rem;">
            <div class="icon">
				<icon-search />

            </div>
				<input type="text" class="input" v-model="keyword" placeholder="Search for products" />
			</div>

		<div class="table">
			<table>
				<thead>
					<tr>

					<th  @click="sortByName()">Image</th>

					<th  @click="sortByEmail()">Title</th>
					<th  @click="sortByDate()">Price</th>
					<th  @click="sortByNOrders()">Rating</th>
					</tr>
				</thead>
				<tbody>
                    <tr v-for="(item, i) in productsToShow" :key="i" @click="selectedProduct = item" >
						<td class="innerItems">
							<div class="w-24 h-24">
								<img :src="item.images[0].path"
								class="w-full object-contain rounded-lg"
								 alt="">
							</div>
							
						</td>
						<td class="innerItems">{{ item.title }}</td>
						<td class="innerItems">
							{{formatCurrency( item.price)}}
						</td>
						<td class="innerItems">{{item.stars}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
<VProductProfile :prod="selectedProduct" v-if="selectedProduct" @back="selectedProduct = null" />
</template>

<script setup>
import { ref, computed } from 'vue';
import IconSearch from '../icons/IconSearch.vue';
import { useDataStore } from '@/Stores/data';

import { formatCurrency } from '@/functions';

import VProductProfile from './VProductProfile.vue';
const store = useDataStore();


let keyword = ref('');
let current = ref(0);
let itemsPerPage = ref(15);
let toggleName = ref(false);
let toggleDate = ref(false);
let toggleTown = ref(false);
let togglePhone = ref(false);

let selectedProduct = ref(null);
const productsToShow = computed(() => {
	return filterSearch.value.slice(
		current.value,
		current.value + itemsPerPage.value
	);
});

function sortByName() {
	if (toggleName.value) {
		store.data.clients.sort((a, b) =>
			a.username.toLowerCase().localeCompare(b.username.toLowerCase())
		);
	} else {
		store.data.clients.sort((a, b) =>
			b.username.toLowerCase().localeCompare(a.username.toLowerCase())
		);
	}
	toggleName.value = !toggleName.value;
}

function sortByDate() {
	if (toggleDate.value) {
		store.data.clients.sort((a, b) =>
			a.creation_date.localeCompare(b.creation_date)
		);
	} else {
		store.data.clients.sort((a, b) =>
			b.creation_date.localeCompare(a.creation_date)
		);
	}
	toggleDate.value = !toggleDate.value;
}

function sortByNOrders() {
	if (toggleTown.value) {
		store.data.clients.sort((a, b) => a.num_orders - b.num_orders);
	} else {
		store.data.clients.sort((a, b) => b.num_orders - a.num_orders);
	}
	toggleTown.value = !toggleTown.value;
}
function sortByEmail() {
	if (togglePhone.value) {
		store.data.clients.sort((a, b) =>
			a.email.localeCompare(b.email)
		);
	} else {
		store.data.clients.sort((a, b) =>
			b.email.localeCompare(a.email)
		);
	}
	togglePhone.value = !togglePhone.value;
}

const filterSearch = computed(() => {
	current.value = 0;
	let tmp = store.data.products.filter(
		(el) =>
			el.title.includes(keyword.value)
	);

	return tmp;
});
</script>
<style scoped>

.input {
	padding-left: 40px;
	margin-right: 1rem;
}
</style>
