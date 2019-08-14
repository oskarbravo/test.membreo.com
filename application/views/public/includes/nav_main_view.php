      <!-- Main Navigation-->
      <nav class="site-menu">
        <ul>
          <li class="active"><a href="<?php echo base_url(); ?>"><span>Home Page</span></a></li>
          <li><a href="<?php echo base_url(); ?>"><span>Shop</span></a>
            <ul class="sub-menu">
              <li><a href="<?php echo base_url(); ?>shop/product">Single Product</a></li>
              <li><a href="<?php echo base_url(); ?>shop/categories">Categories</a></li>
              <li><a href="<?php echo base_url(); ?>cart/basket">Cart</a></li>
              <li class="has-children"><a href="<?php echo base_url(); ?>checkout/address"><span>Checkout</span></a>
                <ul class="sub-menu">             
                    <li><a href="<?php echo base_url(); ?>checkout/information">Address</a></li>
                    <li><a href="<?php echo base_url(); ?>checkout/shipping">Shipping</a></li>
                    <li><a href="<?php echo base_url(); ?>checkout/confirm">Confirm</a></li>
                    <li><a href="<?php echo base_url(); ?>checkout/complete">Complete</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <?php /*
          <li><a href="<?php echo base_url(); ?>account/login"><span>Account</span></a>
            <ul class="sub-menu">
                <li><a href="<?php echo base_url(); ?>account/login">Login / Register</a></li>
                <li><a href="<?php echo base_url(); ?>account/forgot">Password Recovery</a></li>
                <li><a href="<?php echo base_url(); ?>account/orders">Orders List</a></li>
                <li><a href="<?php echo base_url(); ?>account/profile">Profile Page</a></li>
                <li><a href="<?php echo base_url(); ?>account/address">Contact / Shipping Address</a></li>
                <li><a href="<?php echo base_url(); ?>account/track">Track Order</a></li>
            </ul>
          </li>
          */ ?>
          <li><a href="#"><span>Pages</span></a>
            <ul class="sub-menu">
                <li><a href="<?php echo base_url(); ?>about">About Us</a></li>
                <li><a href="<?php echo base_url(); ?>contact">Contacts</a></li>
                <li><a href="<?php echo base_url(); ?>faq">Help / FAQ</a></li>
                <li><a href="<?php echo base_url(); ?>terms">Terms &amp; Conditions</a></li>
                <li><a href="<?php echo base_url(); ?>privacy">Privacy Policy</a></li>
                
                <?php /*
                <li><a href="search-results.html">Search Results</a></li>
                <li><a href="404.html">404 Not Found</a></li>
                <li><a href="coming-soon.html">Coming Soon</a></li>
                <li><a class="text-danger" href="docs/dev-setup.html">Documentation</a></li>
                */ ?>

            </ul>
          </li>
        </ul>
      </nav>