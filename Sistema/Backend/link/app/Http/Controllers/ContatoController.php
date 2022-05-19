<?php

namespace App\Http\Controllers;

use App\Contato;
use Illuminate\Http\Request;

class ContatoController extends Controller
{

    public function saveContato(Request $request){
        $contato =  new Contato();
        $contato->fk_user_id = $request->fk_user_id;
        $contato->desc_contato = $request->desc_contato;
        $contato->tp_contato = $request->tp_contato;
        $contato->save();
        echo $contato;
        return response()->json(
            ['Contact save with success'], 200
        );
    }

    public function updateContact(Request $request){
        $contato =  Contato::find($request->id);
        $contato->desc_contato = $request->desc_contato;
        $contato->tp_contato = $request->tp_contato;
        $contato->save();
        echo $contato;
        return response()->json(
            ['Contact save with success'], 200
        );
    }

    public function listContact($id){
        $contatos = Contato::where('fk_user_id', $id)->get();
        if($contatos->isEmpty()){
            return response('contato nao encontrado', 404);
        }
        return response(
            $contatos, 201
        );
    }

    public function deleteContato($id){
        $contato = Contato::destroy($id);
        if($contato == 1){
        return response('Contact deleted with success' , 202);
        }

        return response('Contact not exist' , 202);
    }
}
