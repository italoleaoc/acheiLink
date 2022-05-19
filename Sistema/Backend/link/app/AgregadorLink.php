<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AgregadorLink extends Model
{
    protected $table = "agregador_link";
    protected $fillable =
        [
            'id',
            'is_active',
            'nm_link',
            'img_thumb',
            'background',
            'desc_link',
            'link_one',
            'link_two',
            'link_tree',
            'link_four',
            'link_five',
            'link_six',
            'link_seven',
            'link_eight',
            'link_nine',
            'link_teen',
        ];
}
