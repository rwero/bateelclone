import { defineStore } from "pinia";
import axios from 'axios';
export const useDataStore = defineStore({
    id: "data",
    state: () => ({
        activeComponent: "VDashboard",
        data: null,
        loading: false,
        menuOpen: false,
        wd: window.screen.availWidth,
    }),
	getters: {
		ordersByDays: (state) => {
			const temp = state.data.orders.filter(
				(el) => el.state_id != 5 && el.state_id !=6
			);
			let arr = [];
			let orders = {};
			temp.forEach((element) => {
				let a = new Date(element.created_at);
				let d = `${getymd(a)}--${a.toLocaleDateString('fr-FR', { weekday: 'long' })}`;
				if (!arr.includes(d)) {
					arr.push(d);
					orders[d] = [];
					orders[d].push(element);
				} else {
					orders[d].push(element);
				}
			});
			return orders;
		},
ordersByMonths: (state) => {
			const temp = state.data.orders.filter(
				(el) => el.state_id !=5 && el.state_id != 6
			);
			let arr = [];
			let orders = {};
			temp.forEach((element) => {
				let a = new Date(element.created_at);
				let d = `${a.getFullYear()}--${a.toLocaleDateString('fr-FR', { month: 'long' })}`;
				if (!arr.includes(d)) {
					arr.push(d);
					orders[d] = [];
					orders[d].push(element);
				} else {
					orders[d].push(element);
				}
			});
			return orders;
		},
	},

	actions: {

		async getDashboard() {
			{
				this.loading = true;
				console.log('loading : ', this.loading);
				try {
					const res = await axios.get( '/dashboard');

					if (res.data.success) {
						this.data = res.data.data;
						
					} else {
            console.log("ERROR");
			alert("Error")
					}
				} catch (error) {
					alert(error);
          throw error;
				}

				this.loading = false;
			}
		},

/* 		async getDashboardOrders() {
			this.loading = true;
            console.log("refreshing..");
			try {
				const res = await fetch(
					this.path + '/api/v1/dashboard/getDashboardOrders'
				);
				const data = await res.json();

				if (data.success) {
					this.data.orders = data.data;
				} else {
                    alert(JSON.stringify('alerting : ',data));
				}
			} catch (error) {
				console.error(error); 
				alert(error);
			}

			this.loading = false;
		}, */
	},

});
 function getymd(d) {
	return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
