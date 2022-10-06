<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
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
			'delivery_fee' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 20, $max = 999.99),
			'subtotal' =>  $this->faker->randomFloat($nbMaxDecimals = 2, $min = 20, $max = 999.99),
			'state_id' => $this->faker->numberBetween(1, 6),
		];
	}
}
