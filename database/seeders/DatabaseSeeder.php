<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        \App\Models\User::factory(50)->hasOrders(10)->create();

         \App\Models\User::factory()->hasOrders(3)->create([
             'first_name' => 'Redouane',
             'last_name' => 'Moussaui',
             'email' => 'red@email.com',
         ]);
		$this->call(\Database\Seeders\OrderState::class);
		$this->call(\Database\Seeders\ProductsTableSeeder::class);
		$this->call(\Database\Seeders\ImagesSeeder::class);
		\App\Models\Product::factory(200)->hasImages(3)->create();
    }
}
