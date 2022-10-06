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
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_wanan_lf.jpg',
		'is_primary' =>'1',
	],
	[
		'product_id' => '1',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02_wanan_plain.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '1',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '2',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_khidri_lf.jpg',
		'is_primary' =>'1',
	],
	[
		'product_id' => '2',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02_khidri_plain.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '2',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '3',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/8/5/850x850_e-commerce.jpg',
		'is_primary' =>'1',
	],
	[
		'product_id' => '3',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02-sokari_plain.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '3',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '4',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_majdool_lf.jpg',
		'is_primary' =>'1',
	],
	[
		'product_id' => '4',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02-madjool_plain.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '4',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '5',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_kholas_lf.jpg',
		'is_primary' =>'1',
	],
	[
		'product_id' => '5',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02_kholas_plain.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '5',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '6',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_sgai_lf.jpg',
		'is_primary' =>'1',
	],
	[
		'product_id' => '5',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02-sgai_plain1_1.jpg',
		'is_primary' =>'0',
	],
	[
		'product_id' => '6',
		'path' => 'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
		'is_primary' =>'0',
	],
	];
	foreach ($images as $key => $value) {
				\App\Models\Image::create($value);
			}
        
    }
}