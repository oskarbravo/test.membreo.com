<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller {

	public function index()
	{
		$data['title'] = 'All Users';

		$this->load->model('Users_model');
		$data['users'] = $this->Users_model->get();

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/users/index_view', $data);
		$this->load->view('admin/includes/footer_view', $data);
		
	}

	public function add()
	{
		$data['title'] = 'Create an Admin';

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/users/add_view', $data);
		$this->load->view('admin/includes/footer_view', $data);
		
	}

	public function edit()
	{
		$data['title'] = 'Edit Admin Account';

		$this->load->model('Users_model');
		$data['user'] = $this->Users_model->find($this->uri->segment(4));

		$this->load->view('admin/includes/header_view', $data);
		$this->load->view('admin/users/edit_view', $data);
		$this->load->view('admin/includes/footer_view', $data);
		
	}


	public function delete()
	{
		$this->load->model('Users_model');
		$data['user'] = $this->Users_model->delete($this->uri->segment(4));
		redirect(site_url('admin/users'));
	}

	public function save() 
	{
		$form_data = array(
			'email' => $this->input->post('email'),
			'firstname' => $this->input->post('firstname'),
			'lastname' => $this->input->post('lastname'),
			'account' => $this->input->post('account')
		);

		if ($this->input->post('password') != "") {
			// They want to change the password too
			$form_data['password'] = $this->input->post('password');
		}

		$this->load->model('Users_model');
		$id = $this->input->post('id');

		if ($id) {
			// Update
			$this->Users_model->update($id, $form_data);
		} else {
			// Create
			$this->Users_model->insert($form_data);
		}
		
		redirect(site_url('admin/users'));
	}

	public function login()
	{
		print_r($this->session->userdata('account'));
		$data['title'] = "Admin Login";

		if ($this->session->has_userdata('account')) {
			redirect('admin/dashboard');
		}
		$this->load->view('admin/users/login_view', $data);
	}

	public function validate_login() {
		$email = $this->input->post('email');
		$password = $this->input->post('password');

		$this->load->model('Users_model');
		$account = $this->Users_model->login($email, $password);
		if ($account != null) {
			$this->session->set_userdata('account', $account);
			redirect('admin/dashboard');
		} else {
			redirect('admin/users/login');
		}
	}

	public function logout()
	{
		// Kill the session
		$this->session->unset_userdata('account');
		redirect('admin/users/login');
	}


}