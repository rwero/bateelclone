<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
})->name("home.index");

Route::get('/products', function () {
	$products = \App\Models\Product::with("images")->get();
	echo("$products[0]");
    return Inertia::render('AllProducts', ['products' => $products]);
})->name('products.index');

Route::get('/products/{id}', function ($id){
    return Inertia::render('Product', [
        'id'=>$id,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
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





require __DIR__.'/auth.php';
