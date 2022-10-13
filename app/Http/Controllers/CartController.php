<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PhpParser\Node\Stmt\TryCatch;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

	
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

	if (Auth::user()) {
$request->validate([
            'product_id' => 'required',
            'quantity' => 'required',
        ]);

	
		try {
		 Cart::create([
			'product_id' => request()->product_id,
			'user_id' => Auth::user()->id,
			'quantity' => request()->quantity,
		]);
		
		return response()->json(['success' => true]);
		} catch (\Throwable $th) {
		return response()->json(["success" => false])->setStatusCode(409); ;
		}
	}else{
		return response()->json(["success" => false])->setStatusCode(403); ;
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
	}
}
    
    
