<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCatalogueRequest;
use App\Http\Resources\CatalogueResource;
use App\Models\Catalogue;
use Illuminate\Http\Request;

class CatalogueController extends Controller
{
    public function index(){
        
        return CatalogueResource::collection(Catalogue::all());
    }

    public function store(StoreCatalogueRequest $request)
    {
        $catalogue = Catalogue::create($request->validated());
        

        return new CatalogueResource($catalogue);
    }

    public function show(Catalogue $catalogue)
    {

        return new CatalogueResource($catalogue);
    }

    public function update(Catalogue $catalogue, StoreCatalogueRequest $request)
    {
        $catalogue->update($request->validated());
        

        return new CatalogueResource($catalogue);
    }


    public function destroy(Catalogue $catalogue)
    {
        $catalogue->delete();

        return response()->noContent();
    }
}
