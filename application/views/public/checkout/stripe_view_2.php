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

      <!-- Main Template Styles-->
      <link id="mainStyles" rel="stylesheet" media="screen" href="<?php echo base_url(); ?>css/public/styles.css">
      <?php /*
      <!-- Vendor Styles including: Bootstrap, Font Icons, Plugins, etc.-->
      <link rel="stylesheet" media="screen" href="<?php echo base_url(); ?>css/public/vendor.css">      
      <!-- Interactive Credit Card checkout/payment -->
      <link rel="stylesheet" media="screen" href="<?php echo base_url(); ?>css/public/card.min.css">
      <!-- Main Template Styles-->
      <link id="mainStyles" rel="stylesheet" media="screen" href="<?php echo base_url(); ?>css/public/styles.css">
      <!-- Stripe CSS -->
      <link id="mainStyles" rel="stylesheet" media="screen" href="<?php echo base_url(); ?>css/public/stripe.css">
      <!-- Modernizr-->
      <script src="<?php echo base_url(); ?>js/public/modernizr.min.js"></script>
      */ ?>

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

            <!-- Main Navigation-->
            <?php $this->load->view('public/includes/cart_summary_view'); ?>

          </div><!-- /tools -->
        </div>
      </div><!-- /toolbar -->

    </header>

    <!-- Off-Canvas Wrapper-->
    <div class="offcanvas-wrapper">


<script src="https://js.stripe.com/v3/"></script>

<form action="<?= site_url('checkout/confirm'); ?>" method="post" id="payment-form">
  <div class="form-row">
    <label for="card-element">
      Credit or debit card
    </label>
    <div id="card-element">
      <!-- A Stripe Element will be inserted here. -->
    </div>

    <!-- Used to display form errors. -->
    <div id="card-errors" role="alert"></div>
  </div>

  <button>Submit Payment</button>
</form>

<style>

	/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

</style>

<script>

// Create a Stripe client.
var stripe = Stripe('pk_test_0gTN8ddmCkVDJVpPdXUPx3cC00NiUl1Cxn');

// Create an instance of Elements.
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Handle form submission.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});

// Submit the form with the token ID.
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}

</script>