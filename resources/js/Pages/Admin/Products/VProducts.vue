<script setup>
import { ref, computed } from 'vue';
import IconSearch from '../icons/IconSearch.vue';
import { useDataStore } from '@/Stores/data';
import { formatCurrency } from '@/functions';
import {TrashIcon,PencilSquareIcon} from '@heroicons/vue/24/solid';
import VProductProfile from './VProductProfile.vue';
import VAddProduct from './VAddProduct.vue';
const store = useDataStore();


let keyword = ref('');
let current = ref(0);
let itemsPerPage = ref(15);
let toggleName = ref(false);
let toggleDate = ref(false);
let toggleTown = ref(false);
let togglePhone = ref(false);

let selectedProduct = ref(null);
const addProduct = ref(false);
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
			el.title.toLowerCase().includes(keyword.value)
	);

	return tmp;
});
const deleteProduct = (item)=>{
	console.log("deleting item : ", item);
	console.log("selected item  : ", selectedProduct.value)
}
</script>
<template>
	<div class="container" v-if="!selectedProduct && !addProduct">
		<div class="flex items-center justify-between">

			<h1 class="font-bold">Products</h1>
		<div>
			<button class= "font-bold text-xl px-4 py-2 mx-4 rounded-lg addbtn"
			@click="addProduct = true"
			
			>Add Product</button>
		</div>
		</div>

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
					<th>Action</th>
					</tr>
				</thead>
				<tbody>
                    <tr v-for="(item, i) in productsToShow" :key="i"  >
						<td class="innerItems">
							<div class="w-24 h-24">
								<img :src="item.images[0].path"
								class="w-full object-contain rounded-lg"
								 alt="">
							</div>
							
						</td>
						<td class="innerItems font-bold">{{ item.title }}</td>
						<td class="innerItems">
							{{formatCurrency( item.price)}}
						</td>
						<td class="innerItems">{{item.stars}}</td>
						<td >
							<div class="flex items-center justify-start gap-4">

							<PencilSquareIcon class="w-6 h-6 cursor-pointer" @click="selectedProduct = item" />
							<TrashIcon  class="w-6 h-6 cursor-pointer" @click="deleteProduct(item)" />
							</div>
						
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
<VProductProfile :prod="selectedProduct" v-if="selectedProduct && !addProduct" @back="selectedProduct = null" />
<VAddProduct v-if="!selectedProduct && addProduct"  @back="addProduct = false" />
</template>

<style scoped>

.input {
	padding-left: 40px;
	margin-right: 1rem;
}
.addbtn{
	color:var(--vz-btn-text);
	background-color: var(--vz-btn-bg);
}
</style>
