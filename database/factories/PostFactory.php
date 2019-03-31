<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'cate_id' =>  rand(1,10),
        'user_id' =>  rand(1,10),
        'comment_id' =>  rand(1,10),
        'title' =>  $faker->sentence,
        'description' =>  $faker->paragraph,
        'content' =>  $faker->paragraph,
        'photo' =>  $faker->imageUrl,
    ];
});
