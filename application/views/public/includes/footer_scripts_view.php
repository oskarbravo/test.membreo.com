    <!-- JavaScript jQuery libraries, plugins and custom scripts -->
    <script src="<?php echo base_url(); ?>js/public/vendor.js"></script>
    <!-- Used for checkout/payment -->
    <script src="<?php echo base_url(); ?>js/public/card.min.js"></script>
    <!-- Used for checkout/payment -->
    <script src="<?php echo base_url(); ?>js/public/scripts.min.js"></script>
    <!-- Stipe.js -->
    <script type="text/javascript" src="<?php echo base_url(); ?>js/public/stripe.js"></script>

    <?php if ($this->uri->segment(1) == "checkout" && $this->uri->segment(2) == "information") { ?>
    	<!-- On the checkout/information page -->
    	<script type="text/javascript" src="<?php echo base_url(); ?>js/common/countrycodes.js"></script>
	    <script type="text/javascript" src="<?php echo base_url(); ?>js/common/statecodes.js"></script>
	    <script type="text/javascript" src="<?php echo base_url(); ?>js/public/is_delivery_same.js"></script>

	    <script>
	    	$(document).ready(function() {
			    document.getElementById("billing-country").innerHTML = getCountryOptionsListHtml("");
			    document.getElementById("billing-state").innerHTML = getUsStateOptionsListHtml("");
			    document.getElementById("shipping-country").innerHTML = getCountryOptionsListHtml("");
			    document.getElementById("shipping-state").innerHTML = getUsStateOptionsListHtml("");

			    document.getElementById('shipping-container').style.display = "none";
			});


	    </script>
    <?php } ?>
