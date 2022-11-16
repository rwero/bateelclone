<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
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
    $some_products = \App\Models\Product::with(['images' => function ($query) {
        $query->where("is_primary", 1);
    }])->where('id', '<', '10')->get();
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'products' => $some_products
    ]);
})->name("home.index");

Route::get('/products', function () {

    return Inertia::render('AllProducts');
})->name('products.index');

Route::get('/products/{id}', function ($id) {

    $product = \App\Models\Product::with("images")->with('allReviews.user')->findOrFail($id);
    return Inertia::render('Product', [
        'product' => $product
    ]);
})->name('products.show');

Route::get("/u/account", [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('account.show');
Route::get("/u/orders", [UserController::class, 'orders'])->middleware(['auth', 'verified'])->name('orders.index');
Route::get("/u/newsletter", [UserController::class, 'newsletter'])->middleware(['auth', 'verified'])->name('newsletter.index');
Route::get("/u/reviews", [UserController::class, 'reviews'])->middleware(['auth', 'verified'])->name('account.reviews.index');
Route::get("/u/edit", [UserController::class, 'edit'])->middleware(['auth', 'verified'])->name('account.edit.show');
Route::get("/u/address-book", [UserController::class, 'addressBook'])->middleware(['auth', 'verified'])->name('address-book.index');
Route::post("/u/edit-contact-info", [UserController::class, 'editContactInfo'])->middleware(['auth', 'verified']);
Route::post("/u/edit-address-book", [UserController::class, 'editAddresBook'])->middleware(['auth', 'verified']);


Route::get("/checkout", function () {
    return Inertia::render('Checkout');
})->middleware(['auth', 'verified'])->name('checkout.show');


Route::get('/cart', [CartController::class, 'index'])->middleware(['auth', 'verified']);
Route::post('/cart', [CartController::class, 'store'])->middleware(['auth', 'verified']);;
Route::delete('/cart/{id}', [CartController::class, 'destroy'])->middleware(['auth', 'verified']);
Route::post("/purchase", [UserController::class, 'purchase'])->middleware(['auth', 'verified']);

Route::post('/api/review', [ReviewController::class, 'store'])->middleware(['auth', 'verified']);

Route::get('/admin', [DashboardController::class, 'admin'])->middleware(['auth', 'verified']);
Route::get("dashboard", [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified', 'admin']);
Route::post("/dashboard/orderstate", [DashboardController::class, 'updateOrderState'])->middleware(['auth', 'verified', 'admin']);
Route::post("/dashboard/products", [DashboardController::class, 'addProduct'])->middleware(['auth', 'verified', 'admin']);
Route::post("/dashboard/products/update", [DashboardController::class, 'updateProduct'])->middleware(['auth', 'verified', 'admin']);

Route::get("/search", function () {
    // $products = \App\Models\Product::where('title',"like","%".request()->searchTerm."%")->get();

    return Inertia::render('Search',["query"=>request()->query("q")]);
})->name("search.index");
/* Route::get("/testmail", function (){
Mail::to('fake@email.com')->send(new SendEmailConfirmationLink);
$some_products = \App\Models\Product::with('images')->where('id' ,'<' ,'10')->get();
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
		'products' => $some_products
    ]);
});
 */
require __DIR__ . '/auth.php';
