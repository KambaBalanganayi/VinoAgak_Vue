<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Catalogue extends Model
{
    const TABLE = 'vino__bouteille';
    
    protected $table = "vino__bouteille";

    use HasFactory;

    protected $fillable = [
        'vino__type_id',
        'nom',
        'image',
        'code_saq',
        'pays',
        'description',
        'prix_saq',
        'url_saq',
        'url_img',
        'format',
    ];

}
