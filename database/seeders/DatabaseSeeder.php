<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
$this->call(\Database\Seeders\OrderState::class);
		$this->call(\Database\Seeders\ProductsTableSeeder::class);
		$this->call(\Database\Seeders\ImagesSeeder::class);
		\App\Models\Product::factory(200)->hasImages(3)->create();
 User::factory(10)->has(
    Order::factory(3)
        ->has(OrderProduct::factory(3))
)->create();
       


         \App\Models\User::factory()->has(
    Order::factory(5)
        ->has(OrderProduct::factory(3))
)->create([
             'first_name' => 'Redouane',
             'last_name' => 'Moussaui',
             'email' => 'red@email.com',
         ]);
		
    }
}
