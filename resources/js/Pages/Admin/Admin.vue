<template>
	<div class="dashboard-container" v-if="store.data != null">
		<VMenu class="v-menu-open" v-if="store.menuOpen" />
		<div class="main">
			<VHeader />
			<component :is="store.activeComponent"></component>
		</div>
	</div>

</template>
<script>
import VDashboard from './Dashboard/VDashboard.vue';
import VClients from './Clients/VClients.vue';
import VOrders from './Orders/VOrders.vue';
import VProducts from './Products/VProducts.vue';
export default {
	components: {
		VDashboard,
		VClients,
		VOrders,
		VProducts,
	},
};
</script>

<script setup >
import { useDataStore } from '../../Stores/data';
import { onMounted } from 'vue';
import VHeader from './Header/VHeader.vue';
import VMenu from './Menu/VMenu.vue';

const store = useDataStore();

onMounted(async () => {
	await store.getDashboard();
});


</script>

<style>
@import './css/base.css';
@import './css/reset.css';

.dashboard-container {
	position: relative;
	padding: 1rem;
}

.v-menu-open {
	position: absolute;
	left: 0;
	right: 0;
	top: 1rem;
	bottom: 0;
}

@media (min-width: 600px) {
	.dashboard-container {
		display: flex;
		gap: 1rem;
	}

	.v-menu-open {
		position: relative;
		top: 0;
	}

	.main {
		width: 100%;
	}
}
</style>