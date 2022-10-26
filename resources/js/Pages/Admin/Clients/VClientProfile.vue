<template>
	<div class="client-container">
		<div class="container-main">
			<v-ret-btn @back="$emit('back')" />
			<div class="header">
				<div class="image-container">
					<img
						src="/logo.svg"
						class="profile-img"
					/>
					<!-- {{client}} -->
				</div>
			</div>
			<div class="info">
				<p class="title">Details profile</p>
				<div>
					<p>First Name</p>
					<p>{{ client.first_name }}</p>
				</div>
				<div>
					<p>Last Name</p>
					<p>{{ client.last_name }}</p>
				</div>
				<div>
					<p>Email:</p>
					<p>{{ client.email }}</p>
				</div>
				<div>
					<p>Date d'inscription:</p>
					<p>
						{{ getDate() }}
					</p>
				</div>
				<div>
					<p>Commandes:</p>
					<p><!-- {{ client.num_orders }} --> 0</p>
				</div>
				<div>
					<p>Total:</p>
					<p><!-- {{ client.purchased }} --> 0</p>
				</div>
			</div>
			<!-- <div class="act">
				<p class="title">Actions</p>
				<div class="act-cont">
					<div>
						<button class="btn-act passed">Suspendre</button>
					</div>
					<div>
						<button class="btn-act refused">Supprimer</button>
					</div>
				</div>

				
			</div> -->
		</div>
		<div class="container-aside">
			<p>Produits les plus achetés</p>
			<div class="table">
				<!-- <table>
					<thead>
						<tr>
							<th>Image</th>
							<th>Product</th>
							<th>Times</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(prod, i) in calcProducts" :key="i">
							<td>
								<div class="nameimage">
									<img
										:src="
											'https://reepoo.site/Food/' +
											getProductImage(prod)
										"
										class="p-image"
									/>
									<p>
										{{ prod.parent_name }}
										{{ prod.product_name }}
									</p>
								</div>
							</td>
							<td>{{ prod.username }}</td>
							<td>{{ prod.type }}</td>
							<td>{{ prod.cat }}</td>
							<td>{{ prod.count }}</td>
						</tr>
					</tbody>
				</table> -->
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { useDataStore } from '@/Stores/data';
import VRetBtn from '../Btns/VRetBtn.vue';
const store = useDataStore();
defineEmits(['back']);
const props = defineProps({
	client: Object,
});

function getDate() {
	let date =  new Date(props.client.created_at).toISOString().split("T");
	return  `${date[0]} ${date[1].split(".")[0]}`;
}

/* let calcProducts = computed(() => {
	const user_orders = store.data.orders.filter(
		(el) => el.user_id == props.client.user_id && el.order_state_id == 4
	);
	let prods = [];
	let prod_ids = [];
	for (let order of user_orders) {
		for (let seller of order.sellers) {
			for (let prod of seller.products) {
				if (prod_ids.length == 0) {
					prods.push({
						product_name: prod.product_name,
						product_image: prod.product_image,
						is_parent: prod.is_parent,
						rel_prod: prod.rel_prod,
						count: 1,
						username: seller.username,
						parent_name: prod.parent_name,
						cat: prod.sub_category_name,
						type: prod.type_name,
					});
					prod_ids.push(prod.seller_product_id);
				} else {
					let i = prod_ids.indexOf(prod.seller_product_id);
					if (i == -1) {
						prods.push({
							product_name: prod.product_name,
							product_image: prod.product_image,
							is_parent: prod.is_parent,
							rel_prod: prod.rel_prod,
							count: 1,
							username: seller.username,
							parent_name: prod.parent_name,
							cat: prod.sub_category_name,
							type: prod.type_name,
						});
						prod_ids.push(prod.seller_product_id);
					} else {
						prods[i].count += 1;
					}
				}
			}
		}
	}

	console.log('prods : ', prods);
	return prods.sort((a, b) => b.count - a.count);
}); */
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

