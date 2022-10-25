<template>
<div class="chart">
			<div class="chart-header">
				<h2>Commandes</h2>
				<div class="chart-btns">
					<button @click="chosen = ordersPerYear">year</button>
					<button @click="chosen = ordersPerMonth">month</button>
					<button @click="chosen = ordersPerWeek">week</button>
				</div>
			</div>

	<Line
				:styles="{
					height: `${350}px`,
					position: 'relative',
                    padding:'1rem'
				}"
				:chart-options="{
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						y: {
							suggestedMin: 0,
						},
					},
					legend: {
						display: false,
					},
				}"
				:chart-data="chosen"
				chart-id="chart-orders"
			/>

				</div>
</template>
    <script setup>
import { Line } from 'vue-chartjs';

import { useDataStore } from '@/Stores/data';
import { ref } from 'vue';


import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from 'chart.js';

const store = useDataStore();

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement
);


let ordersPerMonth = ref({
	labels: Object.keys(store.ordersByDays)
		.map((el) => el.split('--')[0].slice(5))

		.slice(0, 30)
		.reverse(),
	datasets: [
		{
			label: '',

			backgroundColor: '#3a57e8',
			borderColor: '#3a57e8',
			lineTension: 0.3,
			data: Object.keys(store.ordersByDays)
				.map((el) => store.ordersByDays[el].length)

				.slice(0, 30)
				.reverse(),
		},
	],
});
let ordersPerWeek = ref({
	labels: Object.keys(store.ordersByDays)
		.map((el) => el.split('--')[1].slice(0, 3))
		.slice(0, 7)
		.reverse(),
	datasets: [
		{
			label: '',

			backgroundColor: '#3a57e8',
			borderColor: '#3a57e8',
			lineTension: 0.3,
			data: Object.keys(store.ordersByDays)
				.map((el) => store.ordersByDays[el].length)
				.slice(0, 7)
				.reverse(),
		},
	],
});
let ordersPerYear = ref({
	labels: Object.keys(store.ordersByMonths)
		.map((el) => el.split('--')[1].slice(0, 3))
		/* .slice(0, day.value) */
		.reverse(),
	datasets: [
		{
			label: '',

			backgroundColor: '#3a57e8',
			borderColor: '#3a57e8',
			lineTension: 0.3,
			data: Object.keys(store.ordersByMonths)
				.map((el) => store.ordersByMonths[el].length)
				// .slice(0, day.value)
				.reverse(),
		},
	],
});

let chosen = ref(ordersPerWeek.value);

    </script>
<style scoped>

.chart-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}
.chart-btns {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;
}
.chart-btns > button {
	padding: 0.25rem 0.5rem;
	color: #3577f1;
	background-color: rgba(53, 119, 241, 0.1);
	border-color: transparent;
	font-size: 0.7 rem;
	border-radius: 0.2rem;
}

    
</style>
