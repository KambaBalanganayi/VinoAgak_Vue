<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CatalogueResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,
            'nom'=> $this->nom,
            'image'=> $this->image,
            'code_saq'=>$this->code_saq,
            'pays'=> $this->pays,
            'description'=> substr($this->description, offset:0, length:9),
            'prix_saq'=> $this->prix_saq,
            'url_saq'=> $this->url_saq,
            'url_img'=> $this->url_img,
            'format'=> $this->format,
            'vino__type_id'=> $this->vino__type_id,
        ];
        // return parent::toArray($request);
    }
}
