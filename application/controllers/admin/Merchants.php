<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Merchants extends CI_Controller {

	public function index()
	{
    	$data['title'] = 'Current Merchants';

    	$this->load->model('Merchants_model');
    	$data['accounts'] = $this->Merchants_model->get();

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/merchants/index_view' , $data);
		$this->load->view('admin/includes/footer_view', $data);
  }
  
  public function add()
  {
    	$data['title'] = 'Add a Merchant';

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/merchants/add_view' , $data);
		$this->load->view('admin/includes/footer_view', $data);
  }

  public function edit()
  {
    	$data['title'] = 'Edit a Merchant';

    	$this->load->model('Merchants_model');
    	$data['account'] = $this->Merchants_model->find($this->uri->segment(4));

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/merchants/edit_view' , $data);
		$this->load->view('admin/includes/footer_view', $data);
  }

  public function save() 
    {
        $form_data = array(
          'tag' => $this->input->post('tag'),
          'username' => $this->input->post('username'),
          'password' => $this->input->post('password'),
          'signature' => $this->input->post('signature'),
          'public_key' => $this->input->post('public_key'),
          'secret_key' => $this->input->post('secret_key'),
	      );

        	if ($this->input->post('gateway') == "Paypal") {
        		$form_data['gateway'] = "PayPal_Express";
        	}
          if ($this->input->post('gateway') == "Stripe") {
            $form_data['gateway'] = "Stripe";
          }
          if ($this->input->post('gateway') == "SagePay") {
            $form_data['gateway'] = "SagePay_Form";
          }

	        $this->load->model('Merchants_model');
	        $id = $this->input->post('id');

	        if ($id) {
	      // Update
	          $this->Merchants_model->update($id, $form_data);
	      } else {
	      // Create
	          $this->Merchants_model->insert($form_data);
	      }
	      
	      redirect(site_url('admin/merchants'));
  	}

}