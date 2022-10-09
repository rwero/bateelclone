<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	$some_products = \App\Models\Product::with('images')->where('id' ,'<' ,'10')->get();
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
		'products' => $some_products
    ]);
})->name("home.index");

Route::get('/products', function () {
	
	
    return Inertia::render('AllProducts');
})->name('products.index');

Route::get('/products/{id}', function ($id){
	
	$product = \App\Models\Product::with('images')->findOrFail($id);
    return Inertia::render('Product', [
        'product'=>$product
    ]);
})->name('products.show');

Route::get("/u/account", function(){
    return Inertia::render('Account/MyAccount');
})->middleware(['auth', 'verified'])->name('account.show');


Route::get("/u/orders", function(){
    return Inertia::render('Account/MyOrders');
})->middleware(['auth', 'verified'])->name('orders.index');

Route::get("/checkout", function(){
    return Inertia::render('Checkout');
})->middleware(['auth', 'verified'])->name('checkout.show');



Route::get('/cart', function () {

	
	if (Auth::user()) {
		$products = Auth::user()->cartProducts;
		foreach ($products as $key => $value) {
			$prod = \App\Models\Product::with("images")->find($value->product_id);

			$value->price = $prod->price;
			$value->title = $prod->title;
			$value->image = $prod->images[0];
		}

		return response()->json(["products"=> $products, "success" => true ]);
	} else {

		return response()->json(['products' => [], "success" => true]);
	}
})->middleware(['auth', 'verified']);
Route::post('/cart', function () {
	
	if (Auth::user()) {
		$user = \App\Models\Cart::create([
			'product_id' => request()->product_id,
			'user_id' => Auth::user()->id,
			'quantity' => request()->quantity,
		]);
		
		return response()->json(['success' => true]);
	}else{
		return response()->json(["success" => false]);
	}
})->middleware(['auth', 'verified']);;
Route::delete('/cart/{id}', function ($id){
	if(Auth::user()){
		$prod = \App\Models\Cart::where('product_id',$id)->where('user_id',Auth::user()->id)->first();
		if($prod){

		$prod->delete();
		return response()->json(['success' => true]);
		}else{

		return response()->json(["success" => false]);
		}
	}
		return response()->json(["success" => false]);
})->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
