<template>
	<div class="order-container" v-if="!client">
		<div class="container-main">
			<div class="order-wrapper">
				<v-ret-btn @back="$emit('back')" />
				<h5>Order N° {{ order.id }} </h5>
				<p style="opacity: 0.6;">{{`${new Date(order.created_at)}`.split("GMT")[0]}}</p>


				<div class="order-status">
					<!-- <Listbox v-model="order.order_state" class="w-[200px]">
						<div class="relative mt-1">
							<ListboxButton
								class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
								<span class="block truncate">{{ order.order_state.state }}</span>
								<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
									<ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
								</span>
							</ListboxButton>

							<transition leave-active-class="transition duration-100 ease-in"
								leave-from-class="opacity-100" leave-to-class="opacity-0">
								<ListboxOptions
									class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
									<ListboxOption v-slot="{ active, selected }"
										v-for="state in store.data.order_states" :key="state.id" :value="state"
										as="template">
										<li :class="[
										  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
										  'relative cursor-default select-none py-2 pl-10 pr-4',
										]">
											<span :class="[
											  selected ? 'font-medium' : 'font-normal',
											  'block truncate',
											]">{{state.state}}</span>
											<span v-if="selected"
												class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
												<CheckIcon class="h-5 w-5" aria-hidden="true" />
											</span>
										</li>
									</ListboxOption>
								</ListboxOptions>
							</transition>
						</div>
					</Listbox> -->
					<!-- 	<button @click="handleUpdateOrder()" class="delivered rounded-md" style="padding:.6rem 1rem">save</button> -->
					<select name="" id="" v-model="order.order_state" @change="handleUpdateOrder"
					class="rounded-lg max-w-[200px] "
					
					>
						<option :value="state" v-for="state in store.data.order_states" :key="state.id"
					
						
						>
							{{state.state}}</option>

					</select>

				</div>

				<div class="table-responsive table-card my-4 mx-0 overflow-auto  rounded-xl" style="
							border: 1px solid var(--vz-border-color);
						">
					<table class="table table-nowrap align-middle mb-0" style="vertical-align: middle; width: 100%">
						<thead class="table-light text-muted">
							<tr>
								<th>Product Details</th>

								<th>Note</th>
								<th>Quantity</th>
								<th>Item Price</th>
								<th>
									Total
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(prod, j) in props.order.order_products" :key="j">
								<td>
									<div class="" style="
												display: flex;
												align-items: center;
											">
										<div class="" style="
													width: 6rem;
													border-radius: 0.25rem;
													padding: 0.25rem;
													flex-shrink: 0;
												">
											<img :src="prod.product.images[0].path" alt=""
												class="rounded-md w-full object-center object-cover align-middle" />
										</div>
										<div class="flex-grow-1 ms-3" style="
													margin-left: 1rem;
													flex-grow: 1;
												">
											<h5 class="fs-15" style="font-weight: 500">

												{{ prod.product.title }}
											</h5>
										</div>
									</div>
								</td>

								<td>{{ prod.note }}</td>
								<td style="text-align: center">
									{{ prod.quantity }}
								</td>
								<td>
									{{ formatCurrency(prod.product.price) }}
								</td>
								<td>

									{{ formatCurrency(prod.product.price * prod.quantity) }}
								</td>

							</tr>

						</tbody>
					</table>
				</div>

				<div class="mr-8 justify-end flex">
					<table class="table table-borderless mb-0 max-w-[300px]">
						<tbody>
							<tr>
								<td>Sous Total :</td>
								<td class="text-end">
									{{ formatCurrency(order.subtotal)}}
								</td>
							</tr>
							<tr>
								<td>
									Discount
									<span class="text-muted">
										<!-- {{
										order.code_id
									}} -->
									</span>
									:
								</td>
								<td class="text-end">
									<!-- 									- {{ order.percentage }} -->
								</td>
							</tr>
							<tr>
								<td>Delivery fee :</td>
								<td class="text-end">
									{{formatCurrency( order.delivery_fee )}}
								</td>
							</tr>
							<tr>
								<td>Service fee</td>
								<td class="text-end">
									<!-- 									{{ order.service_fee }}-->
								</td>
							</tr>
							<tr class="border-top border-top-dashed">
								<th style="
										border-top: 1px dashed
											var(--vz-border-color);
									">
									Total :
								</th>
								<th class="text-end" style="
										border-top: 1px dashed
											var(--vz-border-color);
									">
									{{
									formatCurrency(
									order.subtotal +
									order.delivery_fee
									)
									}}
									Da
								</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="container-aside">


			<div class="card">
				<div style="display: flex; justify-content: space-between">
					<h5>Details clients</h5>
					<button class="btn-link"
						@click="client = store.data.clients.filter(el => el.id = order.user_id)[0]">Voir
						profile</button>
				</div>
				<div style="
						display: grid;
						grid-template-columns: 1fr 1fr;
						gap: 1rem;
					">
					<div>
						<img src="/logo.svg" style="
								width: 100%;
								max-height: 200px;
								object-fit: cover;
              object-position:center;
										" alt="" />
					</div>
					<div>
						<p>{{ order.first_name }} {{order.last_name}}</p>
						<p>{{ order.email }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<v-client-profile v-if="client" :client="client" @back="client = null" />
</template>

<script setup>
import { ref } from 'vue';
import VRetBtn from '../Btns/VRetBtn.vue';
import { useDataStore } from '@/Stores/data';
import VClientProfile from '../Clients/VClientProfile.vue';
import { formatCurrency } from '@/functions';
import {
	Listbox,
	ListboxLabel,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import axios from 'axios';


const store = useDataStore();
defineEmits(['back']);
const props = defineProps({
	order: Object,
});

let selectedClient = ref(null);
let error = ref('');
let success = ref('');
let client = ref(null);


async function handleUpdateOrder() {
	console.log(props.order.order_state);
	 	try {
			let res = await axios.post("/dashboard/orderstate",{order_id : props.order.id, state_id : props.order.order_state.id});
			if (res.data.success) {
				console.log('success');
			}
			alert("Success");
		} catch (error) {
			alert(error);
		} 
}
function showUserProfile(id) {
	selectedClient.value = store.data.clients.filter(
		(el) => el.id == id
	)[0];
}

</script>

<style scoped>
.order-container {
	display: grid;
	overflow: auto;
	border-radius: 12px;
	/* grid-template-columns: minmax(630px, 2fr) minmax(320px, 1fr); */
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem;

	height: calc(100vh - 64px - 3rem);
}


/* .order-wrapper{ */
/**/
/* } */
.container-main,
.order-wrapper {
	border-radius: 12px;

	padding: 1rem;
	/* overflow:hidden; */
	overflow: scroll;
	height: fit-content;
}

.container-main {
	background: none;
	grid-column: span 2;
	box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.03);
	padding: 0;
}

.container-aside {
	background: none;
}

@media (max-width: 1380px) {
	.container-aside {
		grid-column: span 2;
	}

	.order-container {

		height: auto;
		background: none;
	}
}

.ret-btn {
	background: none;
	text-decoration: underline;
}

.container-aside>p {
	font-weight: bold;
	font-size: 1.4rem;
	margin-bottom: 1rem;
}

.table> :not(caption)>*>* {
	padding: 0.75rem 0.6rem;
	/* -webkit-box-shadow: inset 0 0 0 9999px var(--vz-table-accent-bg); */
	/* box-shadow: inset 0 0 0 9999px var(--vz-table-accent-bg); */
}

table {
	border-collapse: collapse;
}

h5 {
	margin: 0;
	font-size: 1rem;
}

.order-wrapper>h5 {
	margin-top: 1rem;
}

.table-borderless td {
	border: none;
}

.text-end {
	text-align: right;
}

.card {
	margin: 1rem 0;
	padding: 0 1rem 1rem 1rem;
}

.btn-link {
	margin: 0;
	padding: 0;
	background: none;
	text-decoration: underline;
	cursor: pointer;
	color: blue;
}

.deliverer-btn {
	display: block;
	width: 100%;
	border-radius: 12px;
	padding: 1rem;
	margin: 1rem 0;
	cursor: default;
}

.deliverer-btn:last-child {
	margin-bottom: 0;
}

.order-wrapper {
	background-color: var(--vz-card-bg);
}

.order-status {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	width: 100%;
}

.order-status::-webkit-scrollbar {
	width: 0px;
	height: 0px;
}

.order-status h5 {
	white-space: nowrap;
}

.btn-status {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}

.btn-status button {
	border: none;
	border-radius: 12px;
	padding: 0.6rem 0.75rem;
}
</style>
