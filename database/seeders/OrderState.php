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
			['state' => 'passed'],
			['state' => 'confirmed'],
			['state' => 'enroute'],
			['state' => 'delivered'],
			['state' => 'refused'],
			['state' => 'canceled']
		];

		foreach ($states as $key => $value) {
			\App\Models\OrderState::create($value);
		}
	}
}
