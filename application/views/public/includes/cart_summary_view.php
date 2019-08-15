<?php 	
	$items = $this->session->userdata('cart_items');
	$total = $this->session->userdata('cart_total');
?>
<div class="cart">

	<a href="<?php echo base_url(); ?>cart/basket"></a>
	<i class="icon-bag"></i>
	<span class="count"><?= count($items); ?></span>
	<span class="subtotal">$<?= $total; ?></span>

	<div class="toolbar-dropdown">

		<h6>Cart Summary</h6>

		<?php for ($x = 0; $x < count($items); $x++) { ?>

			<div class="dropdown-product-item">
				<span class="dropdown-product-remove"><i class="icon-cross"></i></span>
				<a class="dropdown-product-thumb" href="<?php echo base_url(); ?>cart/basket">
				  <img src="<?php echo base_url(); ?>img/uploads/<?php echo $items[$x]['id']; ?>/1.jpg" alt="Product">
				</a>
				<div class="dropdown-product-info">
				  <a class="dropdown-product-title" href="<?php echo base_url(); ?>cart/basket"><?php echo $items[$x]['name']; ?></a>
				  <span class="dropdown-product-details"><?= $items[$x]['quantity']; ?>x $<?= $items[$x]['price']; ?></span>
				</div>
			</div>

		<?php	} ?>

		<div class="toolbar-dropdown-group">
			<div class="column"><span class="text-lg">Total:</span></div>
			<div class="column text-right"><span class="text-lg text-medium">$<?= $total; ?>&nbsp;</span></div>
		</div>

		<div class="toolbar-dropdown-group">
			<div class="column"><a class="btn btn-sm btn-block btn-secondary" href="<?php echo base_url(); ?>cart/basket">View Cart</a></div>
			<div class="column"><a class="btn btn-sm btn-block btn-success" href="<?php echo base_url(); ?>checkout/information">Checkout</a></div>
		</div>

	</div>

</div><!-- /cart -->