<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
   protected $guarded = [];
	public function user(){
		return $this->belongsTo(\App\Models\User::class);
	}
	public function orderState(){
		return $this->belongsTo(\App\Models\OrderState::class,'state_id');
	}
	public function orderProducts(){
		return $this->hasMany(\App\Models\OrderProduct::class);
	}
	
}
