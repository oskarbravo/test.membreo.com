<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends CI_Controller {

	public function __construct()
    {
		parent::__construct();
		if (!$this->session->has_userdata('cart')) {
			$cart = array();
			$this->session->set_userdata('cart', serialize($cart));
		}

		$this->session->set_userdata('cart_items', array_values(unserialize($this->session->userdata('cart'))));
		$this->session->set_userdata('cart_total', $this->total());
	}


	private function total() {
		$items = array_values(unserialize($this->session->userdata('cart')));
		$s = 0;
		foreach ($items as $item) {
			$s += $item['price'] * $item['quantity'];
		}
		return $s;
	}

}