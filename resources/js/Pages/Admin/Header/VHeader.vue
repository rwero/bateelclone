<template>
	<div class="header">
		<div class="menu-wrapper">
			<div  @click="store.menuOpen = !store.menuOpen">
				<bars3-icon class="w-6 h-6" />
			</div>
		</div>

		<div class="header-left">
			<div><button @click="toggleDarkMode()" style="width:40px;height:20px;display:flex;justify-content: center;align-items: center;">
                <MoonIcon v-if="isDark" class="w-5 h-5" />
                <SunIcon v-else class="w-5 h-5" />
            </button></div>
                <button class="user-btn">{{$page.props.auth.user.first_name}}</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/vue/24/solid";
import { useDataStore } from '@/Stores/data';
const store = useDataStore();

let isDark = ref(false);
 /*ref(document.querySelector('body').classList.contains('dark'));*/
function toggleDarkMode() {
	isDark.value = ! isDark.value;
const body = document.querySelector('body');
	if (body.classList.contains('dark')) {
		body.classList.remove('dark');
        isDark.value=false;
		localStorage.setItem('mode', 'white');
		return;
	}
	body.classList.add('dark');
        isDark.value=true;
	localStorage.setItem('mode', 'dark'); 
}
/* function getUserName() {
    return localStorage.getItem("username");
} */
</script>

<style scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--vz-header-bg);
	/* color : var(--vz-header-item-color); */

	box-shadow:var(--vz-box-shadow);
	padding: 1rem;
	border-radius: 12px;
	margin-bottom: 1rem;
}
.header-left {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;
}
.header-left button {
	background: none;
	border: none;
}
.user-btn{
    border:1px solid red;
}
</style>
