<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illugate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition()
	{
		return [
			'user_id' => $this->faker->numberBetween(1, 50),
			'delivery_fee' => $this->faker->randomFloat( 2,  2000,  99999),
			'subtotal' =>  $this->faker->randomFloat(  2,  2000,   99999),
			'transaction_id' =>  $this->faker->sentence(),
			'state_id' => $this->faker->numberBetween(1, 6),
		];
	}
}
