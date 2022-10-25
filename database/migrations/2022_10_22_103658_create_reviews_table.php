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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
			$table->unsignedBigInteger('user_id');
			$table->unsignedBigInteger('product_id');
			$table->integer("rating");
			$table->text('review');
			$table->foreign('user_id')->references('id')->on('users');
			$table->foreign('product_id')->references('id')->on('products');
			$table->unique(['user_id','product_id']);
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
        Schema::dropIfExists('reviews');
    }
};