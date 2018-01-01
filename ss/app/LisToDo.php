<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LisToDo extends Model
{
    use SoftDeletes;
    protected $table='lists';
    protected $fillable =['name','family'];
    protected $dates =['delete_at'];
}
