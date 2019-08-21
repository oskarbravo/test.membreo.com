<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Orders extends CI_Controller {

    public function index()
    {

        $data['title'] = 'Orders Overview';

        $this->load->model('Orders_model');
        $data['orders'] = $this->Orders_model->get_completed();

        $this->load->model('Merchants_model');
        $data['merchant_accounts'] = $this->Merchants_model->get();

        $this->load->view('admin/includes/header_view', $data);
        $this->load->view('admin/orders/index_view.php' , $data);
        $this->load->view('admin/includes/footer_view', $data);
    }

    public function view()
    {
        $data['title'] = 'The Order Title';

        $this->load->model('Orders_model');
        $data['order'] = $this->Orders_model->find($this->uri->segment(4));
        $data['items'] = array_values(unserialize($data['order']->cart));
        $data['total'] = $this->total($data['order']->cart);

        $this->load->view('admin/includes/header_view', $data);
        $this->load->view('admin/orders/view_view.php' , $data);
        $this->load->view('admin/includes/footer_view', $data);
    }

    public function invoice()
    {
        $data['title'] = 'Invoice';

        $this->load->model('Orders_model');
        $data['order'] = $this->Orders_model->find($this->uri->segment(4));
        $data['items'] = array_values(unserialize($data['order']->cart));
        $data['total'] = $this->total($data['order']->cart);

        $this->load->view('admin/orders/invoice_view.php' , $data);
    }

    public function delete() {
        $this->load->model('Orders_model');
        $this->Orders_model->delete($this->uri->segment(4));
        redirect(site_url('admin/orders'));
    }

    private function total($cart) {
        $items = array_values(unserialize($cart));
        $s = 0;
        foreach ($items as $item) {
            $s += $item['price'] * $item['quantity'];
        }
        return $s;
    }

}