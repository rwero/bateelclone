<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImagesSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{

		$images = [
			[
				'product_id' => '1',
				'path' => '/storage/Images/01_wanan_lf.jpg',
				'is_primary' => '1',
			],
			[
				'product_id' => '1',
				'path' => '/storage/Images/02_wanan_plain.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '1',
				'path' => '/storage/Images/03_ballotin_box2_28.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '2',
				'path' => '/storage/Images/01_khidri_lf.jpg',
				'is_primary' => '1',
			],
			[
				'product_id' => '2',
				'path' => '/storage/Images/02_khidri_plain.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '2',
				'path' => '/storage/Images/03_ballotin_box2_28.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '3',
				'path' => '/storage/Images/850x850_e-commerce.jpg',
				'is_primary' => '1',
			],
			[
				'product_id' => '3',
				'path' => '/storage/Images/02-sokari_plain.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '3',
				'path' => '/storage/Images/03_ballotin_box2_28.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '4',
				'path' => '/storage/Images/01_majdool_lf.jpg',
				'is_primary' => '1',
			],
			[
				'product_id' => '4',
				'path' => '/storage/Images/02-madjool_plain.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '4',
				'path' => '/storage/Images/03_ballotin_box2_28.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '5',
				'path' => '/storage/Images/01_kholas_lf.jpg',
				'is_primary' => '1',
			],
			[
				'product_id' => '5',
				'path' => '/storage/Images/02_kholas_plain.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '5',
				'path' => '/storage/Images/03_ballotin_box2_28.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '6',
				'path' => '/storage/Images/01_sgai_lf.jpg',
				'is_primary' => '1',
			],
			[
				'product_id' => '5',
				'path' => '/storage/Images/02-sgai_plain1_1.jpg',
				'is_primary' => '0',
			],
			[
				'product_id' => '6',
				'path' => '/storage/Images/03_ballotin_box2_28.jpg',
				'is_primary' => '0',
			],
		];
		foreach ($images as $key => $value) {
			\App\Models\Image::create($value);
		}
	}
}
