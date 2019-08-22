<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MY_Controller {

	public function index()
	{

		$data['title'] = 'Home Page';

		$this->load->model('Products_model');
		$data['products'] = $this->Products_model->get();
		$data['currency_symbol'] = "$";

		foreach ($data['products'] as $key => $product) {
			$product->percentage_off = $this->percentage_off($product->price_full, $product->price);
		}

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/pages/home_minimal_view', $data);
		$this->load->view('public/includes/footer_view');

		
	}

	function percentage_off($original_price, $current_price) {
		return floor((($original_price - $current_price) / $original_price) * 100);
	}

	public function slider()
	{
		$data['title'] = 'Home Page';

		$this->load->model('Products_model');
		$data['products'] = $this->Products_model->get();
		$data['currency_symbol'] = "$";

		foreach ($data['products'] as $key => $product) {
			$product->percentage_off = $this->percentage_off($product->price_full, $product->price);
		}

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/pages/home_slider_view', $data);
		$this->load->view('public/includes/footer_view');
		
	}

	public function test()
	{
		$this->load->view('test_view');
	}
}
