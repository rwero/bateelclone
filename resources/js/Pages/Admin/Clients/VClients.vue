<template>
	<div class="container" v-if="!selectedClient">
			<h1>Clients</h1>

			<div class="input-wrapper">
            <div class="icon">
				<icon-search />

            </div>
				<input type="text" class="input" v-model="keyword" placeholder="Search for clients" />
			</div>

		<div class="table">
			<table>
				<thead>
					<tr>

					<th  @click="sortByName()">Client</th>

					<th  @click="sortByEmail()">Email</th>
					<th  @click="sortByDate()">Date</th>
					<th  @click="sortByNOrders()">Orders</th>
					</tr>
				</thead>
				<tbody>
                    <tr v-for="(item, i) in clientsToShow" :key="i" @click="selectedClient = item" >
						<td class="innerItems">
							
							<p>{{ `${item.first_name} ${item.last_name}` }}</p>
						</td>
						<td class="innerItems">{{ item.email }}</td>
						<td class="innerItems">
							{{ item.created_at.split('T')[0] }}
						</td>
						<td class="innerItems"><!-- {{ item.num_orders }} --> 0</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
		<v-client-profile :client="selectedClient" v-if="selectedClient" @back="selectedClient = null" />
</template>

<script setup>
import { ref, computed } from 'vue';
import IconSearch from '../icons/IconSearch.vue';
import { useDataStore } from '@/Stores/data';

import VClientProfile from './VClientProfile.vue';

const store = useDataStore();

console.log(' the data in the vclient ', store.data);

let keyword = ref('');
let current = ref(0);
let itemsPerPage = ref(15);
let toggleName = ref(false);
let toggleDate = ref(false);
let toggleTown = ref(false);
let togglePhone = ref(false);

let selectedClient = ref(null);
const clientsToShow = computed(() => {
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
	let tmp = store.data.clients.filter(
		(el) =>
			el.email.includes(keyword.value) ||
			el.username.toLowerCase().includes(keyword.value.toLowerCase())
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
