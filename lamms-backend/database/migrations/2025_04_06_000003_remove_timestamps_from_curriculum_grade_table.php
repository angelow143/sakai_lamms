<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Check if the table and columns exist before attempting to drop them
        if (Schema::hasTable('curriculum_grade')) {
            Schema::table('curriculum_grade', function (Blueprint $table) {
                if (Schema::hasColumn('curriculum_grade', 'created_at')) {
                    $table->dropColumn('created_at');
                }
                if (Schema::hasColumn('curriculum_grade', 'updated_at')) {
                    $table->dropColumn('updated_at');
                }
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('curriculum_grade')) {
            Schema::table('curriculum_grade', function (Blueprint $table) {
                if (!Schema::hasColumn('curriculum_grade', 'created_at')) {
                    $table->timestamp('created_at')->nullable();
                }
                if (!Schema::hasColumn('curriculum_grade', 'updated_at')) {
                    $table->timestamp('updated_at')->nullable();
                }
            });
        }
    }
};
