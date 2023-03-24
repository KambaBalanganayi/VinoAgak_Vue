<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCatalogueRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'vino__type_id'=>'required',
            'nom'=>'required',
            'image'=>'required',
            'code_saq'=>'required',
            'pays'=>'required',
            'description'=>'required',
            'prix_saq'=>'required',
            'url_saq'=>'required',
            'url_img'=>'required',
            'format'=>'required',
        ];
    }
}
