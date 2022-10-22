<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
	public function index()
	{

		return Inertia::render('Account/MyAccount');
	}
	public function orders()
	{
		$orders = Order::with('orderProducts.product.images')->where('user_id', Auth::user()->id)->orderBy('created_at', 'desc')->get();



		foreach ($orders as $key => $value) {
			$orders[$key]->orderState = \App\Models\OrderState::find($value->state_id);
		}

		return Inertia::render('Account/MyOrders', ['orders' => $orders]);
	}
	public function purchase(Request $request)
	{
		/* 		User::where('id', Auth::user()->id)
			->update(['address' => request()->address, 'city' => request()->city, 'state' => request()->state, 'zip_code' => request()->zip_code]); */
		$user = User::findOrFail(Auth::user()->id);
		try {
			$payment = $user->charge(
				$request->input('subtotal') + $request->input("delivery_fee"),
				$request->input('payment_method_id')
			);


			$payment = $payment->asStripePaymentIntent();


			$order = $user->orders()->create([
				'delivery_fee' => $request->input("delivery_fee"),
				'subtotal' => $request->input('subtotal'),
				'transaction_id' => $payment->charges->data[0]->id,
				'state_id' => 1
			]);

			foreach (json_decode($request->input('cart'), true) as $item) {
				$order->orderProducts()
					->create(["product_id" => $item['product_id'], 'quantity' => $item['quantity']]);
			}


			return  response()->json(['message' => "ok"]);
		} catch (\Exception $e) {
			return response()->json(['message' => $e->getMessage()], 500);
		}
	}

	public function newsletter()
	{

		return Inertia::render('Account/NewsletterSubscriptions');
	}

	public function addressBook()
	{

		return Inertia::render('Account/AddressBook');
	}

	public function reviews()
	{

		return Inertia::render('Account/ProductReviews');
	}

	public function edit()
	{

		return Inertia::render('Account/AccountInformation');
	}
}
