<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Shop extends MY_Controller {

	public function product()
	{
		$data['currency_symbol'] = "$";
		$data['title'] = 'Product Name';

		if ($this->uri->segment(3) == null) {
			redirect(base_url());
		}

		$this->load->model('Products_model');
		$data['product'] = $this->Products_model->find($this->uri->segment(3));

		$data['product']->percentage_off = $this->percentage_off($data['product']->price_full, $data['product']->price);

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/shop/single_view', $data);
		$this->load->view('public/includes/footer_view');
	}

	public function categories()
	{
	
		$data['title'] = 'Categories';

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/shop/categories_view', $data);
		$this->load->view('public/includes/footer_view');
	}

	function percentage_off($original_price, $current_price) {
		return floor((($original_price - $current_price) / $original_price) * 100);
	}

}