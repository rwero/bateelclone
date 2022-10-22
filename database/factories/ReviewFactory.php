<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{

	public $pid = 0;
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition()
	{
		$this->pid = ($this->pid  % 20) +1;
		return [

			'review' => $this->faker->text(),
			'rating' => random_int(1,5),
			'product_id' => $this->pid,
		];
	}
}
