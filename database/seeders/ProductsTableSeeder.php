<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
			[
				'title' => 'Wanan Dates',
				'description' => "A Bateel world-exclusive, our organic Wanan dates are mildly sweet and wholly satisfying—a superb treat that's perfect for gifting.",
				'price' => 54.00,
				'type' => 1,
				'stars' => 4.5,
				'reviews' => 50

			],
			[
				'title' => 'Khidri Dates',
				'description' => "A Bateel bestseller, our organic Khidri dates are sweet and have a delightfully chewy texture.",
				'price' => 54.00,
				'type' => 1,
				'stars' => 4.9,
				'reviews' => 6

			],
			[
				'title' => 'Medjool Dates',
				'description' => "Deliciously sweet and succulent, your search for the finest quality organic Medjool dates ends at Bateel.",
				'price' => 54.00,
				'type' => 1,
				'stars' => 5,
				'reviews' => 1

			],
			[
				'title' => 'Sokari Dates',
				'description' => "Our impeccable organic Sokari dates have a creamy, sweet taste and feature a distinctively creased skin, making the ideal gift for that special someone. ",
				'price' => 54.00,
				'type' => 1,
				'stars' => 5,
				'reviews' => 1

			],	
			[
				'title' => 'Kholas Dates',
				'description' => "Bateel's organic Kholas dates are deliciously toffee-flavoured without being too sweet.",
				'price' => 54.00,
				'type' => 1,
				'stars' => 5,
				'reviews' => 2

			],
	[
				'title' => 'Segai Dates',
				'description' => "Bateel's organic Segai dates are deliciously sugary at the top and mildly sweet at the base.",
				'price' => 54.00,
				'type' => 1,
				'stars' => 5,
				'reviews' => 2

			],
			];
			foreach ($products as $key => $value) {
				\App\Models\Product::create($value);
			}
    }
}
