<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('about:mvp', function () {
    $this->info('UX Analytics Laravel/Inertia MVP');
});
