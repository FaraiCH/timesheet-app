<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;
use App\Models\Status;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('timesheets', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->time('start_time');
            $table->time('end_time');
            $table->enum('shift',['day', 'night']);
            $table->enum('shift_allowance', ['yes', 'no']);
            $table->enum('shift_cancelled', ['yes', 'no']);
            $table->decimal('allowance_price')->default(0);
            $table->foreignIdFor(Status::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timesheets');
    }
};
