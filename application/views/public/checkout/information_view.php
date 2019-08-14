      <!-- Page Title-->
      <div class="page-title">
        <div class="container">
          <div class="column">
            <h1>Checkout Address</h1>
          </div>
          <div class="column">
            <ul class="breadcrumbs">
              <li><a href="<?php echo base_url(); ?>">Home</a></li>
              <li class="separator">&nbsp;</li>
              <li>Checkout</li>
              <li class="separator">&nbsp;</li>
              <li>1. Address</li>
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
              <a href="<?php echo base_url(); ?>checkout/shipping">
                <span class="angle"></span>
                2. Shipping
              </a>
              <a href="<?php echo base_url(); ?>checkout/information" class="active">
                <span class="angle"></span>
                2. Information
              </a>
              <a href="<?php echo base_url(); ?>cart/basket" class="completed">
                <span class="step-indicator icon-circle-check"></span>
                <span class="angle"></span>
                1. Cart
              </a>
            </div>

            <form method="post" action="<?= site_url('checkout/shipping'); ?>">
            <h4>Billing Address</h4>
            <hr class="padding-bottom-1x">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="checkout-fn">First Name</label>
                  <input name="billingFirstName" class="form-control" type="text" id="checkout-fn">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="checkout-ln">Last Name</label>
                  <input name="billingLastName" class="form-control" type="text" id="checkout-ln">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="checkout-address1">Address 1</label>
                  <input name="billingAddress1" class="form-control" type="text" id="checkout-address1">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="checkout-address2">Address 2</label>
                  <input name="billingAddress2" class="form-control" type="text" id="checkout-address2">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="checkout-city">City</label>
                  <input name="billingCity" class="form-control" type="text" id="checkout-city">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="checkout-zip">ZIP Code</label>
                  <input name="billingPostcode" class="form-control" type="text" id="checkout-zip">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                  <div class="form-group">
                    <label for="billing-country">Country</label>
                    <select name="billingCountry" class="form-control" id="billing-country">
                      
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="billing-state">State</label>
                    <select name="billingState" class="form-control" id="billing-state">

                    </select>
                  </div>
                </div>
              </div>

            <div class="row padding-bottom-1x">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="checkout-email">E-mail Address</label>
                  <input name="email" class="form-control" type="email" id="checkout-email">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="checkout-phone">Phone Number</label>
                  <input name="billingPhone" class="form-control" type="text" id="checkout-phone">
                </div>
              </div>
            </div>



            <h4>Shipping Address</h4>
            <hr class="padding-bottom-1x">
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input name="isDeliverySame" class="custom-control-input isDeliverySame" type="checkbox" id="same_address" checked onClick="IsDeliverySame_clicked();">
                <label class="custom-control-label" for="same_address">Same as billing address</label>
              </div>
            </div>

            <div id="shipping-container">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="checkout-fn">First Name</label>
                    <input name="shippingFirstName" class="form-control delivery_input" type="text" id="checkout-fn">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="checkout-ln">Last Name</label>
                    <input name="shippingLastName" class="form-control delivery_input" type="text" id="checkout-ln">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="checkout-address1">Address 1</label>
                    <input name="shippingAddress1" class="form-control delivery_input" type="text" id="checkout-address1">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="checkout-address2">Address 2</label>
                    <input name="shippingAddress2" class="form-control delivery_input" type="text" id="checkout-address2">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="checkout-city">City</label>
                    <input name="shippingCity" class="form-control delivery_input" type="text" id="checkout-city">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="checkout-zip">ZIP Code</label>
                    <input name="shippingPostcode" class="form-control delivery_input" type="text" id="checkout-zip">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                      <label for="shipping-country">Country</label>
                      <select name="shippingCountry" class="form-control delivery_input" id="shipping-country">
                        
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="shipping-state">State</label>
                      <select name="shippingState" class="form-control delivery_input" id="shipping-state">

                      </select>
                    </div>
                  </div>
                </div>

              <div class="row padding-bottom-1x">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="checkout-phone">Phone Number</label>
                    <input name="shippingPhone" class="form-control delivery_input" type="text" id="checkout-phone">
                  </div>
                </div>
              </div>
            </div>





            <div class="checkout-footer">
              <div class="column"><a class="btn btn-outline-secondary" href="<?php echo base_url(); ?>cart/basket"><i class="icon-arrow-left"></i><span class="hidden-xs-down">&nbsp;Back To Cart</span></a></div>
              <div class="column"><button class="btn btn-primary" href="<?php echo base_url(); ?>checkout/shipping"><span class="hidden-xs-down">Continue&nbsp;</span><i class="icon-arrow-right"></i></button></div>
            </div>
          </div>
        </form>

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
                    <td class="text-medium">$0</td>
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
              <section class="promo-box" style="background-image: url(<?php echo base_url(); ?>img/banners/02.jpg);"><span class="overlay-dark" style="opacity: .4;"></span>
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