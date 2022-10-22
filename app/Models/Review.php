<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
	protected $guarded = [];

	public function user(){
		return $this->belongsTo(\App\Models\User::class,'user_id');
	}
	public function product(){

		return $this->belongsTo(\App\Models\Product::class,'product_id');
	}
}
