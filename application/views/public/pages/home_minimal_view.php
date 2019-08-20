<!-- public/includes/header_view -->

	<!-- Page Content-->

  <!-- Promo-->
  <section class="fw-section" style="background-image: url(<?php echo base_url(); ?>img/public/banners/home07.jpg);">
    <span class="overlay" style="background-color: #000000; opacity: 0.5;"></span>
    <div class="container text-center padding-top-4x padding-bottom-4x">
      <h3 class="display-4 text-normal text-white text-shadow mb-1">Premium Collection</h3>
      <h2 class="display-2 text-bold text-white text-shadow">CLEARANCE SALE!</h2>
      <h4 class="d-inline-block h2 text-normal text-white text-shadow border-default border-left-0 border-right-0 mb-4">whilst stocks last</h4><br><a class="btn btn-primary" href="<?php echo base_url(); ?>">Shop Now</a>
    </div>
  </section>

  <section class="container-fluid padding-top-3x padding-bottom-3x">
    <h3 class="text-center mb-30">Featured Products</h3>

    <div class="row">
      <?php for ($x = 0; $x < count($products); $x++) { ?>

        <!-- Product-->
        <div class="col-md-3">
          <div class="product-card border-0">

            <span class="badge badge-danger"><?= $products[$x]->percentage_off; ?>% Off</span>
            
            <a class="product-thumb" href="<?php echo base_url(); ?>shop/product/<?= $products[$x]->id; ?>"><img src="<?php echo base_url(); ?>img/uploads/<?= $products[$x]->id; ?>/1.jpg" alt="Product"></a>
            
            <h3 class="product-title"><a href="<?php echo base_url(); ?>"><?= $products[$x]->name; ?></h3></a>
            
            <h4 class="product-price"><?= $currency_symbol; ?><?= number_format($products[$x]->price, 2); ?>&nbsp;<del class="text-muted text-normal"><?= $currency_symbol; ?><?= $products[$x]->price_full; ?></del></h4>

            </div><!-- /product-card -->
          </div><!-- /grid-item -->
      <?php	} ?>
    </div>
  </section>

	<!-- Popular Brands-->
	<section class="bg-faded padding-top-3x padding-bottom-3x">
		<div class="container">
			<h3 class="text-center mb-30 pb-2">Popular Brands</h3>
			<div class="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 4000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:2}, &quot;470&quot;:{&quot;items&quot;:3},&quot;630&quot;:{&quot;items&quot;:4},&quot;991&quot;:{&quot;items&quot;:5},&quot;1200&quot;:{&quot;items&quot;:6}} }"><img class="d-block w-110 opacity-75 m-auto" src="<?php echo base_url(); ?>img/public/brands/01.png" alt="Adidas"><img class="d-block w-110 opacity-75 m-auto" src="<?php echo base_url(); ?>img/public/brands/02.png" alt="Brooks"><img class="d-block w-110 opacity-75 m-auto" src="<?php echo base_url(); ?>img/public/brands/03.png" alt="Valentino"><img class="d-block w-110 opacity-75 m-auto" src="<?php echo base_url(); ?>img/public/brands/04.png" alt="Nike"><img class="d-block w-110 opacity-75 m-auto" src="<?php echo base_url(); ?>img/public/brands/05.png" alt="Puma"><img class="d-block w-110 opacity-75 m-auto" src="<?php echo base_url(); ?>img/public/brands/06.png" alt="New Balance"><img class="d-block w-110 opacity-75 m-auto" src="<?php echo base_url(); ?>img/public/brands/07.png" alt="Dior"></div>
		</div>
	</section>

	<!-- Services-->
	<section class="container padding-top-3x padding-bottom-2x">
		<div class="row">
			<div class="col-md-3 col-sm-6 text-center mb-30"><img class="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="<?php echo base_url(); ?>img/public/services/01.png" alt="Shipping">
				<h6>Free Worldwide Shipping</h6>
				<p class="text-muted margin-bottom-none">Free shipping for all orders over $100</p>
			</div>
			<div class="col-md-3 col-sm-6 text-center mb-30"><img class="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="<?php echo base_url(); ?>img/public/services/02.png" alt="Money Back">
				<h6>Money Back Guarantee</h6>
				<p class="text-muted margin-bottom-none">We return money within 30 days</p>
			</div>
			<div class="col-md-3 col-sm-6 text-center mb-30"><img class="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="<?php echo base_url(); ?>img/public/services/03.png" alt="Support">
				<h6>24/7 Customer Support</h6>
				<p class="text-muted margin-bottom-none">Friendly 24/7 customer support</p>
			</div>
			<div class="col-md-3 col-sm-6 text-center mb-30"><img class="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="<?php echo base_url(); ?>img/public/services/04.png" alt="Payment">
				<h6>Secure Online Payment</h6>
				<p class="text-muted margin-bottom-none">We posess SSL / Secure Certificate</p>
			</div>
		</div>
	</section>

  <!-- Video Section -->
  <section class="fw-section">
    <video poster="<?php echo base_url(); ?>img/banners/home07.jpg" id="bgvid" playsinline autoplay muted loop>
      <source src="<?php echo base_url(); ?>img/public/videos/paris.mp4" type="video/mp4">
    </video>
  </section>
  
<!-- public/includes/footer_view -->