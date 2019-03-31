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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//category
Route::Resource('api/category', 'CategoryController');
Route::get('/deletecategory/{id}','CategoryController@selected_category');
Route::get('api/findCategory', 'CategoryController@search');

// post
Route::Resource('api/posts', 'PostController');

Route::get('{path}',"HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
