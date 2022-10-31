<script setup>
import { ref } from 'vue';
import { useDataStore } from '@/Stores/data';
import VRetBtn from '../Btns/VRetBtn.vue';
import { formatCurrency, formatDate } from "@/functions";
import { PhotoIcon, StarIcon, XMarkIcon } from "@heroicons/vue/20/solid";

const store = useDataStore();

const props = defineProps({
	prod: Object,
});
console.log("id : l", props.prod);
const emit = defineEmits(['back']);

const findUser = (id) => {
	let user = store.data.clients.filter(el => el.id == id)[0];
	return ` ${user.first_name} ${user.last_name}`;
}
const mainImage = ref(null);
const sideImagesArray = ref(props.prod.images.filter((el, i) => i > 0));
const sideImages = ref([]);
const deletedImages = ref([]);
const addSideImage = () => {
	if(sideImagesArray.value[sideImagesArray.value.length -1] != 0 ){

	sideImagesArray.value.push(0);
	}
}
const showSideImages = (i) => {
	sideImagesArray.value[i] = { path: URL.createObjectURL(sideImages.value[i].childNodes[0].childNodes[0].files[0]) };
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
const showimage = () => {
	props.prod.images[0].path = URL.createObjectURL(mainImage.value.files[0]);
}
const updateProduct = async () => {


	const formData = new FormData();
	formData.append("title", props.prod.title);
	formData.append("description", props.prod.description);
	formData.append("price", props.prod.price);
	formData.append("product_id", props.prod.id);

	if (props.prod.images[0].path.startsWith("blob")) {
		formData.append("mainImage", mainImage.value.files[0]);
	}
	let n_imgs = 0;
	for (let index = 0; index < sideImages.value.length; index++) {
		if(sideImagesArray.value[index] == 0){
			continue;
		}else if (sideImagesArray.value[index].path.startsWith("blob")){
			formData.append(`sideImage${n_imgs}`,sideImages.value[index].childNodes[0].childNodes[0].files[0]);
			n_imgs++;
		}
		
	}
	formData.append("n_images",n_imgs);
	formData.append("toDelete", JSON.stringify(deletedImages.value));
	
	console.log("form data : ", formData);
	const res = await axios.post("/dashboard/products/update", formData);
	console.log("res : ", res);
	if (res.status == 200) {
		if (res.data.success) {
			alert("Success");
		} else {
			alert("Error");
		}
	} else {
		alert("Error");
	}
}
const removeSideImage = (i) => {
	if(sideImagesArray.value[i].id){

	deletedImages.value.push(sideImagesArray.value[i].id);
	}
	sideImagesArray.value = sideImagesArray.value.filter((el,j)=>i != j);
	console.log("delete ids : ", deletedImages.value);

}
</script>
<template>
	<div class="container py-4 px-6">
		<div class="flex items-center justify-between">

			<v-ret-btn @back="emit('back')" />

			<div><button class="font-bold text-xl px-4  rounded-lg" @click="updateProduct">Save</button></div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">

			<div class="col-span-1">
				<div class="relative border border-dashed border-gray-600 rounded-lg aspect-1 overflow-hidden"
					:class="prod.images[0].path ? 'border-none': ''">

					<label for="mainImage" class="flex items-center justify-center h-full"
						:class="!prod.images[0].path ? '':'hidden'">
						<input type="file" id="mainImage" accept="image/*" class="hidden" ref="mainImage"
							@change="showimage" />
						<PhotoIcon class="w-10 h-10" />
					</label>
					<img :src="prod.images[0].path" v-if="prod.images[0].path" alt=""
						class="object-cover h-full w-full" />
					<div class="absolute  top-0 right-0 cursor-pointer" v-if="prod.images[0].path"
						@click="prod.images[0].path = ''">
						<XMarkIcon class="w-8 h-8" />
					</div>
				</div>
			</div>
			<div class="col-span-2">
				<div>
					<label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title</label>
					<input type="text" name="title" id="title"
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						v-model="prod.title" />
				</div>
				<div>
					<label for="description" class="block text-sm font-medium text-gray-700 my-2">Description</label>
					<textarea name="description" id="description" rows="5"
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm my-2"
						v-model="prod.description"></textarea>
				</div>

				<div>
					<label for="price" class="block text-sm font-medium text-gray-700">Price</label>
					<input type="text" name="price" id="price"
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						v-model="prod.price" />
				</div>


			</div>


		</div>
		<div class="flex flex-wrap gap-8 items-center justify-start my-8">
			<div v-for="(item,i) in sideImagesArray" :key="i" ref="sideImages"
				class="relative rounded-lg  border aspect-1 w-24 flex items-center justify-center overflow-hidden"
				:class="item==0 ? 'border  border-gray-600 border-dashed':''">

				<label :for="`simg${i}`" :class="item == 0? '':'hidden'" class=" w-full h-full ">
					<input type="file" @change="showSideImages(i)" :id="`simg${i}`" accept="image/*" class="hidden">
				</label>
				<img :src="item.path" v-if="item != 0" class="object-cover w-full h-full">
				<div class="absolute  top-0 right-0 cursor-pointer" v-if="item.path" @click="removeSideImage(i)">
					<XMarkIcon class="w-6 h-6" />
				</div>

			</div>
			<div>
				<button class="text-4xl font-bold " @click="addSideImage">+</button>
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
