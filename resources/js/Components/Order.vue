<script setup>
import {formatCurrency} from "@/functions";
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
	order : Object,
});
const emits = defineEmits(['back']);

const showProduct = (id) =>{
	window.location = route('products.show',id);
}

</script>

<template >
	<button @click="$emit('back')"><ArrowLeftIcon class="h-5 w-5 -mt-4 " /></button>

<div class="overflow-scroll" >
				<table class="min-w-full">
					<thead class="border-b">
						<tr>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Image</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Name</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left">Price</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left ">Qty</th>
							<th class="text-sm font-bold text-gray-900 px-6 py-4 text-left ">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="op in props.order.order_products" :key="op.id" class="border-b hover:cursor-pointer hover:bg-gray-100"
				@click="showProduct(op.product.id)"	
						
						>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								<img :src="op.product.images[0].path" class="w-14 h-14 rounded-md" alt="">
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{op.product.title}}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{{formatCurrency(op.product.price)}}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{{op.quantity}}</td>

							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{{formatCurrency(op.product.price * op.quantity)}}</td>
						</tr>
					</tbody>
				</table>
			</div>
</template>