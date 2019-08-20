<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Orders extends CI_Controller {

	public function index()
	{
    
    	$data['title'] = 'Orders Overview';

    	$this->load->model('Orders_model');
    	$data['orders'] = $this->Orders_model->get();

      $this->load->model('Merchants_model');
      $data['merchant_accounts'] = $this->Merchants_model->get();

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/orders/index_view.php' , $data);
		$this->load->view('admin/includes/footer_view', $data);
  }
  
  public function view()
  {
    	$data['title'] = 'The Order Title';

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/orders/view_view.php' , $data);
		$this->load->view('admin/includes/footer_view', $data);
  }

  public function invoice()
  {
    $data['title'] = 'Invoice';
    $this->load->view('admin/orders/invoice_view.php' , $data);
  }

  	public function delete() {
  		$this->load->model('Orders_model');
  		$this->Orders_model->delete($this->uri->segment(4));
  		redirect(site_url('admin/orders'));
  	}

}