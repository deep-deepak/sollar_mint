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
        Schema::create('nft_comments', function (Blueprint $table) {
            $table->id();
            $table->longText('message')->nullable();
            $table->string('asset')->nullable();
            $table->foreignId('nft_id')->constrained()->onDelete('cascade');
            $table->foreignId('nft_comment_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->boolean('status')->default(true)->comment('0 => Draft, 1 => Publish, 2 => Delete');
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
        Schema::dropIfExists('nft_comments');
    }
};
