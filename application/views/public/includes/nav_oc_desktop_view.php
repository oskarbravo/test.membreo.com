<?php   
  $items = $this->session->userdata('cart_items');
  $total = $this->session->userdata('cart_total');
?>

<!-- Off-Canvas Category Menu-->
<div class="offcanvas-container" id="shop-categories">

      <div class="offcanvas-header">
        <h3 class="offcanvas-title">Navigation</h3>
      </div>

      <!-- /include mobile menu -->
      <nav class="offcanvas-menu">
        <ul class="menu">

          <li class="active"><a href="<?php echo base_url(); ?>"><span>Home Page</span></a></li>

          <li><a href="<?php echo base_url(); ?>cart/basket"><span>Your Basket <span class="badge badge-primary"><?= count($items); ?></span></span></a></li>

          <li class="has-children"><span><a href="<?php echo base_url(); ?>shop/product"><span>Shop</span></a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
              <li><a href="<?php echo base_url(); ?>shop/product">Single Product</a></li>
              <li><a href="<?php echo base_url(); ?>shop/categories">Categories</a></li>
              <li><a href="<?php echo base_url(); ?>cart/basket">Cart</a></li>

              <li class="has-children"><span><a href="<?php echo base_url(); ?>checkout/information">
                <span>Checkout</span></a><span class="sub-menu-toggle"></span></span>
                  <ul class="offcanvas-submenu">
                      <li><a href="<?php echo base_url(); ?>checkout/information">Checkout Address</a></li>
                      <li><a href="<?php echo base_url(); ?>checkout/shipping">Checkout Shipping</a></li>
                      <li><a href="<?php echo base_url(); ?>checkout/confirm">Checkout Review</a></li>
                      <li><a href="<?php echo base_url(); ?>checkout/complete">Checkout Complete</a></li>
                  </ul>
              </li>

            </ul>
          </li>

          <?php /*
          <li class="has-children"><span><a href="<?php echo base_url(); ?>account/login"><span>Account</span></a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
              <li><a href="<?php echo base_url(); ?>account/login">Login / Register</a></li>
              <li><a href="<?php echo base_url(); ?>account/forgot">Password Recovery</a></li>
              <li><a href="<?php echo base_url(); ?>account/profile">Profile Page</a></li>
              <li><a href="<?php echo base_url(); ?>account/address">My Addresses</a></li>
              <li><a href="<?php echo base_url(); ?>account/track">Track Order</a></li>
            </ul>
          </li>
          */ ?>

          <li class="has-children"><span><a href="<?php echo base_url(); ?>about"><span>Pages</span></a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
              <li><a href="<?php echo base_url(); ?>about">About Us</a></li>
              <li><a href="<?php echo base_url(); ?>contact">Contact Us</a></li>
              <li><a href="<?php echo base_url(); ?>faq">Faq's</a></li>
              <li><a href="<?php echo base_url(); ?>terms">Terms &amp; Conditions</a></li>
              <li><a href="<?php echo base_url(); ?>privacy">Privacy Policy</a></li>
            </ul>
          </li>

          <?php /*
          <li><a href="<?php echo base_url(); ?>"><span>Sean's Closet</span></a></li>

          <li class="has-children"><span><a href="<?php echo base_url(); ?>"><span>Navigation Level 1</span></a><span class="sub-menu-toggle"></span></span>
            <ul class="offcanvas-submenu">
                <li><a href="<?php echo base_url(); ?>">Navigation Level 2</a></li>
                <li class="has-children"><span><a href="<?php echo base_url(); ?>"><span>Navigation Level 2</span></a><span class="sub-menu-toggle"></span></span>
                  <ul class="offcanvas-submenu">
                      <li><a href="<?php echo base_url(); ?>">Navigation Level 3</a></li>
                      <li><a href="<?php echo base_url(); ?>">Navigation Level 3</a></li>
                  </ul>
                </li>
            </ul>
          </li>
          */ ?>

        </ul>
      </nav>
      <!-- /mobile -->

    </div>