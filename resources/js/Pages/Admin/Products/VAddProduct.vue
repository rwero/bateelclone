<script setup>
import axios from 'axios';
import { ref } from 'vue';

import VRetBtn from '../Btns/VRetBtn.vue';
import { PhotoIcon } from '@heroicons/vue/24/solid';
const product = ref({
	title: "",
	description: '',
	price: '',

});
const emit = defineEmits(['back']);

const mainImage = ref(null);
const mainImageUrl = ref("");
const sideImages = ref([]);
const sideImagesArray = ref([]);
const showimage = () => {
	mainImageUrl.value = URL.createObjectURL(mainImage.value.files[0]);
}

const showSideImages = (i) => {
	sideImagesArray.value[i] = URL.createObjectURL(sideImages.value[i].childNodes[0].childNodes[0].files[0]);
}
const addSideImage = () => {
	sideImagesArray.value.push(0);
}
const addProduct = async () => {
	console.log("the product is  : ", product.value);
	const mainImageData = mainImage.value.files[0]
	const formData = new FormData();
	formData.append("mainImage", mainImageData);
	let n_imgs = 0;
	for (let index = 0; index < sideImages.value.length; index++) {
		const element = sideImages.value[index].childNodes[0].childNodes[0].files[0];
		if (element) {
			n_imgs++;
			formData.append(`sideImage${index}`, element);
		}
	}
	formData.append("n_images",n_imgs);
	formData.append("title", product.value.title);
	formData.append("description", product.value.description);
	formData.append("price", product.value.price);
	const res = await axios.post("/dashboard/products", formData);
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
</script>

<template>
	<div class="container py-4 px-6">

		<v-ret-btn @back="emit('back')" />

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
			<div class=" col-span-1">
				<div class="border border-dashed border-gray-600 rounded-lg aspect-1 overflow-hidden"
					:class="mainImageUrl ? 'border-none':''">
					<label for="mainImage" class="flex items-center justify-center h-full"
						:class="!mainImageUrl ? '':'hidden'">
						<input type="file" id="mainImage" accept="image/*" class="hidden" ref="mainImage"
							@change="showimage" />
						<PhotoIcon class="w-10 h-10" />
					</label>
					<img :src="mainImageUrl" v-if="mainImageUrl" class="object-cover h-full w-full">
				</div>
			</div>
			<div class="col-span-2">
				<div>
					<label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title</label>
					<input type="text" name="title" id="title"
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						v-model="product.title" />
				</div>
				<div>
					<label for="description" class="block text-sm font-medium text-gray-700 my-2">Description</label>
					<textarea name="description" id="description" rows="5"
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm my-2"
						v-model="product.description"></textarea>
				</div>

				<div>
					<label for="price" class="block text-sm font-medium text-gray-700">Price</label>
					<input type="text" name="price" id="price"
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						v-model="product.price" />
				</div>


			</div>
		</div>
		<div class="flex flex-wrap gap-8 items-center justify-start my-8">
			<div v-for="(item,i) in sideImagesArray" :key="i" ref="sideImages"
				class="rounded-lg  border aspect-1 w-24 flex items-center justify-center overflow-hidden"
				:class="item==0 ? 'border  border-gray-600 border-dashed':''">

				<label :for="`simg${i}`" :class="item == 0? '':'hidden'" class=" w-full h-full ">
					<input type="file" @change="showSideImages(i)" :id="`simg${i}`" accept="image/*" class="hidden">
				</label>
				<img :src="item" v-if="item != 0" class="object-cover w-full h-full">

			</div>
			<div>
				<button class="text-4xl font-bold " @click="addSideImage">+</button>
			</div>

		</div>
		<div>
			<button class="font-bold text-xl px-4 py-2 mx-4 rounded-lg " @click="addProduct">Add</button>
		</div>
	</div>

</template>
