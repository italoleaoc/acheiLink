<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
    protected $table = "contatos";
    protected $fillable =
        [
            'id',
            'fk_user_id',
            'desc_contato',
            'tp_contato',

        ];

}
