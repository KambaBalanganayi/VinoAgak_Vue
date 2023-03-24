<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bouteille extends Model
{

    protected $table = "bouteille__has__cellier";


    use HasFactory;


    protected $fillable = [

        'vino__bouteille_id',
        'vino__cellier_id',
        'date_achat',
        'garde_jusqua',
        'notes',
        'quantite',
        'millesime',
    ];


    public function catalogue()
    {
        return $this->belongsTo(Catalogue::class);    
    }    

    public function cellar()
    {
        return $this->belongsToMany(Cellier::class, 'bouteille__has__cellier')
                        ->withPivot([
                            'id',
                            'quantite',
                            'note',
                            'created_at',
                            'updated_at'
                        ]);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)
                        ->withPivot('quantite', 'note')
                        ->withTimestamps();
    }

    


}
