<template>
	<div class="menu-wrapper">

		<div class="menu">

			<div class="logo-wrapper">Bateel</div>
			<VMenuBtn 
v-for="(opt, i) in opts" :key="i" :selected="opt.comp" :title="opt.title"
			>

				<template #icon>
					<component :is="opt.icon" />
				</template>
			</VMenuBtn>
		</div>
		<div class="empty" @click="store.menuOpen = false"></div>
	</div>
</template>

<script>
import IconUsers from '../icons/IconUsers.vue';
import IconDashboard from '../icons/IconDashboard.vue';
import IconOrders from '../icons/IconOrders.vue';
import IconSellers from '../icons/IconSellers.vue';
import IconSettings from '../icons/IconSettings.vue';
import IconDeliverers from '../icons/IconDeliverers.vue';
export default {
	components: {
		IconUsers,
		IconDashboard,
		IconOrders,
		IconSellers,
		IconSettings,
		IconDeliverers,
	},
};
</script>

<script setup>
import { ref } from 'vue';
import VMenuBtn from "../Btns/VMenuBtn.vue";


const opts = ref([
	{
		title: 'Dashboard',
		comp: 'VDashboard',
		icon: 'IconDashboard',
	},


	{
		title: 'Clients',
		comp: 'VClients',
		icon: 'IconUsers',
	},
	{
		title: 'Orders',
		comp: 'VOrders',
		icon: 'IconOrders',
	},
	{
		title: 'Products',
		comp: 'VProducts',
		icon: 'IconOrders',
	},
	{
		title: 'Settings',
		comp: 'VSettings',
		icon: 'IconSettings',
	},
]);


</script>
<style scoped>
.menu-wrapper {
	height: calc(100vh - 2rem);
	z-index: 1;
	display: flex;
}

.menu {
	display: flex;
	flex-direction: column;
	width: 250px;
	height: 100%;
	background-color: var(--vz-vertical-menu-bg);
	box-shadow: var(--vz-box-shadow);
	border-radius: 12px;
}

.empty {
	width: calc(100vw - 250px);
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
}

@media (min-width: 600px) {
	.empty {
		width: 0;
	}
}

.logo-wrapper {
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	padding: 1rem 0;
	border-bottom: 1px dashed var(--vz-border-color);
	margin-bottom: 2rem;
}
</style>
