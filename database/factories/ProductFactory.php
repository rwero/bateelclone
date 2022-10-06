<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->unique()->sentence(1),
				'description' => $this->faker->text(),
				'price' => $this->faker->randomFloat($nbMaxDecimals=2,$min=20,$max=999.99 ),
				'type' =>  $this->faker->numberBetween($int1 = 1,$int2=2),
				'stars' => $this->faker->numberBetween(1,5),
				'reviews' => $this->faker->numberBetween(1,200)
        ];
    }
}
