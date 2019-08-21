
<!-- Page Title-->
<div class="page-title">
  <div class="container">
    <div class="column">
      <h1><?= $product->name; ?></h1>
    </div>
    <div class="column">
      <ul class="breadcrumbs">
        <li><a href="<?php echo base_url(); ?>">Home</a></li>
        <li class="separator">&nbsp;</li>
        <li><?= $product->name; ?></li>
      </ul>
    </div>
  </div>
</div>

<!-- Page Content-->
<div class="container padding-bottom-3x mb-1">
  <div class="row">

    <!-- Poduct Gallery-->
    <div class="col-md-8">
      <div class="product-gallery"><span class="product-badge text-danger"><?= $product->percentage_off; ?>% Off</span>
        <div class="gallery-wrapper">

          <?php /*
          <div class="gallery-item video-btn text-center"><a href="#" data-toggle="tooltip" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;//www.youtube.com/embed/B81qd2v6alw?rel=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;" title="Watch video"></a></div>
          */ ?>

        </div>

        <div class="product-carousel owl-carousel gallery-wrapper">
          <div class="gallery-item" data-hash="one"><a href="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/1.jpg" data-size="1000x1000"><img src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/1.jpg" alt="Product"></a></div>
          <div class="gallery-item" data-hash="two"><a href="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/2.jpg" data-size="1000x1000"><img src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/2.jpg" alt="Product"></a></div>
          <div class="gallery-item" data-hash="three"><a href="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/3.jpg" data-size="1000x1000"><img src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/3.jpg" alt="Product"></a></div>
          <div class="gallery-item" data-hash="four"><a href="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/4.jpg" data-size="1000x1000"><img src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/4.jpg" alt="Product"></a></div>
          <div class="gallery-item" data-hash="five"><a href="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/5.jpg" data-size="1000x1000"><img src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/5.jpg" alt="Product"></a></div>
        </div>

        <ul class="product-thumbnails">
          <li class="active"><a href="#one"><img width="92px" height="66px" src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/1.jpg" alt="Product"></a></li>
          <li><a href="#two"><img width="92px" height="66px" src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/2.jpg" alt="Product"></a></li>
          <li><a href="#three"><img width="92px" height="66px" src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/3.jpg" alt="Product"></a></li>
          <li><a href="#four"><img width="92px" height="66px" src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/4.jpg" alt="Product"></a></li>
          <li><a href="#five"><img width="92px" height="66px" src="<?php echo base_url(); ?>img/uploads/<?= $product->id; ?>/5.jpg" alt="Product"></a></li>
        </ul>
        
      </div>
    </div>

    <!-- Product Info-->
    <div class="col-md-4">

      <!-- <div class="padding-top-2x mt-2 hidden-md-up"></div> -->

      <h2 class="padding-top-1x text-normal"><?= $product->name; ?></h2>

      <span class="h2 d-block"><?= $currency_symbol; ?><?= number_format($product->price, 2); ?>&nbsp;<del class="text-muted text-normal"><?= $currency_symbol; ?><?= number_format($product->price_full, 2); ?></del></span>

      <a href="<?= site_url('cart/add/' . $product->id); ?>" class="btn btn-block btn-primary" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!"><i class="icon-bag"></i> Add to Cart</a>

      <div class="text-center">
        <img src="<?php echo base_url(); ?>img/public/checkout-secure.png" alt="Checkout Securely">
      </div>

      <div>
        <?= $product->description; ?>
      </div>

        <!-- <p><strong>100% SATISFACTION GUARANTEE!</strong></p>

        <p>If you are not <strong>100% satisfied</strong> with your purchase, we will provide you with a full refund. No questions asked! Just email us.</p>

        <hr class="mb-3">

        <p><strong>Free Shipping Worldwide to All Countries (8-12 Day Shipping)</strong></p>

        <p>The luxurious Caviar Clutch is crafted of luxurious black caviar leather with iconic diamond-shaped stitched quilting. The bag has classic polished gold chain shoulder straps threaded with black leather and a gold CC turn lock. This opens the front flap to another flap and a burgundy leather interior with patch pockets. Satisfy your practical needs as well as your demand for style with this lovely classic that is is as sophisticated as it is chic!</p>

        <p>Base Length: 9.75 in<br>
        Height: 6.25 in<br>
        Width: 2.5 in<br>
        Adjustable Drop: 9.75 - 16.75 in</p>
        
        <p><strong>Why Buy From Us?</strong></p>

        <ul>
          <li>FREE Shipping</li>
          <li>24/7 Customer Service</li>
          <li>Quality Guaranteed</li>
        </ul>
        
        <p><strong>THIS ITEM IS NOT SOLD IN STORES, SO GET IT WHILE SUPPLIES LAST!</strong></p>

        <p><strong>UPDATE: Due to the huge increase in social media attention, we're running extremely low on these, so hurry and order before it's all gone.</strong></p>

        <h3>BUY WITH CONFIDENCE</h3>

        <p>We truly believe in the best customer support, that is why we will do whatever it takes to make sure you have a positive purchasing experience. We respond within 24 hours of emails and will make sure all your concerns are answered ASAP.</p>

        <p>If you have any concerns about shipping or store policy, please visit our Store Policy page to get more details.</p>
 
        <div class="row margin-top-1x">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="size">Men's size</label>
              <select class="form-control" id="size">
                <option>Chooze size</option>
                <option>11.5</option>
                <option>11</option>
                <option>10.5</option>
                <option>10</option>
                <option>9.5</option>
                <option>9</option>
                <option>8.5</option>
              </select>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="form-group">
              <label for="color">Choose color</label>
              <select class="form-control" id="color">
                <option>White/Red/Blue</option>
                <option>Black/Orange/Green</option>
                <option>Gray/Purple/White</option>
              </select>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="form-group">
              <label for="quantity">Quantity</label>
              <select class="form-control" id="quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div> -->
        </div> 

        <!-- <div class="pt-1 mb-2"><span class="text-medium">SKU:</span> #21457832</div> -->

        <div class="padding-bottom-1x mb-2"><span class="text-medium">Categories:&nbsp;</span>
          <!-- <a class="navi-link" href="#">Men’s shoes,</a><a class="navi-link" href="#"> Snickers,</a><a class="navi-link" href="#"> Sport shoes</a> -->
        </div>

        <hr class="mb-3">

        <div class="d-flex flex-wrap justify-content-between">
          <div class="entry-share mt-2 mb-2"><span class="text-muted">Share:</span>
            <div class="share-links"><a class="social-button shape-circle sb-facebook" href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="socicon-facebook"></i></a><a class="social-button shape-circle sb-twitter" href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="socicon-twitter"></i></a><a class="social-button shape-circle sb-instagram" href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="socicon-instagram"></i></a><a class="social-button shape-circle sb-google-plus" href="#" data-toggle="tooltip" data-placement="top" title="Google +"><i class="socicon-googleplus"></i></a></div>
          </div>
          <div class="sp-buttons mt-2 mb-2">
            <button class="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist"><i class="icon-heart"></i></button>
          </div>
        </div>

      </div><!-- /col-md-6 -->
    </div><!-- /row -->
  </div><!-- /container -->

  <!-- Photoswipe container-->
  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>
      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <div class="pswp__counter"></div>
          <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
          <button class="pswp__button pswp__button--share" title="Share"></button>
          <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
          <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div class="pswp__share-tooltip"></div>
        </div>
        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>
  </div>