<!-- public/includes/header_view -->

	<!-- Page Content-->

	<!-- Main Slider-->
	<section class="hero-slider" style="background-image: url(<?php echo base_url(); ?>img/public/hero-slider/main-bg.jpg);">
		<div class="owl-carousel large-controls dots-inside" data-owl-carousel="{ &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000 }">

			<div class="item">
				<div class="container padding-top-3x">
					<div class="row justify-content-center align-items-center">
						<div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
							<div class="from-bottom"><img class="d-inline-block w-150 mb-4" src="<?php echo base_url(); ?>img/public/hero-slider/logo02.png" alt="Puma">
								<div class="h2 text-body text-normal mb-2 pt-1">Gucci Dionysus</div>
								<div class="h2 text-body text-normal mb-4 pb-1">starting at <span class="text-bold">$179.99</span></div>
							</div><a class="btn btn-primary scale-up delay-1" href="shop-grid-ls.html">View Offers</a>
						</div>
						<div class="col-md-6 padding-bottom-2x mb-3"><img class="d-block mx-auto" src="<?php echo base_url(); ?>img/public/hero-slider/02.png" alt="Puma Backpack"></div>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="container padding-top-3x">
					<div class="row justify-content-center align-items-center">
						<div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
							<div class="from-bottom"><img class="d-inline-block w-200 mb-4" src="<?php echo base_url(); ?>img/public/hero-slider/logo01.png" alt="Converse">
								<div class="h2 text-body text-normal mb-2 pt-1">Chanel Classic Flap</div>
								<div class="h2 text-body text-normal mb-4 pb-1">Starting At <span class="text-bold">$179.99</span></div>
							</div><a class="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
						</div>
						<div class="col-md-6 padding-bottom-2x mb-3"><img class="d-block mx-auto" src="<?php echo base_url(); ?>img/public/hero-slider/01.png" alt="Chuck Taylor All Star II"></div>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="container padding-top-3x">
					<div class="row justify-content-center align-items-center">
						<div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
							<div class="from-bottom"><img class="d-inline-block mb-4" src="<?php echo base_url(); ?>img/public/hero-slider/logo03.png" style="width: 125px;" alt="Motorola">
								<div class="h2 text-body text-normal mb-2 pt-1">Hermes Birkin</div>
								<div class="h2 text-body text-normal mb-4 pb-1">for only <span class="text-bold">$199.99</span></div>
							</div><a class="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
						</div>
						<div class="col-md-6 padding-bottom-2x mb-3"><img class="d-block mx-auto" src="<?php echo base_url(); ?>img/public/hero-slider/03.png" alt="Moto 360"></div>
					</div>
				</div>
			</div>
			
		</div>
	</section>

	<section class="container-fluid padding-top-3x padding-bottom-3x">
		<h3 class="text-center mb-30">Featured Products</h3>
		<div class="row">
		<?php for ($x = 0; $x < count($products); $x++) { ?>
			<!-- Product-->
			<div class="col-md-3 col-sm-6">
				<div class="product-card border-0">

				<span class="badge badge-danger"><?= $products[$x]->percentage_off; ?>% Off</span>

				<a class="product-thumb" href="<?php echo base_url(); ?>shop/product/<?= $products[$x]->id; ?>"><img src="<?php echo base_url(); ?>img/uploads/<?= $products[$x]->id; ?>/1.jpg" alt="Product"></a>

				<h3 class="product-title"><a href="<?php echo base_url(); ?>"><?= $products[$x]->name; ?></h3></a>

				<h4 class="product-price"><?= $currency_symbol; ?><?= number_format($products[$x]->price, 2); ?>&nbsp;<del class="text-muted text-normal"><?= $currency_symbol; ?><?= $products[$x]->price_full; ?></del></h4>

				</div><!-- /product-card -->
			</div><!-- /grid-item -->
		<?php	} ?>
		</div><!-- /row -->
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
   
<!-- public/includes/footer_view -->