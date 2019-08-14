<div class="cart">

	<a href="<?php echo base_url(); ?>cart/basket"></a>
	<i class="icon-bag"></i>
	<span class="count">3</span>
	<span class="subtotal">$289.68</span>

	<div class="toolbar-dropdown">

		<h6>Cart Summary</h6>

		<?php for ($x = 1; $x <= 3; $x++) { ?>

			<div class="dropdown-product-item">
				<span class="dropdown-product-remove"><i class="icon-cross"></i></span>
				<a class="dropdown-product-thumb" href="<?php echo base_url(); ?>cart/basket">
				  <img src="<?php echo base_url(); ?>img/public/cart-dropdown/<?php echo $x; ?>.jpg" alt="Product">
				</a>
				<div class="dropdown-product-info">
				  <a class="dropdown-product-title" href="<?php echo base_url(); ?>cart/basket">Product <?php echo $x; ?></a>
				  <span class="dropdown-product-details">1 x $43.90</span>
				</div>
			</div>

		<?php	} ?>

		<div class="toolbar-dropdown-group">
			<div class="column"><span class="text-lg">Total:</span></div>
			<div class="column text-right"><span class="text-lg text-medium">$289.68&nbsp;</span></div>
		</div>

		<div class="toolbar-dropdown-group">
			<div class="column"><a class="btn btn-sm btn-block btn-secondary" href="<?php echo base_url(); ?>cart/basket">View Cart</a></div>
			<div class="column"><a class="btn btn-sm btn-block btn-success" href="<?php echo base_url(); ?>checkout/address">Checkout</a></div>
		</div>

	</div>

</div><!-- /cart -->