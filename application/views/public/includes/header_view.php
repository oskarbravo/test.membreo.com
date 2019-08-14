<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Membreo - <?php echo $title ?></title>
    <!-- SEO Meta Tags-->
    <meta name="description" content="Unishop - Universal E-Commerce Template">
    <meta name="keywords" content="shop, e-commerce, modern, flat style, responsive, online store, business, mobile, blog, bootstrap 4, html5, css3, jquery, js, gallery, slider, touch, creative, clean">
    <meta name="author" content="Rokaux">
    <!-- Mobile Specific Meta Tag-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!-- Favicon and Apple Icons-->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="apple-touch-icon" href="touch-icon-iphone.png">
    <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png">
    <link rel="apple-touch-icon" sizes="180x180" href="touch-icon-iphone-retina.png">
    <link rel="apple-touch-icon" sizes="167x167" href="touch-icon-ipad-retina.png">
    <?php $this->load->view('public/includes/header_scripts_view'); ?>
  </head>
  <!-- Body-->
  <body>

    <!-- Off Canvas Desktop -->
    <?php $this->load->view('public/includes/nav_oc_desktop_view'); ?>

    <!-- Mobile Navigation-->
    <?php $this->load->view('public/includes/nav_mobile_view'); ?>

	<!-- Topbar-->
	<div class="topbar">

		<div class="topbar-column">
      <a class="hidden-md-down" href="mailto:support@membreo.com"><i class="icon-mail"></i>&nbsp; support@membreo.com</a>
      <a class="hidden-md-down" href="tel:00331697720"><i class="icon-bell"></i>&nbsp; 00 33 169 7720</a>
      <a class="social-button sb-facebook shape-none sb-dark" href="http://facebook.com" target="_blank"><i class="socicon-facebook"></i></a>
      <a class="social-button sb-twitter shape-none sb-dark" href="http://twitter.com" target="_blank"><i class="socicon-twitter"></i></a>
      <a class="social-button sb-instagram shape-none sb-dark" href="http://instagram.com" target="_blank"><i class="socicon-instagram"></i></a>
      <a class="social-button sb-pinterest shape-none sb-dark" href="http://pinterest.com" target="_blank"><i class="socicon-pinterest"></i></a>
		</div>

		<div class="topbar-column"><a class="hidden-md-down" href="#"><i class="icon-download"></i>&nbsp; Get mobile app</a>
			<div class="lang-currency-switcher-wrap">
				<div class="lang-currency-switcher dropdown-toggle">
					<span class="language"><img alt="English" src="<?php echo base_url(); ?>img/public/flags/GB.png"></span><span class="currency">$ USD</span>
				</div>
				<div class="dropdown-menu">
					<div class="currency-select">
					  <select class="form-control form-control-rounded form-control-sm">
					    <option value="usd">$ USD</option>
					    <option value="usd">€ EUR</option>
					    <option value="usd">£ UKP</option>
					    <option value="usd">¥ JPY</option>
					  </select>
					</div>
          <a class="dropdown-item" href="#"><img src="<?php echo base_url(); ?>img/public/flags/FR.png" alt="Français">Français</a>
          <a class="dropdown-item" href="#"><img src="<?php echo base_url(); ?>img/public/flags/DE.png" alt="Deutsch">Deutsch</a>
          <a class="dropdown-item" href="#"><img src="<?php echo base_url(); ?>img/public/flags/IT.png" alt="Italiano">Italiano</a>	
				</div><!-- /dropdown-menu -->
			</div><!-- /lang-currency-switcher-wrap -->
		</div>
		
	</div><!-- /topbar -->

    <!-- Navbar-->

    <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
    <header class="navbar navbar-sticky">

      <!-- Search-->
      <form class="site-search" method="get">
        <input type="text" name="site_search" placeholder="Type to search...">
        <div class="search-tools">
          <span class="clear-search">Clear</span>
          <span class="close-search"><i class="icon-cross"></i></span>
        </div>
      </form>

      <div class="site-branding">
        <div class="inner">
          <!-- Off-Canvas Toggle (#shop-categories)--><a class="offcanvas-toggle cats-toggle" href="#shop-categories" data-toggle="offcanvas"></a>
          <!-- Off-Canvas Toggle (#mobile-menu)--><a class="offcanvas-toggle menu-toggle" href="#mobile-menu" data-toggle="offcanvas"></a>
          <!-- Site Logo-->
          <a class="site-logo" href="<?php echo base_url(); ?>">
            <img src="<?php echo base_url(); ?>img/public/logo/logo.png" alt="Unishop">
          </a>
        </div>
      </div>

      <!-- Main Navigation-->
      <?php $this->load->view('public/includes/nav_main_view'); ?>

      <!-- Toolbar-->
      <div class="toolbar">
        <div class="inner">
          <div class="tools">

            <?php /*
            <div class="search"><i class="icon-search"></i></div>

            <div class="account"><a href="<?php echo base_url(); ?>account/orders"></a><i class="icon-head"></i>
              <ul class="toolbar-dropdown">
                <li class="sub-menu-user">
                  <div class="user-ava"><img src="<?php echo base_url(); ?>img/public/account/user-ava-sm.jpg" alt="Daniel Adams">
                  </div>
                  <div class="user-info">
                    <h6 class="user-name">Daniel Adams</h6><span class="text-xs text-muted">290 Reward points</span>
                  </div>
                </li>
                  <li><a href="<?php echo base_url(); ?>account/orders">My Orders</a></li>
                  <li><a href="<?php echo base_url(); ?>account/profile">My Profile</a></li>               
                  <li><a href="<?php echo base_url(); ?>account/address">My Addresses</a></li>
                <li class="sub-menu-separator"></li>
                <li><a href="<?php echo base_url(); ?>account/logout"> <i class="icon-unlock"></i>Logout</a></li>
              </ul>
            </div>
            */ ?>
            <div class="cart"><a href="<?php echo base_url(); ?>cart/basket"></a><i class="icon-bag"></i><span class="count">3</span><span class="subtotal">$289.68</span>
              <div class="toolbar-dropdown">

                <?php for ($x = 1; $x <= 3; $x++) { ?>

                  <div class="dropdown-product-item">
                    <span class="dropdown-product-remove"><i class="icon-cross"></i></span>
                    <a class="dropdown-product-thumb" href="<?php echo base_url(); ?>cart/basket">
                      <img src="<?php echo base_url(); ?>img/public/cart-dropdown/<?php echo $x; ?>.jpg" alt="Product">
                    </a>
                    <div class="dropdown-product-info">
                      <a class="dropdown-product-title" href="<?php echo base_url(); ?>cart/basket">Product <?php echo $x; ?></a>
                      <span class="dropdown-product-details">1 x $43.90</span>
                    </div>
                  </div>

                <?php	} ?>

                <div class="toolbar-dropdown-group">
                  <div class="column"><span class="text-lg">Total:</span></div>
                  <div class="column text-right"><span class="text-lg text-medium">$289.68&nbsp;</span></div>
                </div>

                <div class="toolbar-dropdown-group">
                  <div class="column"><a class="btn btn-sm btn-block btn-secondary" href="<?php echo base_url(); ?>cart/basket">View Cart</a></div>
                  <div class="column"><a class="btn btn-sm btn-block btn-success" href="<?php echo base_url(); ?>checkout/address">Checkout</a></div>
                </div>

              </div>
            </div><!-- /cart -->

          </div><!-- /tools -->
        </div>
      </div><!-- /toolbar -->

    </header>

    <!-- Off-Canvas Wrapper-->
    <div class="offcanvas-wrapper">