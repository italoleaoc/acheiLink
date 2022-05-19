<?php

use App\Http\Controllers\ContatoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserLinksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//rotas usadas para os usuários
Route::post('/newuser',[UserController::class, 'saveUser'] );
Route::get('/alluser',[UserController::class, 'allUser'] );
Route::put('/edituser',[UserController::class, 'editUser'] );
Route::get('/iduser/{id}',[UserController::class, 'idUser'] );
Route::delete('/deleteuser/{id}',[UserController::class, 'desabilitarUsuario'] );

//rotas usadas para os contatos
Route::post('/newcontact',[ContatoController::class, 'saveContato'] );
Route::put('/editcontact',[ContatoController::class, 'updateContact'] );
Route::get('/listcontato/{id}',[ContatoController::class, 'listContact'] );
Route::delete('/deletecontato/{id}',[ContatoController::class, 'deleteContato'] );

//Rotas usadas para salvar links e relacionalas aos usuarios
Route::post('/salvarlink',[UserLinksController::class, 'salvarPagina'] );
Route::delete('/deletelinks/{id}',[UserLinksController::class, 'deletePagina'] );
Route::put('/editpagina',[UserLinksController::class, 'editPagina'] );

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});