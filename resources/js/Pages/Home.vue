<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ref } from 'vue';
import ProductHScroll from '@/Components/ProductHScroll.vue';

defineProps({
	canLogin: Boolean,
	canRegister: Boolean,
	products : Array,


});

console.log("the current url is : ", window.location.href.toString().split("/"));
const images = ref([

	"https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/main.jpg",
	"https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/small-l.jpg",
	"https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/small-r.jpg",
	"https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/wide.jpg"
]);

</script>

<template>

	<Head title="Welcome" />
	<AuthenticatedLayout>


		<template #main>
			<div class=" mx-auto  mt-6 mb-20 w-[100vw]   overflow-hidden">
				<div class=" md:h-[590px] sm:h-[360px] h-[250px] relative">

					<img src="https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/wide.jpg"
						class="object-cover  h-full object-center w-full" alt="" srcset="">
					<div
						class="absolute  inset-0 md:w-4/5  w-[90%] mx-auto text-center  text-white flex items-center justify-center flex-col gap-6 ">
						<h2 class="font-bold md:text-4xl text-2xl text-shadow ">Discover the Difference</h2>
						<span class="md:text-xl  text-md text-shadow  ">Cultivators of the world’s only gourmet dates
							packaged in
							luxury
							hand-painted wooden gift boxes</span>
						<a :href="route('products.index')"
							class="py-3 px-10 mt-2 uppercase bg-white rounded-lg text-black">
							<span>Shop now</span>
						</a>
					</div>
				</div>


			</div>
			<div class="max-w-7xl mx-auto"> 


			<div
				class="hidden sm:mx-auto mx-4  mb-20  md:flex justify-center items-center">
				<div class="grid md:grid-cols-2 grid-cols-1 gap-6">
					<div>
						<img src="https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/main.jpg"
							class="object-contain w-full object-center" alt="" srcset="">
					</div>
					<div class="grid gap-6">
						<div class="grid md:grid-cols-2 grid-cols-1 gap-6">
							<div>
								<img src="https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/small-l.jpg"
									class="object-contain w-full object-center" alt="" srcset="">
							</div>
							<div>
								<img src="https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/small-r.jpg"
									class="object-contain w-full object-center" alt="" srcset="">
							</div>
						</div>
						<div>

							<img src="https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/wide.jpg"
								class="object-contain  w-full object-center " alt="" srcset="">
						</div>


					</div>
				</div>

			</div>

			<div
				class="block sm:mx-auto mx-6  mb-20  md:hidden justify-center items-center">
				<TabGroup>
					<TabPanels class="mt-2">
						<TabPanel v-for="(image, i) in images" :key="i">
							<img :src="image" alt="" class="w-full h-96 object-cover object-center" />
						</TabPanel>
					</TabPanels>
					<TabList class="flex justify-center items-start gap-4 mt-6 mx-1 ">
						<Tab v-for="(image, i) in images" as="template" :key="i">
							<div class="border border-gray-500 rounded-full w-5 h-5 "></div>
						</Tab>
					</TabList>
				</TabGroup>
			</div>

	<ProductHScroll  title="Premium Organic Dates" />

			<div class= " my-20 md:mx-auto mx-6 ">

				<div class="md:flex items-center justify-center block center relative">
					<div class=" md:mr-[-5rem] z-0 relative"><img
							src="https://bateel.com/media/wysiwyg/boutiquePage/Farm-image-for-web.jpg" class="object-contain object-center mx-auto  relative img-shadow z-0
							" alt="" srcset="" />
					</div>
					<div class="bg-white shadow md:pt-14 pt-8  md:mt-0 -mt-14 border border-gray-100 md:px-10 px-6 md:w-[500px] md:max-w-[500px] md:mx-0 mx-auto w-[90%] max-w-[440px] z-10 relative
					">
						<h2 class="font-medium text-2xl">Bateel Organic Date Groves</h2>
						<p class="text-gray-600 mt-4 text-sm font-sans">Bateel date groves have a rich heritage dating
							back nearly 100 years when the first date palms were planted in 1932. </p>
						<div class="text-center mt-6 md:mb-8 mb-4"><button
								class="bg-white rounded-md text-sm mx-auto px-6 py-2  border-gray-800 border ">Discover</button>
						</div>
					</div>
				</div>

			</div>
			
	<ProductHScroll  title="Gourmet Products" />


			</div>
		</template>

	</AuthenticatedLayout>


</template>

<style>
.text-shadow {
	text-shadow: 2px 2px 2px hsl(0, 0%, 17%);
}

.img-shadow {
	box-shadow: 15px 15px 0px #f0e2e1;
}
</style>