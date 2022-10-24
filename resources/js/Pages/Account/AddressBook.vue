<script setup>
import AccountLayout from '@/Layouts/AccountLayout.vue';
import { ref } from 'vue';
import { PhoneIcon } from "@heroicons/vue/24/solid";
import { usePage } from "@inertiajs/inertia-vue3";
import axios from 'axios';

const user = ref( usePage().props.value.auth.user);

const saveInfo = async ()=>{
	const res = await axios.post("/u/edit-address-book" , user.value);
	if(res.status == 200){
		if(res.data.success){
			alert("Success");
		}else{
			alert("Error");
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
							<label for="company-website" class="block text-sm font-medium text-gray-700">Phone
								number</label>
							<div class="mt-1 flex rounded-md shadow-sm">
								<span
									class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
									<PhoneIcon class="h-5 w-5" />
								</span>
								<input type="text" name="company-website" id="company-website"
									class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									placeholder />
							</div>
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="country" class="block text-sm font-medium text-gray-700">Country</label>
							<select id="country" name="country" autocomplete="country-name"
								v-model="user.country"
								class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
								<option value="United States">United States</option>
								<option value="Canada">Canada</option>
								<option value="Mexico">Mexico</option>
<option value="Algeria">Algeria</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Grenada">Grenada</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Sudan">Sudan</option>
<option value="Bolivia">Bolivia</option>
<option value="Somalia">Somalia</option>
<option value="Svalbard & Jan Mayen Islands ">Svalbard & Jan Mayen Islands </option>
<option value="French Guiana">French Guiana</option>
<option value="Monaco">Monaco</option>
<option value="South Africa">South Africa</option>
							</select>
						</div>

						<div class="col-span-6">
							<label for="street-address" class="block text-sm font-medium text-gray-700">Street
								address</label>
							<input type="text" name="street-address" id="street-address" autocomplete="street-address"
								v-model="user.address"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
						</div>

						<div class="col-span-6 sm:col-span-6 lg:col-span-2">
							<label for="city" class="block text-sm font-medium text-gray-700">City</label>
							<input type="text" name="city" id="city" autocomplete="address-level2" v-model="user.city"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
						</div>

						<div class="col-span-6 sm:col-span-3 lg:col-span-2">
							<label for="region" class="block text-sm font-medium text-gray-700">State /
								Province</label>
							<input type="text" name="region" id="region" autocomplete="address-level1"
								v-model="user.state"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
						</div>

						<div class="col-span-6 sm:col-span-3 lg:col-span-2">
							<label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal
								code</label>
							<input type="text" name="postal-code" id="postal-code" autocomplete="postal-code"
								v-model="user.zip_code"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
						</div>

					</div>
					<div class="flex items-center justify-end mx-4">

						<button
						@click="saveInfo"
							class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">save</button>
					</div>
				</div>


			</div>
		</template>
	</AccountLayout>



</template>
