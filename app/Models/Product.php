<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
   protected $fillable = [
        'title',
        'description',
        'price',
        'type',
		'stars',
		'reviews',
   ];
   public function images(){
	return $this->hasMany(\App\Models\Image::class);
   }
}