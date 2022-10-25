<template>
	<div style="
			height: calc(100vh - 64px - 3rem);
			overflow-y: scroll;
			border-radius: 12px;
		">
		<h1>Dashboard</h1>
		<div class="card-container">
			<div class="card p-2">
				<p class="heading">Revenus estimé</p>
				<p> {{
				formatCurrency( store.data.orders.reduce(
				(x, v) => x + (v.subtotal + v.delivery_fee ),
				0,
				)
				)
				}} </p>
			</div>
			<div class="card p-2">
				<p class="heading">Ths month</p>
				<p>{{formatCurrency(14415850)}}</p>
			</div>
			<div class="card p-2">
				<p class="heading">Orders</p>
				<p> {{ store.data.orders. length }} </p>
			</div>

			<div class="card p-2">
				<p class="heading">Clients</p>
				<p>
					{{ store.data.clients.length }}
				</p>
			</div>
		</div>
		<div class="charts-container">
			<VOrdersChart class="card" />
			<VRevenuChart class="card" />
		</div>
		<div class="charts-container">
			<div class="card p-10">
				<h2>Best Products</h2>
				<!-- <div class="table" style="min-width:500px"> -->
				<!-- <div class="table">
					<table>
						<tr v-for="(item, i) in store.data.best_prods" :key="i">
							<td>
								<div class="nameimage">
									<img
										:src="
											'https://reepoo.site/Food/' +
											getProductImage(item)
										"
										class="p-image"
									/>

									<p>
										{{
											item.rel_prod == 0
												? item.product_name
												: item.description
										}}
									</p>
								</div>
							</td>
							<td>{{ item.username }}</td>
							<td>
								{{ item.sold_times }}
							</td>
						</tr>
					</table>
				</div> -->
			</div>

			<div class="card p-10">
				<h2>Best sellers</h2>
				<div class="table">
					<!-- <table>
						<tr v-for="(item, i) in topSellers" :key="i">
							<td>
								<div class="nameimage">
									<img
										:src="
											'https://reepoo.site/Sellers/' +
											item.image
										"
										class="p-image"
									/>
									<p>{{ item.username }}</p>
								</div>
							</td>
							<td>
								{{ item.creation_date.split('T')[0] }}
							</td>
							<td>{{ item.seller_orders }}</td>
							<td>{{ item.sub_category_name }}</td>
							<td>{{ item.wilaya }}</td>
							<td>{{ item.phone_number }}</td>
						</tr>
					</table> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import VOrdersChart from './VOrdersChart.vue';
import VRevenuChart from './VRevenuChart.vue';
import { formatCurrency } from "@/functions";
import { useDataStore } from '../../../Stores/data';
import { ref } from 'vue';

const store = useDataStore();

/* const topSellers = ref(
	store.data.sellers
		.sort((a, b) => b.seller_orders - a.seller_orders)
		.slice(0, 5)
); */
/* function getProductImage(item) {
	if (item.rel_prod != 0) {
		for (let el of store.data.sellers) {
			for (let cat of Object.keys(el.menu)) {
				for (let prod of el.menu[cat]) {
					if (item.rel_prod == prod.seller_product_id) {
						return prod.product_image;
					}
				}
			}
		}
	} else {
		return item.product_image;
	}
} */
</script>

<style scoped>
h2 {
	color: var(--vz-heading-color);
	padding: 1rem 0.5rem;
}

.card-container {
	display: grid;
	gap: 1rem;
}


.heading {
	font-size: 1rem;
	font-weight: bold;
}

.charts-container {
	display: grid;

	grid-template-columns: 1fr;
	gap: 1rem;
	margin: 1rem 0;
}

@media (min-width: 600px) {
	.card-container {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1000px) {
	.card-container {
		grid-template-columns: repeat(4, 1fr);
	}

	.charts-container {
		grid-template-columns: repeat(2, 1fr);
	}
}

.table {
	height: 400px;
	overflow: scroll;
	/* margin:1rem 0; */
	/* padding:1rem 0; */
}

.p-10 {
	padding: 0 10px;
}

.p-2 {
	padding: 2rem;
}

h1 {
	margin: 0 0 1rem 0;
}

tr:first-child {

	border-top: 1px solid var(--vz-border-color);
}
</style>
