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
              <li>3. Payment</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Page Content-->
      <div class="container padding-bottom-3x mb-2">
        <div class="row">
          <!-- Checkout Adress-->
          <div class="col-xl-9 col-lg-8">
            <div class="checkout-steps"><a href="<?php echo base_url(); ?>checkout/review">4. Review</a><a class="active" href="<?php echo base_url(); ?>checkout/payment"><span class="angle"></span>3. Payment</a><a class="completed" href="<?php echo base_url(); ?>checkout/shipping"><span class="step-indicator icon-circle-check"></span><span class="angle"></span>2. Shipping</a><a class="completed" href="<?php echo base_url(); ?>checkout/address"><span class="step-indicator icon-circle-check"></span><span class="angle"></span>1. Address</a></div>
            <h4>Choose Payment Method</h4>
            <hr class="padding-bottom-1x">
            <div class="accordion" id="accordion" role="tablist">
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a href="#card" data-toggle="collapse"><i class="icon-columns"></i>Pay with Credit Card</a></h6>
                </div>
                <div class="collapse show" id="card" data-parent="#accordion" role="tabpanel">
                  <div class="card-body">
                    <p>We accept following credit cards:&nbsp;<img class="d-inline-block align-middle" src="<?php echo base_url(); ?>img/public/credit-cards.png" style="width: 120px;" alt="Cerdit Cards"></p>
                    <div class="card-wrapper"></div>
                    <form class="interactive-credit-card row">
                      <div class="form-group col-sm-6">
                        <input class="form-control" type="text" name="number" placeholder="Card Number" required>
                      </div>
                      <div class="form-group col-sm-6">
                        <input class="form-control" type="text" name="name" placeholder="Full Name" required>
                      </div>
                      <div class="form-group col-sm-3">
                        <input class="form-control" type="text" name="expiry" placeholder="MM/YY" required>
                      </div>
                      <div class="form-group col-sm-3">
                        <input class="form-control" type="text" name="cvc" placeholder="CVC" required>
                      </div>
                      <div class="col-sm-6">
                        <button class="btn btn-outline-primary btn-block margin-top-none" type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#paypal" data-toggle="collapse"><i class="socicon-paypal"></i>Pay with PayPal</a></h6>
                </div>
                <div class="collapse" id="paypal" data-parent="#accordion" role="tabpanel">
                  <div class="card-body">
                    <p>PayPal - the safer, easier way to pay</p>
                    <form class="row" method="post">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control" type="email" placeholder="E-mail" required>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control" type="password" placeholder="Password" required>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-flex flex-wrap justify-content-between align-items-center"><a class="navi-link" href="#">Forgot password?</a>
                          <button class="btn btn-outline-primary margin-top-none" type="submit">Log In</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#points" data-toggle="collapse"><i class="icon-medal"></i>Redeem Reward Points</a></h6>
                </div>
                <div class="collapse" id="points" data-parent="#accordion" role="tabpanel">
                  <div class="card-body">
                    <p>You currently have<span class="text-medium"> 290</span> Reward Points to spend.</p>
                    <div class="custom-control custom-checkbox d-block">
                      <input class="custom-control-input" type="checkbox" id="use_points">
                      <label class="custom-control-label" for="use_points">Use my Reward Points to pay for this order.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="checkout-footer margin-top-1x">
              <div class="column"><a class="btn btn-outline-secondary" href="<?php echo base_url(); ?>checkout/shipping"><i class="icon-arrow-left"></i><span class="hidden-xs-down">&nbsp;Back</span></a></div>
              <div class="column"><a class="btn btn-primary" href="<?php echo base_url(); ?>checkout/review"><span class="hidden-xs-down">Continue&nbsp;</span><i class="icon-arrow-right"></i></a></div>
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
                    <td class="text-medium">$289.68</td>
                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td class="text-medium">$22.50</td>
                  </tr>
                  <tr>
                    <td>Estimated tax:</td>
                    <td class="text-medium">$3.42</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="text-lg text-medium">$315.60</td>
                  </tr>
                </table>
              </section>

              <?php /* 
              <!-- Featured Products Widget-->
              <section class="widget widget-featured-products">
                <h3 class="widget-title">Recently Viewed</h3>
                <!-- Entry-->
                <div class="entry">
                  <div class="entry-thumb"><a href="<?php echo base_url(); ?>"><img src="<?php echo base_url(); ?>img/public/shop/widget/01.jpg" alt="Product"></a></div>
                  <div class="entry-content">
                    <h4 class="entry-title"><a href="<?php echo base_url(); ?>">Oakley Kickback</a></h4><span class="entry-meta">$155.00</span>
                  </div>
                </div>
                <!-- Entry-->
                <div class="entry">
                  <div class="entry-thumb"><a href="<?php echo base_url(); ?>"><img src="<?php echo base_url(); ?>img/public/shop/widget/02.jpg" alt="Product"></a></div>
                  <div class="entry-content">
                    <h4 class="entry-title"><a href="<?php echo base_url(); ?>">Top-Sider Fathom</a></h4><span class="entry-meta">$90.00</span>
                  </div>
                </div>
                <!-- Entry-->
                <div class="entry">
                  <div class="entry-thumb"><a href="<?php echo base_url(); ?>"><img src="<?php echo base_url(); ?>img/public/shop/widget/03.jpg" alt="Product"></a></div>
                  <div class="entry-content">
                    <h4 class="entry-title"><a href="<?php echo base_url(); ?>">Vented Straw Fedora</a></h4><span class="entry-meta">$49.50</span>
                  </div>
                </div>
                <!-- Entry-->
                <div class="entry">
                  <div class="entry-thumb"><a href="<?php echo base_url(); ?>"><img src="<?php echo base_url(); ?>img/public/shop/widget/04.jpg" alt="Product"></a></div>
                  <div class="entry-content">
                    <h4 class="entry-title"><a href="<?php echo base_url(); ?>">Big Wordmark Tote</a></h4><span class="entry-meta">$29.99</span>
                  </div>
                </div>
              </section>
              */ ?>
              
              <?php /* 
              <!-- Promo Banner-->
              <section class="promo-box" style="background-image: url(<?php echo base_url(); ?>img/banners/02.jpg);"><span class="overlay-dark" style="opacity: .4;"></span>
                <div class="promo-box-content text-center padding-top-2x padding-bottom-2x">
                  <h4 class="text-light text-thin text-shadow">New Collection of</h4>
                  <h3 class="text-bold text-light text-shadow">Sunglasses</h3><a class="btn btn-outline-white btn-sm" href="<?php echo base_url(); ?>">Shop Now</a>
                </div>
              </section>
              */ ?>

            </aside>
          </div>

        </div>
      </div>