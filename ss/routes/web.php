<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('links','LinksController');
Route::get('linksdel','LinksController@destroy');

Route::resource('lists','ListsController');
Route::get('listsfinish','ListsController@finish');
Route::get('listsdel','ListsController@destroy');

Route::resource('memories','MemoriesController');
Route::get('memoriesremember','MemoriesController@remeber');
Route::get('memoriesfinish','MemoriesController@finish');
Route::get('memoriesdel','MemoriesController@destroy');

Route::get('logincheck','UsersController@store');