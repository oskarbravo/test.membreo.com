<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Orders extends CI_Controller {

	public function index()
	{
    
    	$data['title'] = 'Orders Overview';

    	$this->load->model('Orders_model');
    	$data['orders'] = $this->Orders_model->get();

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/orders/index_view.php' , $data);
		$this->load->view('admin/includes/footer_view', $data);
  }
  
  public function overview()
  {
    	$data['title'] = 'The Order Title';

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/orders/view_view.php' , $data);
		$this->load->view('admin/includes/footer_view', $data);
  }

  	public function delete() {
  		$this->load->model('Orders_model');
  		$this->Orders_model->delete($this->uri->segment(4));
  		redirect(site_url('admin/orders'));
  	}

}