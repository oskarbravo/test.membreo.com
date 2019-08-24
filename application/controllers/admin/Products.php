<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller {

	public function index()
	{
		$data['title'] = 'Products Overview';

		$this->load->model('Products_model');
		$data['products'] = $this->Products_model->get();

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/products/index_view', $data);
		$this->load->view('admin/includes/footer_view', $data);
		
	}

	public function grid()
	{
		$data['title'] = 'Current Products';

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/products/grid_view', $data);
		$this->load->view('admin/includes/footer_view', $data);
		
	}

	public function add()
	{

		$data['title'] = 'Add a Product';

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/products/add_view', $data);
		$this->load->view('admin/includes/footer_view', $data);
		
	}

	public function edit()
	{
		$data['title'] = 'Edit Product';

		$this->load->model('Products_model');
		$data['product'] = $this->Products_model->find($this->uri->segment(4));

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/products/edit_view', $data);
		$this->load->view('admin/includes/footer_view', $data);	
	}


	public function save_product_info() 
	{
		$form_data = array(
			'name' => $this->input->post('name'),
			'price' => $this->input->post('price'),
			'description' => $this->input->post('description'),
			'meta_tag_title' => $this->input->post('meta_tag_title'),
			'meta_tag_description' => $this->input->post('meta_tag_description'),
			'meta_tag_keywords' => $this->input->post('meta_tag_keywords')
		);

		$this->load->model('Products_model');
		$id = $this->input->post('id');

		if ($id) {
			// Update
			$this->Products_model->update($id, $form_data);
		} else {
			// Create
			$this->Products_model->insert($form_data);
		}

		redirect(site_url('admin/products/'));
	}

	public function delete() {
		$this->load->model('Products_model');
        $this->Products_model->delete($this->uri->segment(4));
        redirect(site_url('admin/products'));
	}

	

}