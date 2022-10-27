<template>
	<div>
		<button  @click="changeActiveCmp" 
		 class="flex items-center justify-center gap-2.5 w-full bg-transparent p-4 text-base text-left hover:text-indigo-700 "
		 :class="selected === store.activeComponent ? 'font-bold text-indigo-700 ':''"
		 >
			<div class=""><slot  name="icon" /> </div>
<p class="w-28"> {{ title }} </p>
		</button>
	</div>
</template>

<script setup>
import { useDataStore } from '@/Stores/data';
const store = useDataStore();
const props = defineProps({
title : String,
 selected :String,
});
const changeActiveCmp = ()=> {
	store.activeComponent = props.selected;
	store.menuOpen = window.screen.availWidth > 600;
}
</script>



