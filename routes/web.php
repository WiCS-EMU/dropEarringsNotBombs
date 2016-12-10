<?php

Route::get('/', function () {
    return view('welcome');
});
Route::get('/custom', function () {
    return view('custom-earrings');
});
Route::get('/about', function () {
    return view('about');
});
Route::get('/shop', function () {
    return view('shop');
});
Route::get('/mission', function () {
    return view('mission');
});
