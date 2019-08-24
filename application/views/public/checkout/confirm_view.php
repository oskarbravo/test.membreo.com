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
              <li>4. Review</li>
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
              <a class="active" href="<?php echo base_url(); ?>checkout/confirm">
                4. Confirm
              </a>
              <a href="<?php echo base_url(); ?>checkout/shipping" class="completed">
                <span class="step-indicator icon-circle-check"></span>
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

            <h4>Review Your Order</h4>
            <hr class="padding-bottom-1x">
            <div class="table-responsive shopping-cart">
              <table class="table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th class="text-center">Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <?php for ($i=0; $i < count($items); $i++) { ?>
                  <tr>
                    <td>
                      <div class="product-item"><a class="product-thumb" href="shop-single.html"><img src="<?php echo base_url(); ?>img/uploads/<?= $items[$i]['id']; ?>/1.jpg" alt="Product"></a>
                        <div class="product-info">
                          <h4 class="product-title"><a href="shop-single.html"><?= $items[$i]['name']; ?><small>x <?= $items[$i]['quantity']; ?></small></a></h4><!-- <span><em>Size:</em> 10.5</span><span><em>Color:</em> Dark Blue</span> -->
                        </div>
                      </div>
                    </td>
                    <td class="text-center text-lg text-medium">$<?= $items[$i]['price']; ?></td>
                    <!-- <td class="text-center"><a class="btn btn-outline-primary btn-sm" href="<?php echo base_url(); ?>cart/basket">Edit</a></td> -->
                  </tr>
                <?php } ?>
                </tbody>
              </table>
            </div>
            <div class="shopping-cart-footer">
              <div class="column"></div>
              <div class="column text-lg">Subtotal: <span class="text-medium">$<?= $total; ?></span></div>
            </div>
            <div class="row padding-top-1x mt-3">
              <div class="col-sm-6">
                <h5>Shipping to:</h5>
                <ul class="list-unstyled">
                  <li><span class="text-muted">Client:</span><?= $customerName; ?></li>
                  <li><span class="text-muted">Address:</span><?= $customerAddress; ?></li>
                  <li><span class="text-muted">Phone:</span><?= $customerPhone; ?></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h5>Payment method:</h5>
                <ul class="list-unstyled">
                  <li><span class="text-muted">Payment Gateway:</span> <?= $merchant_tag; ?></li>
                </ul>
              </div>
            </div>
            <div class="checkout-footer margin-top-1x">
              <div class="column hidden-xs-down"><a class="btn btn-outline-secondary" href="<?php echo base_url(); ?>checkout/shipping"><i class="icon-arrow-left"></i>&nbsp;Back</a></div>
              <?php if ($merchant_gateway == "SagePay_Form") { ?>
                <form method="POST" id="SagePayForm" action="https://test.sagepay.com/gateway/service/vspform-register.vsp">
                  <input type="hidden" name="VPSProtocol" value= "3.00">
                  <input type="hidden" name="TxType" value= "PAYMENT">
                  <input type="hidden" name="Vendor" value= "<?= $vendor; ?>">
                  <input type="hidden" name="Crypt" value= "<?php echo $sagePay->getCrypt(); ?>">
                  <input type="submit" value="Continue to SagePay &rarr;" class="btn btn-primary">
                </form>

              <?php } else { ?>
                <div class="column"><a class="btn btn-primary" href="<?php echo base_url(); ?>checkout/process">Complete Order</a></div>
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

            </aside>
          </div>
        </div>
      </div>