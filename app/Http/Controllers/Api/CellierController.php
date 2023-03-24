<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCellierRequest;
use App\Http\Resources\CellierResource;
use App\Models\Cellier;
use Illuminate\Http\Request;

class CellierController extends Controller
{
    public function index(){

        return CellierResource::collection(Cellier::all());
    }

    public function store(StoreCellierRequest $request)
    {
        $cellier = Cellier::create($request->validated());
        

        return new CellierResource($cellier);
    }

    public function show(Cellier $cellier, Request $request)
    {
        // TODO: (il faut changer pour cette methode. Il faut trouve comment recevoire de vue.js id q'on envois et de le mettre apres "=")
        // $query = CellierResource::collection(Cellier::select()->where("user_id", '=', 2)->get());
        // return $query;
        return new CellierResource($cellier);
    }

    public function update(Cellier $cellier, StoreCellierRequest $request)
    {
        $cellier->update($request->validated());
        

        return new CellierResource($cellier);
    }


    public function destroy(Cellier $cellier)
    {
        $cellier->delete();

        return response()->noContent();
    }


}
