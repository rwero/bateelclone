<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('orders', function (Blueprint $table) {
			$table->id();
			$table->unsignedBigInteger("user_id");
			$table->integer('delivery_fee')->default(0);
			$table->integer('subtotal')->default(0);
			$table->string('transaction_id');
			$table->unsignedBigInteger('state_id');
			$table->foreign('user_id')->references('id')->on('users');
			$table->foreign('state_id')->references('id')->on('order_states');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('orders');
	}
};
