<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { ref,onMounted } from "vue";



/* 		if(el.getBoundingClientRect().bottom < window.pageYOffset + window.screen.availHeight  ){
			console.log("WSSELnA");
		} */



let products = ref();
let last_id = ref(0);
let get_data = false

async function loadMore(){
	if (!get_data) {return ;}
	get_data =false;

	const res = await fetch( `https://bateelclone.reepoo.site/index.php/api/products?id=${last_id.value}`);
					const data = await res.json();

	products.value = [...products.value,...data];
	get_data = true; 
}
  onMounted (async ()=>{

	 const res = await fetch( `https://bateelclone.reepoo.site/index.php/api/products?id=${last_id}`);
					const data = await res.json();

	console.log("the data : ",data);
	products.value = data;
	console.log("products: ",products.value);
	last_id.value = products.value[products.value.length -1].id;
	get_data = true; 

    window.addEventListener('scroll', async ()=>{
const el = document.getElementById("scroll");
if(el.getBoundingClientRect().bottom <1200){

	await loadMore();

}
	});
  }) ;


const breadcrumbs = ref([
	{ id: 1, name: "Home", href: "#" },
	{ id: 2, name: "All Products", href: "#" },
]);



</script>

<template>

	<Head title="All Products" />

	<AuthenticatedLayout>
		<template #header>
			<nav aria-label="Breadcrumb" class="flex md:justify-end items-center">
				<ol role="list" class="flex items-center space-x-2">
					<li v-for="(breadcrumb, i) in breadcrumbs" :key="breadcrumb.id">
						<div v-if="i + 1 < breadcrumbs.length" class="flex items-center">
							<a :href="breadcrumb.href" class="mr-2 text-sm font-bold text-gray-900">{{ breadcrumb.name
							}}</a>
							<svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"
								xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
								<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
							</svg>
						</div>
						<div v-else class="mr-2 text-sm text-gray-700">
							{{ breadcrumb.name }}
						</div>
					</li>
				</ol>
			</nav>
		</template>
		<template #main>


			
			<div class="py-2">
				<div class="max-w-7xl mx-auto ">
					<div class="overflow-hidden ">
						<h2
							class="font-medium text-4xl text-gray-800 leading-tight p-6 lg:p-8 text-center lg:text-left">
							All Products
						</h2>
						<div class="">
							<div id="scroll" class="mx-auto max-w-2xl py-8 pt-0  px-6 lg:max-w-7xl lg:px-8" >
								<div  class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4" v-if="last_id">
									<div v-for="product in products" :key="product.id" class="relative">
										<div
											class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 hover:opacity-75 cursor-pointer">

											<a :href="route('products.show',product.id)" class="block">
											<img :src="product.images[0].path" :alt="product.imageAlt"
												class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
</a>
										</div>
										<div class="mt-4 sm:flex justify-between block text-center sm:text-left  sm:px-1 ">
											<div>
												<h3 class="text-xl sm:text-md text-gray-700 ">
													<a :href="
                                                            route(
                                                                'products.show',
                                                                product.id
                                                            )
                                                        ">

														{{ product.title }}
													</a>
												</h3>
												<span class="text-[11px] text-gray-600">From </span><span class="text-xl font-medium text-gray-900">{{ product.price }}</span>
											</div>
											<div class=" flex justify-center items-baseline gap-2" >
												<button class="mt-1 border border-gray-500 py-2 w-1/2 sm:w-28 text-md text-gray-500 hover:text-gray-700">
													Add to cart
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
<div class="px-4 py-12" :class="get_data? 'hidden':''" >
    
  <div class="flex justify-center items-center">
    <div class="spinner-border animate-spin inline-block w-10 h-10 border-gray-700 rounded-full" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
        </div>
  
		</template>
	</AuthenticatedLayout>
</template>
<style>
.spinner-border{
	border:.25em solid rgb(55,65,81);
border-right-color: transparent;
}
.animate-spin{
animation: spin 1s linear infinite;
}
.visually-hidden{
position: absolute !important;
width: 1px !important;
height: 1px !important;
padding: 0 !important;
margin: -1px !important;
overflow: hidden !important;
clip: rect(0,0,0,0) !important;
white-space: nowrap !important;
border: 0 !important;
}
@keyframes spin{to{transform:rotate(360deg)}}
</style>