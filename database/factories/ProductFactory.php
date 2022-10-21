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
				'price' => $this->faker->numberBetween(20000,100000),
				'type' =>  $this->faker->numberBetween(1,2),
				'stars' => $this->faker->numberBetween(1,5),
				'reviews' => $this->faker->numberBetween(1,200)
        ];
    }
}
