<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {

	public function view($page = 'home')
	{

		if(!file_exists(APPPATH . 'views/public/pages/' . $page . '_view.php')){
			show_404();
		}
	
		$data['title'] = ucfirst($page);

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/pages/' . $page . '_view', $data);
		$this->load->view('public/includes/footer_view');
	}
}
