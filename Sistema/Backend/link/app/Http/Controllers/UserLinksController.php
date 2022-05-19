<?php

namespace App\Http\Controllers;

use App\AgregadorLink;
use App\User;
use App\UserLinks;
use Illuminate\Http\Request;


class UserLinksController extends Controller
{
    //Url responsável pelo salvamento da pagina na tabela
    // relacional com o usuário
   public function salvarPagina(Request $request){
        $user = User::find($request->id_user);

        // verifica se o nome do link ja está em uso
        $valida =AgregadorLink::where('nm_link', $request->nm_link)->first();
        if($valida){
            return response('Nome do link em uso', 503);
        }
        $agregador = new AgregadorLink();
        $agregador->is_active = $request->is_active;
        $agregador->nm_link=$request->nm_link;
        $agregador->img_thumb=$request->img_thumb;
        $agregador->background=$request->background;
        $agregador->desc_link=$request->desc_link;
        $agregador->link_one=$request->link_one;
        $agregador->link_two=$request->link_two;
        $agregador->link_tree=$request->link_tree;
        $agregador->link_four=$request->link_four;
        $agregador->link_five=$request->link_five;
        $agregador->link_six=$request->link_six;
        $agregador->link_seven=$request->link_seven;
        $agregador->link_eight=$request->link_eight;
        $agregador->link_nine=$request->link_nine;
        $agregador->link_teen=$request->link_teen;
        $agregador->save();

        //salva na tabela relacional de usuario a suas paginas
        $userLinks = new UserLinks();
        $userLinks->fk_user_id =  $user->id ;
        $userLinks->fk_id_agregador = $agregador->id;
        $userLinks->save();
        echo($userLinks );
        return response()->json(
            ['Links salvo com sucesso', 200]
        );
   }
   public function deletePagina($id){
    AgregadorLink::destroy($id);
    $links = Userlinks::where('fk_id_agregador',$id);
    $links->delete();
   return response()->json(
       ['Message'=>'Pagina Deletada with sucess'],200
   );
   }

   public function editPagina(Request $request){
            $valida =AgregadorLink::where('nm_link', $request->nm_link)->first();
        if($valida){
        return response('Nome do link em uso', 503);
    }
        $pagina = AgregadorLink::find($request->id);

        $pagina->is_active =  $request->is_active;
        $pagina->nm_link = $request->nm_link;
        $pagina->img_thumb = $request->img_thumb;
        $pagina->background = $request->background;
        $pagina->desc_link = $request->desc_link;
        $pagina->link_one = $request->link_one;
        $pagina->link_two = $request->link_two;
        $pagina->link_tree = $request->link_tree;
        $pagina->link_four = $request->link_four;
        $pagina->link_five = $request->link_five;
        $pagina->link_six = $request->link_six;
        $pagina->link_seven = $request->link_seven;
        $pagina->link_eight = $request->link_eight;
        $pagina->link_nine = $request->link_nine;
        $pagina->link_teen = $request->link_teen;
        $pagina->save();
        return response()->json(
            $pagina, 201
        );
   }
}
