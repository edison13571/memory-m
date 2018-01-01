<?php

namespace App;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Model;

class Memory extends Model
{
    use SoftDeletes;
    protected $table='memories';
    protected $fillable =['name','content','family','type','recall_time','recall_style'];
    protected $dates =['delete_at'];
}
