  <!-- Site Footer-->
  <footer class="site-footer">
    <div class="container">

      <div class="row">

        <div class="col-lg-4 col-md-6">
          <!-- Contact Info-->
          <section class="widget widget-light-skin">
            <h3 class="widget-title">Get In Touch With Us</h3>
            <p class="text-white">Phone: 00 33 169 7720</p>
            <ul class="list-unstyled text-sm text-white">
              <li><span class="opacity-50">Monday-Friday:</span>9.00 am - 8.00 pm</li>
              <li><span class="opacity-50">Saturday:</span>10.00 am - 6.00 pm</li>
            </ul>
            <p><a class="navi-link-light" href="mailto:support@membreo.com">support@membreo.com</a></p>
            <a class="social-button shape-circle sb-facebook sb-light-skin" href="#"><i class="socicon-facebook"></i></a>
            <a class="social-button shape-circle sb-twitter sb-light-skin" href="#"><i class="socicon-twitter"></i></a>
            <a class="social-button shape-circle sb-instagram sb-light-skin" href="#"><i class="socicon-instagram"></i></a>
            <a class="social-button shape-circle sb-google-plus sb-light-skin" href="#"><i class="socicon-googleplus"></i></a>
          </section>
        </div>

        <div class="col-lg-4 col-md-6">
          <!-- About Us-->
          <section class="widget widget-links widget-light-skin">
            <h3 class="widget-title">About Us</h3>
            <ul>
              <li><a href="<?php echo base_url(); ?>about">About Us</a></li>
              <li><a href="<?php echo base_url(); ?>contact">Contacts</a></li>
              <li><a href="<?php echo base_url(); ?>faq">Help / FAQ</a></li>
              <li><a href="<?php echo base_url(); ?>terms">Terms &amp; Conditions</a></li>
              <li><a href="<?php echo base_url(); ?>privacy">Privacy Policy</a></li>
            </ul>
          </section>
        </div>

        <div class="col-lg-4 col-md-6">
          <!-- Account / Shipping Info-->
          <section class="widget widget-links widget-light-skin">
            <h3 class="widget-title">Account &amp; Shipping Info</h3>
            <ul>
              <li><a href="<?php echo base_url(); ?>checkout/information">Address</a></li>
              <li><a href="<?php echo base_url(); ?>checkout/shipping">Shipping</a></li>
              <li><a href="<?php echo base_url(); ?>checkout/confirm">Confirm</a></li>
              <li><a href="<?php echo base_url(); ?>checkout/complete">Complete</a></li>
            </ul>
          </section>
        </div>

      </div><!-- /row -->

      <hr class="hr-light mt-2 margin-bottom-2x">

      <div class="row">
        <div class="col-md-7 padding-bottom-1x">
          <!-- Payment Methods-->
          <div class="margin-bottom-1x" style="max-width: 615px;"><img src="<?php echo base_url(); ?>img/public/payment_methods.png" alt="Payment Methods">
          </div>
        </div>
        <div class="col-md-5 padding-bottom-1x">
          <div class="margin-top-1x hidden-md-up"></div>
          <!--Subscription-->
          <form class="subscribe-form" action="//rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=1194bb7544" method="post" target="_blank" novalidate>
            <div class="clearfix">
              <div class="input-group input-light">
                <input class="form-control" type="email" name="EMAIL" placeholder="Your e-mail"><span class="input-group-addon"><i class="icon-mail"></i></span>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabindex="-1">
              </div>
              <button class="btn btn-primary" type="submit"><i class="icon-check"></i></button>
            </div><span class="form-text text-sm text-white opacity-50">Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</span>
          </form>
        </div>
      </div>

      <hr class="hr-light mt-2 margin-bottom-2x">

      <!-- Copyright-->
      <p class="footer-copyright text-center">&copy; <strong>Membreo</strong> <?php echo date('Y'); ?> All rights reserved.</p>

    </div><!-- /container -->
  </footer>

  </div><!-- /offcanvas-wrapper -->

  <!-- Back To Top Button--><a class="scroll-to-top-btn" href="#"><i class="icon-arrow-up"></i></a>
  <!-- Backdrop-->
  <div class="site-backdrop"></div>

  <?php $this->load->view('public/includes/footer_scripts_view'); ?>
    
  </body>
</html>