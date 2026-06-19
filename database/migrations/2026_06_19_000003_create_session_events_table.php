<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('session_events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_session_id')->constrained()->cascadeOnDelete();
            $table->foreignId('project_id')->constrained()->cascadeOnDelete();
            $table->text('page_url')->nullable();
            $table->json('event');
            $table->timestamps();

            $table->index(['user_session_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('session_events');
    }
};
