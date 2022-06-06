<?php
namespace App\Http\Controllers;

use App\Contato;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function allUser(){

        return response(User::all()->toJson(JSON_OBJECT_AS_ARRAY), 200);
    }
    public function saveUser(Request $request){
        /*
        * Verifica se o email já foi cadastrado
        */
        if (User::where("email", $request->email)->exists()) {
            return response()->json([
                "mensage" => "Email já cadastrado",
                "id"=> 0
            ]);
        }

        $user = new User;
        $user->name_full = $request->name_full;
        $user->dt_nascimento = $request->dt_nascimento;
        $user->tp_count = $request->tp_count;
        $user->is_pg_active = $request->is_pg_active;
        $user->count_link = $request->count_link;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->is_active = $request->is_active;
        $user->save();
        return response()->json(
                ['mensagem' => "User saved with success",  "id"=>$user->id],200
            );

    }
    public function idUser($id){
        $user = User::find($id);
        if(!$user){
            echo ($user);
            return response()->json('Usuário nao encontrado na base de dados', 200);
        }

        $contatos = $user->contatos;
        $paginas = $user->paginas;
        foreach ($paginas as $pagina ) {
            $dados = $pagina->dadosPagina;
        }

        return response()->json(['User' => $user],201 );
    }
    public function procEmail(Request $request){
        if (User::where("email", $request->email)->exists()) {
            return response()->json([
                "mensage" => "Email já cadastrado",
                "id"=> 0
            ]);
        }
        return response()->json([
            "id"=> 1
        ]);
    }
    public function editUser(Request $request){
      if($request->id == null){
       return $this->saveUser($request);
      }
        $user = User::find($request->id);
        $user->name_full = $request->name_full;
        $user->dt_nascimento = $request->dt_nascimento;
        $user->is_active = $request->is_active;
        $user->email=  $request->email;
        $user->password = $request->password;
        $user->save();
       return response()->json(
           ['messagem'=>'User altered with success'], 201
       );
    }

    public function desabilitarUsuario($id){
         User::destroy($id);
         $contatos = Contato::where('fk_user_id', $id);
         $contatos->delete();
        return response()->json(
            ['Message'=>'Deleted with sucess'],200
        );
    }

    public function loginApi(Request $request){
        $user = User::where('email', $request->email)->where('password', $request->password)->get();
        if($user[0]->id){
            return response()->json(["id"=>$user[0]->id], 200);
        }
            return response()->json(["id"=>401], 401);;
    }
}
