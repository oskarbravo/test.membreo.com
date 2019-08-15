<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Account extends MY_Controller {

	public function login()
	{
	
		$data['title'] = 'Please Login';

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/account/login_view', $data);
		$this->load->view('public/includes/footer_view');
  }
  
  public function forgot()
	{
	
		$data['title'] = 'Password Recovery';

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/account/forgot_view', $data);
		$this->load->view('public/includes/footer_view');
  }

  public function orders()
	{
	
		$data['title'] = 'My Orders';

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/account/orders_view', $data);
		$this->load->view('public/includes/footer_view');
	}
	
	public function profile()
	{
	
		$data['title'] = 'My Orders';

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/account/profile_view', $data);
		$this->load->view('public/includes/footer_view');
	}
	
	public function address()
	{
	
		$data['title'] = 'My Address';

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/account/address_view', $data);
		$this->load->view('public/includes/footer_view');
	}

	public function track()
	{
	
		$data['title'] = 'Track Your Order';

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/account/track_view', $data);
		$this->load->view('public/includes/footer_view');
	}
	
	public function logout()
	{
		$data['title'] = 'Logged Out';

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/account/login_view', $data);
		$this->load->view('public/includes/footer_view');
	}

}