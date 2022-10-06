<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderState extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$states = [
			['state' => 'confirmed'],
			['state' => 'passed'],
			['state' => 'delivered'],
			['state' => 'refused'],
			['state' => 'canceled'],
			['state' => 'enroute']
		];

		foreach ($states as $key => $value) {
			\App\Models\OrderState::create($value);
		}
	}
}
