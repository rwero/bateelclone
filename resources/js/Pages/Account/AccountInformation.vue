<script setup>
import AccountLayout from '@/Layouts/AccountLayout.vue';
import { usePage } from "@inertiajs/inertia-vue3";
import { ref } from 'vue';
import axios from 'axios';

const user = ref( usePage().props.value.auth.user);
const saveInfo = async () => {
	const res = await axios.post('/u/edit-contact-info', { first_name: user.value.first_name, last_name: user.value.last_name });
	if (res.status == 200) {
		if (res.data.success) {
			alert('success');
		} else {
			alert("An error happened");
		}
	}
}

</script>
<template>

	<AccountLayout>

		<template #content>
			<div>


				<div class="block block-dashboard-info">
					<div class="block-title text-xl border-b border-gray-300 p-4">
						<strong>Account Information</strong>
					</div>

					<div class="grid grid-cols-6 gap-6 px-4 py-6">

						<div class="col-span-6 sm:col-span-3">
							<label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
							<input type="text" name="first-name" id="first-name" autocomplete="given-name"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								v-model="
								user.first_name	
								" />
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
							<input type="text" name="last-name" id="last-name" autocomplete="family-name"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								v-model="
									user.last_name
								" />
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="email-address" class="block text-sm font-medium text-gray-700">Email
								address</label>
							<input type="text" disabled name="email-address" id="email-address" autocomplete="email"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								v-model=" user.email " />
						</div>



					</div>
					<div class="flex items-center justify-end mx-4">

						<button @click="saveInfo"
							class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">save</button>

					</div>
				</div>


			</div>
		</template>
	</AccountLayout>



</template>
