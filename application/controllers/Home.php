<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{

		$data['title'] = 'Home Page';

		$this->load->model('Products_model');
		$data['products'] = $this->Products_model->get();
		$data['currency_symbol'] = "$";

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/pages/home_minimal_view', $data);
		$this->load->view('public/includes/footer_view');

		
	}

	public function slider()
	{
		$data['title'] = 'Home Page';

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/pages/home_slider_view', $data);
		$this->load->view('public/includes/footer_view');
		
	}

	public function test()
	{
		$this->load->view('test_view');
	}
}
