<?php

namespace App\Http\Controllers;

use App\AgregadorLink;
use App\UserLinks;
use Illuminate\Http\Request;
use Mockery\Undefined;

class UserLinksController extends Controller
{
    //Url responsável pelo salvamento da pagina na tabela
    // relacional com o usuário
   public function salvarPagina(Request $request){

        // verifica se o nome do link ja está em uso
        $valida =AgregadorLink::where('nm_link', $request->nm_link)->first();
        if($valida){
            return response()->json(
                ['mensagem'=>'Nome do link em uso','cod'=>1]
            );
        }
        $imagem = $this->salvarImagem($request);
        $agregador = new AgregadorLink();
        $agregador->is_active = $request->is_active;
        $agregador->title_page = $request->title_page;
        $agregador->nm_link=$request->nm_link;
        $agregador->img_thumb=$imagem;
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
        $agregador->colorFontButton=$request->colorFontButton;
        $agregador->colorFontButton=$request->colorFontButton;
        $agregador->colorFontTexto=$request->colorFontTexto;
        $agregador->name_link_one=$request->name_link_one;
        $agregador->name_link_two=$request->name_link_two;
        $agregador->name_link_tree=$request->name_link_tree;
        $agregador->name_link_four=$request->name_link_four;
        $agregador->name_link_five=$request->name_link_five;
        $agregador->name_link_six=$request->name_link_six;
        $agregador->name_link_seven=$request->name_link_seven;
        $agregador->name_link_eight=$request->name_link_eight;
        $agregador->name_link_nine=$request->name_link_nine;
        $agregador->name_link_teen=$request->name_link_tenn;
        $agregador->save();

        //salva na tabela relacional de usuario a suas paginas
        $userLinks = new UserLinks();
        $userLinks->fk_user_id =  $request->id_user;
        $userLinks->fk_id_agregador = $agregador->id;
        $userLinks->save();
        return response()->json(
            ['mensagem'=>'Links salvo com sucesso','cod'=>0]
        );
   }

   public function deletePagina($id){
    AgregadorLink::destroy($id);
    $links = Userlinks::where('fk_id_agregador',$id);
    $links->delete();
   return response()->json(
       ['Message'=>'Pagina Deletada with sucess'],205
   );
   }

   public function procurarPagina($id){

   $pagina = AgregadorLink::where("nm_link",$id)->first();
   if(!$pagina){
       return response()->json(['id'=> 0],500);
   }
   return response()->json([$pagina], 200);

    }

    public function salvarImagem($request){

        if($request->hasFile('img_thumb')){
            $upload =  $request->img_thumb;
            $extension = $request->file('img_thumb')->getClientOriginalExtension();
            $fileNameToStore= $request->title_page.'.'.$extension;
            $fileNameToStore = strtolower(str_replace(" ", "", $fileNameToStore));
            $upload->storeAs('public/thumbs', $fileNameToStore);
            return $savarImg = '/storage/thumbs/'. $fileNameToStore;
        }
    }

    public function paginas($id){
        $userPages = UserLinks::where('fk_user_id', $id)->get();
        $paginas = array();
        foreach ($userPages as $page ) {
            $pagina = AgregadorLink::where('id', $page->fk_id_agregador)->get();
            array_push($paginas, $pagina);
        }


        return response()->json($paginas, 200);
    }

    public function paginaId($id){
        $pagina = AgregadorLink::find($id);
        return response($pagina ,200);
    }

    public function editPage(Request $request){
        $valida =AgregadorLink::where('nm_link', $request->nm_link)->first();
        if($valida){
            $userPage = UserLinks::where('fk_id_agregador', $valida->id)->first();

            if($userPage->fk_user_id != $request->idPage){
                dd(($userPage->fk_user_id != $request->idPage), $userPage->fk_user_id , $request->id_user);

                return response()->json(
                    ['mensagem'=>'Nome do link em uso','cod'=>1]
                );
            }

        }
        $agregador = AgregadorLink::find($request->idPage);
        $imagem = $this->salvarImagem($request);
        if($imagem ==  null){
            $imagem = $agregador->img_thumb;

        }
        //dd("uso");
        //$agregador->id = $request->idPage;
        $agregador->is_active = $request->is_active;
        $agregador->title_page = $request->title_page;
        $agregador->nm_link=$request->nm_link;
        $agregador->img_thumb=$imagem;
        $agregador->background=$request->background ;
        $agregador->desc_link=$request->desc_link;
        $agregador->link_one=$request->link_one;
        $agregador->link_two=$request->link_two;
        $agregador->link_tree=$request->link_tree;
        $agregador->link_four=$request->link_four;
        $agregador->link_five=$request->link_five;
        $agregador->colorFontTexto=$request->colorFontTexto;
        $agregador->link_six=$request->link_six;
        $agregador->link_seven=$request->link_seven;
        $agregador->link_eight=$request->link_eight;
        $agregador->link_nine=$request->link_nine;
        $agregador->link_teen=$request->link_teen;
        $agregador->colorFontButton=$request->colorFontButton;
        $agregador->colorButton=$request->colorButton;
        $agregador->name_link_one=$request->name_link_one;
        $agregador->name_link_two=$request->name_link_two;
        $agregador->name_link_tree=$request->name_link_tree;
        $agregador->name_link_four=$request->name_link_four;
        $agregador->name_link_five=$request->name_link_five;
        $agregador->name_link_six=$request->name_link_six;
        $agregador->name_link_seven=$request->name_link_seven;
        $agregador->name_link_eight=$request->name_link_eight;
        $agregador->name_link_nine=$request->name_link_nine;
        $agregador->name_link_teen=$request->name_link_teen;
        $agregador->save();
        //dd($agregador);
        return response()->json(
            ['mensagem'=>'Links update com sucesso','cod'=>0]
        );
    }
}
