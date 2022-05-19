<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserLinks extends Model
{
    protected $table = "user_links";
    protected $fillable =
        [
            'id',
            'fk_user_id',
            'fk_id_agregador',

        ];
        public function dadosPagina(){
            return $this->hasOne('App\AgregadorLink','id','fk_id_agregador');
        }
}
