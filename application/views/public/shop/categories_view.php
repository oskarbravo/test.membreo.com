      <!-- Page Title-->
      <div class="page-title">
        <div class="container">
          <div class="column">
            <h1>Shop Categories</h1>
          </div>
          <div class="column">
            <ul class="breadcrumbs">
              <li><a href="<?php echo base_url(); ?>">Home</a>
              </li>
              <li class="separator">&nbsp;</li>
              <li>Shop Categories</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Page Content-->
      <div class="container padding-bottom-2x mb-2">
        <div class="row">

          <!-- Sidebar -->
          <div class="col-lg-3">
            <button class="sidebar-toggle position-left" data-toggle="modal" data-target="#modalShopCategories"><i class="icon-layout"> </i></button>
            <aside class="sidebar sidebar-offcanvas">
              <section class="widget widget-categories">
                <h3 class="widget-title">Shop Categories</h3>
                <ul>
                  <li><a href="#">Bags</a><span>(4)</span></li>
                  <li><a href="#">Lamps</a><span>(3)</span></li>
                </ul>
              </section>
            </aside>
          </div>

          <!-- Categories-->
          <div class="col-lg-9">

            <!-- Promo banner-->
            <div class="alert alert-image-bg alert-dismissible fade show text-center mb-4" style="background-image: url(<?php echo base_url(); ?>img/public/banners/alert-bg.jpg)"><span class="alert-close text-white" data-dismiss="alert"></span>
              <div class="h3 text-medium text-white padding-top-1x padding-bottom-1x"><i class="icon-clock" style="font-size: 33px; margin-top: -5px;"></i>&nbsp;&nbsp;Check our Limited Offers. Save up to 50%&nbsp;&nbsp;&nbsp;
                <div class="mt-3 hidden-xl-up"></div><a class="btn btn-primary" href="#">View Offers</a>
              </div>
            </div>

            <div class="row">

              <?php for ($x = 1; $x <= 16; $x++) { ?>
                <div class="col-sm-6">
                  <div class="card mb-30"><a class="card-img-tiles" href="<?php echo base_url(); ?>shop/product">
                      <div class="inner">
                        <div class="main-img"><img src="<?php echo base_url(); ?>img/public/shop/categories/01.jpg" alt="Category"></div>
                        <div class="thumblist"><img src="<?php echo base_url(); ?>img/public/shop/categories/02.jpg" alt="Category"><img src="<?php echo base_url(); ?>img/public/shop/categories/03.jpg" alt="Category"></div>
                      </div></a>
                    <div class="card-body text-center">
                      <h4 class="card-title">Product Category <?php echo $x; ?></h4>
                      <p class="text-muted">Starting from $49.99</p><a class="btn btn-outline-primary btn-sm" href="<?php echo base_url(); ?>shop/product">View Products</a>
                    </div>
                  </div>
                </div>
              <?php	} ?>

            </div><!-- /row -->
          </div><!-- /col-lg-9 -->
        </div><!-- /row -->
      </div><!-- /container -->