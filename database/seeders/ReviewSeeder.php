<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('reviews')->insert([
            'name'=>'Айдос',
            'phone'=>'77053081659',
            'review'=>'Спасибо за такую платформу которая дает возможность легко найти работу'
        ]);

        DB::table('reviews')->insert([
            'name'=>'Гузаль',
            'phone'=>'77053081659',
            'review'=>'очень понравился функционал простотой, нашла работу'
        ]);

        DB::table('reviews')->insert([
            'name'=>'Ерасыл',
            'phone'=>'77053081659',
            'review'=>'сайт ұнады. жұмыс көп. отандық бастаманы қолдайық'
        ]);

        DB::table('reviews')->insert([
            'name'=>'Айболсын',
            'phone'=>'77053081659',
            'review'=>'здравствуйте! в активном поиске работы, пока не нашла, но обьявления хорошие, откликнулась на пару вакансии👍'
        ]);

        DB::table('reviews')->insert([
            'name'=>'Бигазы',
            'phone'=>'77053081659',
            'review'=>'очень удобный и классный сайт, много работы'
        ]);

        DB::table('reviews')->insert([
            'name'=>'Сагида',
            'phone'=>'77053081659',
            'review'=>'Крутая платформа, смог быстро найти сотрудников еще и бесплатно.'
        ]);
    }
}
