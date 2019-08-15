<!-- Page Title-->
<div class="page-title">
  <div class="container">
    <div class="column">
      <h1>Pay With Stripe</h1>
    </div>
    <div class="column">
      <ul class="breadcrumbs">
        <li><a href="<?php echo base_url();?>">Home</a>
        </li>
        <li class="separator">&nbsp;</li>
        <li>Stripe</li>
      </ul>
    </div>
  </div>
</div>

<div class="container padding-bottom-2x mb-2">

  <div class="row align-items-center padding-bottom-2x">

    <form action="<?= site_url('checkout/confirm'); ?>" method="post" id="payment-form">

      <div class="form-row-stripe">

        <label for="card-element">
        Credit or Debit Card
        </label>

        <div id="card-element">
        <!-- A Stripe Element will be inserted here. -->
        </div>

        <!-- Used to display form errors. -->
        <div id="card-errors" role="alert"></div>

      </div>

      <button class="btn btn-primary">Submit Payment To Stripe</button>

    </form>


  </div><!-- /row -->

</div><!-- /container -->