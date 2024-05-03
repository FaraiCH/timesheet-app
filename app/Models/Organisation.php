<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Organisation extends Model
{
    use HasFactory;

    public function department(): HasMany
    {
        return $this->hasMany('department');
    }

    public function user(): HasMany
    {
        return $this->hasMany('user');
    }

}
