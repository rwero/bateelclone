<template>
	<div>
		<button  @click="this.$emit('back')">
			<icon-arrow />
		</button>
	</div>
</template>

<script setup>
import IconArrow from '../icons/IconArrow.vue';
defineEmits(['back']);
</script>

<style scoped>
button {
	background: none;
	padding-top: 0.3rem;
    padding-right:2rem;
    margin:-1rem 0;
}
</style>
