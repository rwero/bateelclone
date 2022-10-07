<template>
<div class="  mx-6 md:mx-auto">
				<h2 class="font-semibold text-3xl mt-4 mb-8">{{$props.title}}</h2>

				<div class="w-full overflow-scroll snap-x snap-mandatory">
<div class="flex justify-start gap-6 items-center pb-8">
					<div class="min-w-[270px] snap-center " v-for="prod in $page.props.products" :key="prod.id">
						<div><a :href="route('products.show',prod.id)" class="block">
							<img :src="prod.images[0].path"
								class="object-contain w-full object-center" alt="" srcset="">
</a>
						</div>
						<div class="mt-2">
							<h3 class="text-center font-medium">{{prod.title}}</h3>
							<p class="text-center font-bold mt-1">${{prod.price}} <span class="text-gray-500 text-sm">per
									Kg</span></p>
						</div>
					</div>
					


				</div>
				</div>
				

			</div>
</template>
<script setup>

defineProps({
	title:String,
});
</script>