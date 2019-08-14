<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/* * -- Example Routes -- * */
// $route['store/(:any)'] = 'frontend/store/$1';
// $route['processing/(:any)'] = 'frontend/processing/$1';
// $route['profile/(:any)'] = 'frontend/profile/$1';
// $route['backend/(:any)'] = 'backend/authenticate/$1';

// Default Controller needs to be in the route
$route['default_controller'] = 'home';

$route['(:any)'] = 'public/pages/view/$1';
$route['account/(:any)'] = 'public/account/$1';
$route['cart/(:any)'] = 'public/cart/$1';
$route['cart/add/(:any)'] = 'public/cart/add/$1';
$route['cart/remove/(:any)'] = 'public/cart/remove/$1';
$route['checkout/(:any)'] = 'public/checkout/$1';
$route['shop/(:any)'] = 'public/shop/$1';
$route['shop/product/(:any)'] = 'public/shop/product/$1';

$route['admin/(:any)'] = 'admin/$1';

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

// $route['account/forgot-password'] = 'account/forgot_password';