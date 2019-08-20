<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Orders_model extends CI_Model {

	private $_table_name = "orders";

	public function get()
	{
		return $this->db->get($this->_table_name)->result();
	}

	public function get_completed() {
		$this->db->where('completed', 1);
		return $this->db->get($this->_table_name)->result();
	}

	public function insert($form_data)
	{
		$this->db->insert($this->_table_name, $form_data);
		return $this->db->insert_id();
	}

	public function find($id)
	{
		$this->db->where('id', $id);
		return $this->db->get($this->_table_name)->row();
	}

	public function update($id, $form_data)
	{
		$this->db->where('id', $id);
		$this->db->update($this->_table_name, $form_data);
	}

	public function delete($id) {
		$this->db->where('id', $id);
		$this->db->delete($this->_table_name);
	}
	
}