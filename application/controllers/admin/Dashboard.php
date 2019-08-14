<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	function __construct() {
        parent::__construct();
        if ($this->session->has_userdata('account')) {
        	if ($this->session->userdata('account')->account != "Admin") {
        		redirect(site_url('admin/users/login'));
        	}
        } else {
        	redirect(site_url('admin/users/login'));
        }
    }

	public function index()
	{
		$data['title'] = 'Dashboard From Template';

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/dashboard/index_view', $data);
		$this->load->view('admin/includes/footer_view', $data);
	}
}
