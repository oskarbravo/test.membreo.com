<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Shop extends CI_Controller {

	public function product()
	{
		$data['currency_symbol'] = "£";
		$data['title'] = 'Product Name';

		$this->load->model('Products_model');
		$data['product'] = $this->Products_model->find($this->uri->segment(3));

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

}