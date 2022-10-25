<template>
	<div class="container" v-if="!selectedOrder">
		<h1>Orders</h1>
		<div class="input-wrapper">
			<div class="icon">
				<icon-search />
			</div>
			<input
				class="input"
				type="text"
				v-model="keyword"
				placeholder="Search for N°, client, vendeur etc..."
			/>
		</div>
		<div class="status">
			<button
				class="btn-stat"
				:class="{ 'btn-stat-sel': picked === 0 }"
				@click="handlePicked(0)"
			>
				All
			</button>
			<button
				class="btn-stat"
				:class="{ 'btn-stat-sel': picked === 1 }"
				@click="handlePicked(1)"
			>
				Passées
			</button>
			<button
				class="btn-stat"
				:class="{ 'btn-stat-sel': picked === 2 }"
				@click="handlePicked(2)"
			>
				Confirmées
			</button>
			<button
				class="btn-stat"
				:class="{ 'btn-stat-sel': picked === 3 }"
				@click="handlePicked(3)"
			>
				En routes
			</button>
			<button
				class="btn-stat"
				:class="{ 'btn-stat-sel': picked === 4 }"
				@click="handlePicked(4)"
			>
				Livrées
			</button>
			<button
				class="btn-stat"
				:class="{ 'btn-stat-sel': picked === 7 }"
				@click="handlePicked(7)"
			>
				Annulées
			</button>
			<button
				class="btn-stat"
				:class="{ 'btn-stat-sel': picked === 5 }"
				@click="handlePicked(5)"
			>
				Refusées
			</button>
		</div>
		<div class="table">
			<table>
				<thead>
					<tr>
						<th>N° Commande</th>
						<th @click="sortByClient">Email</th>
						<th>Prix</th>
						<th>Date</th>
						<th>Status</th>
						<th>Commandes</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(item, i) in ordersPerPage"
						:key="i"
						@click="selectedOrder = item"
					>
						<td>{{ item.id }}</td>
						<td>{{ item.user.email }}</td>
						<td>{{ item.subtotal }}DA</td>
						<td>{{ showDateItem(item) }}</td>
						<td>
							<span
								:class="
									item.state_id == 4
										? 'delivered'
										: item.state_id == 5
										? 'refused'
										: item.state_id == 2
										? 'confirmed'
										: item.state_id == 1
										? 'passed'
										: item.state_id == 3
										? 'enroute'
										: item.state_id == 7
										? 'canceled'
										: 'ready'
								"
							>
								{{ status[item.state_id - 1] }}
							</span>
						</td>
						<td style="text-align: center"><!--  {{ item.num_orders }}  --> 0</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<VOrderDetails
		v-if="selectedOrder"
		:order="selectedOrder"
		@back="selectedOrder = null"
	/>
</template>

<script setup>
import { ref, computed } from 'vue';
import VOrderDetails from './VOrderDetails.vue';
import IconSearch from '../icons/IconSearch.vue';
import { useDataStore } from '@/Stores/data';
const store = useDataStore();

let status = ref([
	'Passée',
	'Confirmée',
	'En route',
	'Livrée',
	'Refusée',
	'Prête',
	'Annulée',
]);
let selectedOrder = ref(null);
let picked = ref(0);
let keyword = ref('');
let itemsPerPage = ref(15);
let current = ref(0);
let toggle = ref(false);
let ab = ref(window.screen.availWidth);

function handlePicked(i) {
	current.value = 0;
	picked.value = i;
}
const filterSearch = computed(() => {
	return store.data.orders.filter(
		(el) =>
			`${el.user.first_name} ${el.user.last_name}`.toLowerCase().includes(keyword.value.toLowerCase()) ||
			`${el.id}`.includes(keyword.value) ||
			el.created_at.includes(keyword.value)
	);
});
const ordersToShow = computed(() => {
	if (picked.value == 0) {
		return filterSearch.value;
	}

	return filterSearch.value.filter((el) => el.state_id == picked.value);
});
const ordersPerPage = computed(() => {
	return ordersToShow.value.slice(
		current.value,
		current.value + itemsPerPage.value
	);
});

function showDateItem(item) {
	let first = item.created_at.split('T')[0];

	if (item.state_id != 4 || !item.updated_at) {
		return first;
	}
	let one_min = 1000 * 60;
	let sdate = new Date(item.created_at).getTime();
	let edate = new Date(item.updated_at).getTime();
	let time = edate - sdate;
	item.delay = Math.round(time / one_min);

	return first + '  - ' + item.delay + ' min';
}

function sortByClient() {
	if (toggle.value) {
		store.data.orders.sort((a, b) =>
			a.user.email.toLowerCase().localeCompare(b.user.email.toLowerCase())
		);
	} else {
		store.data.orders.sort((a, b) =>
			b.user.email.toLowerCase().localeCompare(a.user.email.toLowerCase())
		);
	}
	toggle.value = !toggle.value;
}
function sortByDate() {
	if (toggle.value) {
		store.data.orders.sort((a, b) =>
			a.created_at.localeCompare(b.created_at)
		);
	} else {
		store.data.orders.sort((a, b) =>
			b.created_at.localeCompare(a.created_at)
		);
	}
	toggle.value = !toggle.value;
}
/* function sortByNOrders() {
	if (toggle.value) {
		store.data.orders.sort(
			(a, b) => a.num_store.data.orders - b.num_store.data.orders
		);
	} else {
		store.data.orders.sort(
			(a, b) => b.num_store.data.orders - a.num_store.data.orders
		);
	}
	toggle.value = !toggle.value;
} */
function sortById() {
	if (toggle.value) {
		store.data.orders.sort((a, b) => a.id - b.id);
	} else {
		store.data.orders.sort((a, b) => b.id - a.id);
	}
	toggle.value = !toggle.value;
}
function sortByPrice() {
	if (toggle.value) {
		store.data.orders.sort(
			(a, b) => a.subtotal - b.subtotal
		);
	} else {
		store.data.orders.sort(
			(a, b) => b.subtotal - a.subtotal
		);
	}
	toggle.value = !toggle.value;
}
</script>

<style scoped>
.input {
	padding-left: 40px;
}
</style>
