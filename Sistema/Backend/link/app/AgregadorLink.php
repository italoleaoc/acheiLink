<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AgregadorLink extends Model
{
    protected $table = "agregador_link";
    protected $fillable =
        [
            'id',
            'title_page',
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
            'colorFontButton',
            'colorButton',
            'colorFontTexto',
            'name_link_one',
            'name_link_two',
            'name_link_tree',
            'name_link_four',
            'name_link_five',
            'name_link_six',
            'name_link_seven',
            'name_link_eight',
            'name_link_nine',
            'name_link_teen',

        ];
}
