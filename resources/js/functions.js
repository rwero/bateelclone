import axios from 'axios';
import { usePage } from '@inertiajs/inertia-vue3'

export async function addToCart(prod, qte){

	console.log("adding ",prod.title, " to cart" );
	if(!usePage().props.value.auth.user){

let cart = JSON.parse(localStorage.getItem("cart"));
	
	if(cart.filter(el => el.product_id == prod.id).length > 0){
		alert("already in cart");
		return;
	}
		cart.push({product_id:prod.id, quantity : Number(qte),price:prod.price, image: prod.images[0],title : prod.title});
		console.log("not logged in");
localStorage.setItem("cart", JSON.stringify(cart));
		alert("added successfully");
	}else{

		try {
		const res = await axios.post("/cart",{product_id:prod.id, quantity : Number(qte)});
			
		alert("added successfully");
		} catch (error) {
			if(error.response.status == 409){
				alert("Already in cart");
			}else {
				alert(error.response.statusText)
			}
			
		}
		
	}
}
