<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$request->validate([
			'review' => 'required',
			'rating' => 'required',
			'product_id' => 'required',
		]);

		try {
			$rev = null;
			if (request()->update) {
				$rev = Review::find(request()->id);
				$rev->update([
					"review" => request()->review,
					'rating' => request()->rating,

				]);
			} else {

				$rev = Review::create([
					'product_id' => request()->product_id,
					'user_id' => Auth::user()->id,
					'review' => request()->review,
					'rating' => request()->rating,

				]);

				$rev->product->reviews++;
			}
			$rev->product->stars =  Review::where('product_id', request()->product_id)->pluck('rating')->avg();
			$rev->product->save();



			return response()->json(['success' => true, 'rev' => $rev]);
		} catch (\Throwable $th) {
			return response()->json(["success" => false, "error" => $th]);
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		//
	}
}
