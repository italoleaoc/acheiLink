<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AgregardorLink extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agregador_link', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->boolean('is_active')->nullable();
            $table->string('nm_link', 50);
            $table->string('title_page', 50);
            $table->string('img_thumb')->nullable();
            $table->string('background')->nullable();
            $table->string('colorFontButton')->nullable();
            $table->string('colorButton')->nullable();
            $table->string('colorFontTexto')->nullable();
            $table->string('desc_link', 144)->nullable();
            $table->string('link_one')->nullable();
            $table->string('link_two')->nullable();
            $table->string('link_tree')->nullable();
            $table->string('link_four')->nullable();
            $table->string('link_five')->nullable();
            $table->string('link_six')->nullable();
            $table->string('link_seven')->nullable();
            $table->string('link_eight')->nullable();
            $table->string('link_nine')->nullable();
            $table->string('link_teen')->nullable();
            $table->string('name_link_one')->nullable();
            $table->string('name_link_two')->nullable();
            $table->string('name_link_tree')->nullable();
            $table->string('name_link_four')->nullable();
            $table->string('name_link_five')->nullable();
            $table->string('name_link_six')->nullable();
            $table->string('name_link_seven')->nullable();
            $table->string('name_link_eight')->nullable();
            $table->string('name_link_nine')->nullable();
            $table->string('name_link_teen')->nullable();
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
        Schema::dropIfExists('agregador_link');
    }
}
