
export function getCartProducts() {

	const cartItems = localStorage.getItem("cart") || "[]";
	return JSON.parse(cartItems);
}


export async function addToCart(prod, qte) {
    console.log("adding ", prod.title, " to cart");
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.filter((el) => el.product_id == prod.id).length > 0) {
        alert("already in cart");
        return;
    }
    cart.push({
        product_id: prod.id,
        quantity: Number(qte),
        price: prod.price,
        image: prod.images[0],
        title: prod.title,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("added successfully");
}
export function formatDate(date){
	
let d  = (new Date(date)).toUTCString().split(" GMT")[0];
return d.substring(0, d.lastIndexOf(" "))
}
export const formatCurrency = (price)=>{
	
	price  = (price / 100);
	return price.toLocaleString('en-US',  {style:"currency", currency:'USD'});
}