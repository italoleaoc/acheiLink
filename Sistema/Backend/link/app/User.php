<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = "users";
    protected $fillable =
        [
            'id',
            'name_full',
            'dt_nascimento',
            'tp_count',
            'is_pg_active',
            'count_link',
            'email',
            'password',
            'is_active'
        ];

        public function contatos(){
            return $this->hasMany('App\Contato','fk_user_id');
        }
        //traz as paginas que pertencem ao usuário
        public function paginas(){
            return $this->hasMany('App\UserLinks','fk_user_id');
        }

   }
