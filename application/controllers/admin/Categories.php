<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Categories extends CI_Controller {

	public function index()
	{
        
        $data['title'] = 'Categories Overview';

        $this->load->model('Categories_model');
        $data['categories'] = $this->Categories_model->get();

        $this->load->view('admin/includes/header_view', $data);
        $this->load->view('admin/categories/index_view.php' , $data);
        $this->load->view('admin/includes/footer_view', $data);
    }

    public function add()
    {
        
        $data['title'] = 'Create a Category';

        $this->load->view('admin/includes/header_view', $data);
        $this->load->view('admin/categories/add_view.php' , $data);
        $this->load->view('admin/includes/footer_view', $data);
    }

    public function edit()
    {
        $data['title'] = 'Edit a Categories';

        $this->load->model('Categories_model');
        $data['category'] = $this->Categories_model->find($this->uri->segment(4));
        
        $this->load->view('admin/includes/header_view', $data);
        $this->load->view('admin/categories/edit_view.php' , $data);
        $this->load->view('admin/includes/footer_view', $data);
    }

    public function delete()
    {
        $this->load->model('Categories_model');
        $data['user'] = $this->Categories_model->delete($this->uri->segment(4));
        redirect(site_url('admin/categories'));
    }

    public function save() 
    {
        $form_data = array(
          'category' => $this->input->post('category'),
          'status' => $this->input->post('status'),
      );

        $this->load->model('Categories_model');
        $id = $this->input->post('id');

        if ($id) {
      // Update
          $this->Categories_model->update($id, $form_data);
      } else {
      // Create
          $this->Categories_model->insert($form_data);
      }
      
      redirect(site_url('admin/categories'));
  }

}