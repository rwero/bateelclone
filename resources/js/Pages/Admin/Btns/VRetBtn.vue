<template>
	<div>
		<button  @click="$emit('back')"  class="bg-transparent">
			<icon-arrow />
		</button>
	</div>
</template>

<script setup>
import IconArrow from '../icons/IconArrow.vue';
const emits = defineEmits(['back']);
</script>
