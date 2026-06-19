<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SessionEvent extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_session_id',
        'project_id',
        'page_url',
        'event',
    ];

    protected function casts(): array
    {
        return [
            'event' => 'array',
        ];
    }

    public function session(): BelongsTo
    {
        return $this->belongsTo(UserSession::class, 'user_session_id');
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
