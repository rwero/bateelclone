<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
   protected $fillable = [
        'user_id',
        'subtotal',
        'delivery',
   ];
	public function user(){
		return $this->belongsTo(\App\Models\User::class);
	}
	public function order_state(){
		return $this->belongsTo(\App\Models\OrderState::class);
	}
}
