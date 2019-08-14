      <!-- Page Title-->
      <div class="page-title">
        <div class="container">
          <div class="column">
            <h1>Checkout</h1>
          </div>
          <div class="column">
            <ul class="breadcrumbs">
              <li><a href="<?php echo base_url(); ?>">Home</a>
              </li>
              <li class="separator">&nbsp;</li>
              <li>Checkout</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Page Content-->
      <div class="container padding-bottom-3x mb-2">
        <div class="card text-center">
          <div class="card-body padding-top-2x">
            <h3 class="card-title">Thank you for your order!</h3>
            <p class="card-text">Your order has been placed and will be processed as soon as possible.</p>
            <p class="card-text">Make sure you make note of your order number, which is <span class="text-medium"><?= $this->session->userdata('transaction_id'); ?></span></p>
            <p class="card-text">You will be receiving an email shortly with confirmation of your order. 
              <u>You can now:</u>
            </p>
            <div class="padding-top-1x padding-bottom-1x"><a class="btn btn-outline-secondary" href="<?php echo base_url(); ?>">Go Back Shopping</a><a class="btn btn-outline-primary" href="<?php echo base_url(); ?>profile/order/34VB5540K83"><i class="icon-location"></i>&nbsp;Track order</a></div>
          </div>
        </div>
      </div>