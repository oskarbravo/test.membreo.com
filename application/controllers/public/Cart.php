<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cart extends MY_Controller {

	public function basket()
	{
		$data['title'] = 'Basket';

		$data['items'] = array_values(unserialize($this->session->userdata('cart')));

		if (count($data['items']) <= 0) {
			redirect(base_url());
		}

		$this->session->set_userdata('amount', $this->total());
		$data['total'] = $this->total();

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/cart/basket_view', $data);
		$this->load->view('public/includes/footer_view');
	}

	public function add()
	{
		$this->load->model('Products_model');
		$product = $this->Products_model->find($this->uri->segment(3));

		$item = array(
			'id' => (int)$product->id,
			'name' => $product->name,
			'price' => $product->price,
			'quantity' => 1
		);
		if (!$this->session->has_userdata('cart')) {
			$cart = array($item);
			$this->session->set_userdata('cart', serialize($cart));
		} else {
			$index = $this->exists($this->uri->segment(3));
			$cart = array_values(unserialize($this->session->userdata('cart')));
			if ($index == -1) {
				array_push($cart, $item);
				$this->session->set_userdata('cart', serialize($cart));
			} else {
				$cart[$index]['quantity']++;
				$this->session->set_userdata('cart', serialize($cart));
			}
		}
		redirect('cart/basket');
	}

	public function remove()
	{
		$index = $this->exists($this->uri->segment(3));
		$cart = array_values(unserialize($this->session->userdata('cart')));
		unset($cart[$index]);
		$this->session->set_userdata('cart', serialize($cart));
		redirect('cart/basket');
	}

	public function preview()
	{
		
	}

	public function clear()
	{
		$this->session->unset_userdata('cart');
		redirect(base_url());
	}

	private function exists($id) {
		$cart = array_values(unserialize($this->session->userdata('cart')));
		for ($i=0; $i < count($cart); $i++) { 
			if ($cart[$i]['id'] == $id) {
				return (int)$i;
			}
		}
		return -1;
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