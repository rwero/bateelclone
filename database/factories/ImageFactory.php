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
		$images = [

			'/storage/Images/01_wanan_lf.jpg',
			'/storage/Images/02_wanan_plain.jpg',
			'/storage/Images/03_ballotin_box2_28.jpg',
			'/storage/Images/01_khidri_lf.jpg',
			'/storage/Images/02_khidri_plain.jpg',
			'/storage/Images/03_ballotin_box2_28.jpg',
			'/storage/Images/850x850_e-commerce.jpg',
			'/storage/Images/02-sokari_plain.jpg',
			'/storage/Images/03_ballotin_box2_28.jpg',
			'/storage/Images/01_majdool_lf.jpg',
			'/storage/Images/02-madjool_plain.jpg',
			'/storage/Images/03_ballotin_box2_28.jpg',
			'/storage/Images/01_kholas_lf.jpg',
			'/storage/Images/02_kholas_plain.jpg',
			'/storage/Images/03_ballotin_box2_28.jpg',
		];
		return [
			'product_id' => $this->faker->numberBetween(1, 205),
			'path' => $images[$this->faker->numberBetween(0, 14)],
			'is_primary' => $this->faker->numberBetween(0, 1)
		];
	}
}
