<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineProps({
	canLogin: Boolean,
	canRegister: Boolean,

})

</script>

<template>

	<Head title="Welcome" />
	<AuthenticatedLayout>


		<template #main>
			<div class=" mx-auto mb-20 w-[100vw] absolute  overflow-hidden inset-x-0">
				<div class=" md:h-[590px] sm:h-[360px] h-[250px] relative">

					<img src="https://bateel.com/media/wysiwyg/HomePageBanners/2022/palm/international/wide.jpg"
						class="object-cover  h-full object-center w-full" alt="" srcset="">
					<div
						class="absolute  inset-0 md:w-4/5  w-[90%] mx-auto text-center  text-white flex items-center justify-center flex-col gap-6 ">
						<h2 class="font-bold md:text-4xl text-2xl text-shadow ">Discover the Difference</h2>
						<span class="md:text-xl  text-md text-shadow  ">Cultivators of the world’s only gourmet dates packaged in
							luxury
							hand-painted wooden gift boxes</span>
						<a :href="route('products.index')" class="py-3 px-10 mt-2 uppercase bg-white rounded-lg text-black">
							<span>Shop now</span>
						</a>
					</div>
				</div>


			</div>

			<div class=" mx-auto mb-20 md:mt-[680px] sm:mt-[450px] mt-[340px] flex justify-center items-center">
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

			<div class="my-20 mx-auto">
				<h2 class="font-semibold text-3xl mt-4 mb-8">Premium Organic Dates</h2>
				<div class="grid md:grid-cols-3 gap-6 items-center grid-cols-1">
					<div>
						<div>
							<img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/0/1/01_majdool_lf.jpg"
								class="object-contain w-full object-center" alt="" srcset="">
						</div>
						<div class="mt-2">
							<h3 class="text-center font-medium">Medjool Dates</h3>
							<p class="text-center font-bold mt-1">$54.00 <span class="text-gray-500 text-sm">per
									Kg</span></p>
						</div>
					</div>
					<div>
						<div>
							<img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/k/h/khidri_pistachio_2.jpg"
								class="object-contain w-full object-center" alt="" srcset="">
						</div>
						<div class="mt-2">
							<h3 class="text-center font-medium">Khidri Dates with Pistachio</h3>
							<p class="text-center font-bold mt-1">$54.00 <span class="text-gray-500 text-sm">per
									Kg</span></p>
						</div>
					</div>
					<div>
						<div>
							<img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/0/1/01_ajwa_lf.jpg"
								class="object-contain w-full object-center" alt="" srcset="">
						</div>
						<div class="mt-2">
							<h3 class="text-center font-medium">Ajwa Dates</h3>
							<p class="text-center font-bold mt-1">$54.00 <span class="text-gray-500 text-sm">per
									Kg</span></p>
						</div>
					</div>




				</div>

			</div>

			<div class="  my-20 mx-auto ">

				<div class="flex items-center justify-center ">
					<div class=" mr-[-5rem]"><img
							src="https://bateel.com/media/wysiwyg/boutiquePage/Farm-image-for-web.jpg" class="object-contain object-center mx-auto  relative img-shadow
							" alt="" srcset="" />
					</div>
					<div class="bg-white shadow pt-14  border border-gray-100 px-10 w-[500px] z-10">
						<h2 class="font-medium text-2xl">Bateel Organic Date Groves</h2>
						<p class="text-gray-600 mt-4 text-sm font-sans">Bateel date groves have a rich heritage dating
							back nearly 100 years when the first date palms were planted in 1932. </p>
						<div class="text-center mt-6 mb-8"><button
								class="bg-white rounded-md text-sm mx-auto px-6 py-2  border-gray-800 border ">Discover</button>
						</div>
					</div>
				</div>

			</div>
			<div class="md:h-[590px]  mx-auto">
				<h2 class="font-semibold text-3xl mt-4 mb-8">Gourmet Products</h2>
				<div class="grid md:grid-cols-3 gap-6 items-center grid-cols-1">
					<div>
						<div>
							<img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/0/1/01_majdool_lf.jpg"
								class="object-contain w-full object-center" alt="" srcset="">
						</div>
						<div class="mt-2">
							<h3 class="text-center font-medium">Medjool Dates</h3>
							<p class="text-center font-bold mt-1">$54.00 <span class="text-gray-500 text-sm">per
									Kg</span></p>
						</div>
					</div>
					<div>
						<div>
							<img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/k/h/khidri_pistachio_2.jpg"
								class="object-contain w-full object-center" alt="" srcset="">
						</div>
						<div class="mt-2">
							<h3 class="text-center font-medium">Khidri Dates with Pistachio</h3>
							<p class="text-center font-bold mt-1">$54.00 <span class="text-gray-500 text-sm">per
									Kg</span></p>
						</div>
					</div>
					<div>
						<div>
							<img src="https://bateel.com/media/catalog/product/cache/ca15cb01acc6da5b48940382a5be6024/0/1/01_ajwa_lf.jpg"
								class="object-contain w-full object-center" alt="" srcset="">
						</div>
						<div class="mt-2">
							<h3 class="text-center font-medium">Ajwa Dates</h3>
							<p class="text-center font-bold mt-1">$54.00 <span class="text-gray-500 text-sm">per
									Kg</span></p>
						</div>
					</div>




				</div>

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