      <!-- Page Title-->
      <div class="page-title">
        <div class="container">
          <div class="column">
            <h1>Checkout</h1>
          </div>
          <div class="column">
          <ul class="breadcrumbs">
              <li><a href="<?php echo base_url(); ?>">Home</a></li>
              <li class="separator">&nbsp;</li>
              <li>Checkout</li>
              <li class="separator">&nbsp;</li>
              <li>2. Shipping</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Page Content-->
      <div class="container padding-bottom-3x mb-2">
        <div class="row">
          <!-- Checkout Adress-->
          <div class="col-xl-9 col-lg-8">

            <!-- Checkout Steps -->
            <div class="checkout-steps">
              <a href="<?php echo base_url(); ?>checkout/confirm">
                4. Confirm
              </a>
              <a href="<?php echo base_url(); ?>checkout/shipping" class="active">
                <span class="angle"></span>
                3. Shipping
              </a>
              <a href="<?php echo base_url(); ?>checkout/information" class="completed">
                <span class="step-indicator icon-circle-check"></span>
                <span class="angle"></span>
                2. Information
              </a>
              <a href="<?php echo base_url(); ?>cart/basket" class="completed">
                <span class="step-indicator icon-circle-check"></span>
                <span class="angle"></span>
                1. Cart
              </a>
            </div>

            <h4>Choose Shipping Method</h4>
            <hr class="padding-bottom-1x">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead class="thead-default">
                  <tr>
                    <th></th>
                    <th>Shipping method</th>
                    <th>Delivery time</th>
                    <th>Handling fee</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td class="align-middle">
                      <div class="custom-control custom-radio mb-0">
                        <input class="custom-control-input" type="radio" id="courier" name="shipping-method" checked>
                        <label class="custom-control-label" for="courier"></label>
                      </div>
                    </td>
                    <td class="align-middle"><span class="text-medium">Free Shipping</span><br><span class="text-muted text-sm">All Addresses(default zone), United States & Canada</span></td>
                    <td class="align-middle">8 - 10 days</td>
                    <td class="align-middle">$0.00</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <?php print_r($merchant_gateway); ?>
            <div class="checkout-footer margin-top-1x">
              <div class="column"><a class="btn btn-outline-secondary" href="<?php echo base_url(); ?>checkout/information"><i class="icon-arrow-left"></i><span class="hidden-xs-down">&nbsp;Back</span></a></div>
              <?php if ($merchant_gateway == "Stripe") { ?>
                <div class="column"><a class="btn btn-primary" href="<?php echo base_url(); ?>checkout/stripe"><span class="hidden-xs-down">Continue&nbsp;</span><i class="icon-arrow-right"></i></a></div>
              <?php } else { ?>
                <div class="column"><a class="btn btn-primary" href="<?php echo base_url(); ?>checkout/authorize"><span class="hidden-xs-down">Continue&nbsp;</span><i class="icon-arrow-right"></i></a></div>
              <?php } ?>
            </div>
          </div>


          <!-- Sidebar -->
          <div class="col-xl-3 col-lg-4">
            <aside class="sidebar">
              <div class="padding-top-2x hidden-lg-up"></div>

              <!-- Order Summary Widget-->
              <section class="widget widget-order-summary">
                <h3 class="widget-title">Order Summary</h3>
                <table class="table">
                  <tr>
                    <td>Cart Subtotal:</td>
                    <td class="text-medium">$<?= $total; ?></td>
                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td class="text-medium">$0</td>
                  </tr>
                  <!-- <tr>
                    <td>Estimated tax:</td>
                    <td class="text-medium">$3.42</td>
                  </tr> -->
                  <tr>
                    <td></td>
                    <td class="text-lg text-medium">$<?= $total; ?></td>
                  </tr>
                </table>
              </section>

              <?php /* 
              <!-- Featured Products Widget-->
              <section class="widget widget-featured-products">
                <h3 class="widget-title">Recently Viewed</h3>
                <!-- Entry-->
                <div class="entry">
                  <div class="entry-thumb"><a href="shop-single.html"><img src="<?php echo base_url(); ?>img/public/shop/widget/01.jpg" alt="Product"></a></div>
                  <div class="entry-content">
                    <h4 class="entry-title"><a href="shop-single.html">Oakley Kickback</a></h4><span class="entry-meta">$155.00</span>
                  </div>
                </div>
                <!-- Entry-->
                <div class="entry">
                  <div class="entry-thumb"><a href="shop-single.html"><img src="<?php echo base_url(); ?>img/public/shop/widget/02.jpg" alt="Product"></a></div>
                  <div class="entry-content">
                    <h4 class="entry-title"><a href="shop-single.html">Top-Sider Fathom</a></h4><span class="entry-meta">$90.00</span>
                  </div>
                </div>
                <!-- Entry-->
                <div class="entry">
                  <div class="entry-thumb"><a href="shop-single.html"><img src="<?php echo base_url(); ?>img/public/shop/widget/03.jpg" alt="Product"></a></div>
                  <div class="entry-content">
                    <h4 class="entry-title"><a href="shop-single.html">Vented Straw Fedora</a></h4><span class="entry-meta">$49.50</span>
                  </div>
                </div>
                <!-- Entry-->
                <div class="entry">
                  <div class="entry-thumb"><a href="shop-single.html"><img src="<?php echo base_url(); ?>img/public/shop/widget/04.jpg" alt="Product"></a></div>
                  <div class="entry-content">
                    <h4 class="entry-title"><a href="shop-single.html">Big Wordmark Tote</a></h4><span class="entry-meta">$29.99</span>
                  </div>
                </div>
              </section>
              */ ?>

              <?php /* 
              <!-- Promo Banner-->
              <section class="promo-box" style="background-image: url(img/banners/02.jpg);"><span class="overlay-dark" style="opacity: .4;"></span>
                <div class="promo-box-content text-center padding-top-2x padding-bottom-2x">
                  <h4 class="text-light text-thin text-shadow">New Collection of</h4>
                  <h3 class="text-bold text-light text-shadow">Sunglasses</h3><a class="btn btn-outline-white btn-sm" href="shop-grid-ls.html">Shop Now</a>
                </div>
              </section>

              */ ?>

            </aside>
          </div><!-- /sidebar -->


        </div>
      </div>