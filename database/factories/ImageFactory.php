<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
		$images =[

'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_wanan_lf.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02_wanan_plain.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_khidri_lf.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02_khidri_plain.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/8/5/850x850_e-commerce.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02-sokari_plain.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_majdool_lf.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02-madjool_plain.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_kholas_lf.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02_kholas_plain.jpg',
'https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_31.jpg',
		];
        return [
            'product_id' => $this->faker->numberBetween(1,205),
			'path' => $images[$this->faker->numberBetween(0,14)],
			'is_primary' => $this->faker->numberBetween(0,1)
        ];
    }
}
