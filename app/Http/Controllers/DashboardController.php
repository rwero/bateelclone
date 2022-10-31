<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Image;
use App\Models\Order;
use App\Models\OrderState;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
	//
	public function admin(Request $request)
	{
		Admin::findOrFail(Auth::user()->id);
		return Inertia::render("Admin/Admin");
	}
	public function dashboard()
	{
		$users = User::all();
		$orders = Order::with('orderProducts.product.images')->with("user")->with('orderState')->get();
		$order_states = OrderState::all();
		$products = Product::with('images')->with("allReviews")->get();

		$data = ['clients' => $users, "orders" => $orders, "order_states" => $order_states, "products" => $products];
		return response()->json(["success" => true, "data" => $data]);
	}
	public function updateOrderState()
	{
		try {
			Order::where('id', request()->order_id)->update([
				'state_id' => request()->state_id

			]);
			return response()->json(["success" =>  true]);
		} catch (\Throwable $th) {
			return response()->json(["success" =>  false]);
		}
	}
	public function addProduct(Request $request)
	{

		$request->validate([
			'title' => 'required',
			'description' => 'required',
			'price' => 'required',
		]);
		$product = Product::create([
			'title' => $request->input('title'),
			'description' => $request->input('description'),
			'price' => $request->input('price'),
			'type' => 1,
			'stars' => 0,
			'reviews' => 0,
		]);
		Image::create([
			'path' => '/storage/'.$request->file('mainImage')->store('Images', 'public'),
			'is_primary' => true,
			'product_id' => $product->id,

		]);
		for ($i = 0; $i < $request->n_images; $i++) {

			Image::create([
				'path' => '/storage/'.$request->file("sideImage$i")->store('Images', 'public'),
				'is_primary' => false,
				'product_id' => $product->id,

			]);
		}

		return response()->json(["success" => true]);
	}
	public function updateProduct(Request $request)
	{
		$request->validate([
			'title' => 'required',
			'description' => 'required',
			'price' => 'required',
			'product_id' => 'required',
		]);
		$product = Product::find($request->product_id);
		$product->title = $request->input('title');
		$product->description = $request->input('description');
		$product->price = $request->input('price');
		$product->save();

		if ($request->mainImage) {
			$mainImage = Image::find($product->images[0]->id);
			$mainImage->path = '/storage/'.$request->file('mainImage')->store('Images', 'public');
			$mainImage->save();
		}
		for ($i = 0; $i < $request->n_images; $i++) {
			Image::create([
				'path' => '/storage/'.$request->file("sideImage$i")->store('Images', 'public'),
				'is_primary' => false,
				'product_id' => $product->id,

			]);
		}
		$deleteImages = json_decode($request->toDelete,true);
		foreach ($deleteImages as $key => $value) {
			$img = Image::find($value);
			$img->delete();
		}


		return response()->json(["success" => True, "deleteImages"=>$deleteImages]);
	}
}
