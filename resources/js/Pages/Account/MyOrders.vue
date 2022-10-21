<script setup>
import AccountLayout from '@/Layouts/AccountLayout.vue';
import { formatDate, formatCurrency } from '../../functions';
import Order from '@/Components/Order.vue';
import {ref} from 'vue';
const selectedOrder = ref(null);

const showOrder = (order)=>{
	selectedOrder.value = order;
}

</script>
<template>

	<AccountLayout>

		<template #content>
			<div class="overflow-scroll" v-if="!selectedOrder">
				<table class="min-w-full">
					<thead class="border-b">
						<tr>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left">ID</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Date</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Subtotal</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left whitespace-nowrap">Delivery
								fee</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left">State</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="order in $page.props.orders" :key="order.id" class="border-b hover:bg-gray-100"
						@click="showOrder(order)"
						
						>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{order.id}}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{{formatDate(order.created_at)}}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{{formatCurrency(order.subtotal)}}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{{formatCurrency(order.delivery_fee)}}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{{order.orderState.state}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Order v-else :order="selectedOrder" @back="selectedOrder = null" />

		</template>
	</AccountLayout>



</template>
