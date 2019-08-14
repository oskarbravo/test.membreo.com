<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use Omnipay\Omnipay;
use Omnipay\Common\CreditCard;

class Checkout extends CI_Controller {

	public function information()
	{
	
		$data['title'] = 'Checkout';
		$data['total'] = $this->total();

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/checkout/information_view', $data);
		$this->load->view('public/includes/footer_view');
	}

	public function shipping()
	{

		$data['title'] = 'Checkout';
		$data['total'] = $this->total();

		$customer_information = array(
			'billingFirstName' => $this->input->post('billingFirstName'),
			'billingLastName' => $this->input->post('billingLastName'),
			'billingAddress1' => $this->input->post('billingAddress1'),
			'billingAddress2' => $this->input->post('billingAddress2'),
			'billingCity' => $this->input->post('billingCity'),
			'billingPostcode' => $this->input->post('billingPostcode'),
			'billingCountry' => $this->input->post('billingCountry'),
			'billingState' => $this->input->post('billingState'),
			'email' => $this->input->post('email'),
			'billingPhone' => $this->input->post('billingPhone')
		);

		if ($this->input->post('isDeliverySame')) {
			$customer_shipping = array(
				'shippingFirstName' => $this->input->post('billingFirstName'),
				'shippingLastName' => $this->input->post('billingLastName'),
				'shippingAddress1' => $this->input->post('billingAddress1'),
				'shippingAddress2' => $this->input->post('billingAddress2'),
				'shippingCity' => $this->input->post('billingCity'),
				'shippingPostcode' => $this->input->post('billingPostcode'),
				'shippingCountry' => $this->input->post('billingCountry'),
				'shippingState' => $this->input->post('billingState'),
				'shippingPhone' => $this->input->post('billingPhone')
			);
		} else {
			$customer_shipping = array(
				'shippingFirstName' => $this->input->post('shippingFirstName'),
				'shippingLastName' => $this->input->post('shippingLastName'),
				'shippingAddress1' => $this->input->post('shippingAddress1'),
				'shippingAddress2' => $this->input->post('shippingAddress2'),
				'shippingCity' => $this->input->post('shippingCity'),
				'shippingPostcode' => $this->input->post('shippingPostcode'),
				'shippingCountry' => $this->input->post('shippingCountry'),
				'shippingState' => $this->input->post('shippingState'),
				'shippingPhone' => $this->input->post('shippingPhone')
			);
		}

		$customer_information = array_merge($customer_information, $customer_shipping);

		$this->session->set_userdata('customer_information', $customer_information);
		print_r($customer_information);
		
		// ROTATE
		$this->load->model('Merchants_model');
		$merchant_accounts = $this->Merchants_model->get();
		$tracker = $this->Merchants_model->getTracker();

		$this->session->set_userdata('merchant_id', $tracker);

		$merchant_account = $this->FindMerchantAccount($merchant_accounts, $tracker);
		$gateway = $this->LoadGateway($merchant_account);
		$data['merchant_tag'] = $merchant_account->tag;

		$nextMerchantId = $this->FindNextMerchantAccount($merchant_accounts, $tracker)->id;

		$this->Merchants_model->updateTracker($nextMerchantId);

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/checkout/shipping_view', $data);
		$this->load->view('public/includes/footer_view');
	}

	// public function payment()
	// {

	// 	$data['title'] = 'Checkout';

	// 	$this->load->view('public/includes/header_view', $data);
	// 	$this->load->view('public/checkout/payment_view', $data);
	// 	$this->load->view('public/includes/footer_view');
	// }

	public function confirm()
	{
		$data['title'] = 'Checkout';
		$data['items'] = array_values(unserialize($this->session->userdata('cart')));
		$data['total'] = $this->total();

		$this->load->model('Merchants_model');
		$merchant_account = $this->Merchants_model->find($this->session->userdata('merchant_id'));

		$data['merchant_tag'] = $merchant_account->tag;

		$data['customerName'] = $this->session->userdata('customer_information')['shippingFirstName'] . " " . $this->session->userdata('customer_information')['shippingLastName'];
		$data['customerAddress'] = 
			$this->session->userdata('customer_information')['shippingAddress1'] . ", " . 
			$this->session->userdata('customer_information')['shippingCity'] . ", " . 
			$this->session->userdata('customer_information')['shippingPostcode'] . ", " . 
			$this->session->userdata('customer_information')['shippingCountry'];

		$data['customerPhone'] = $this->session->userdata('customer_information')['shippingPhone'];

		$this->session->set_userdata('token', $this->input->get('token'));
		$this->session->set_userdata('PayerID', $this->input->get('PayerID'));

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/checkout/confirm_view', $data);
		$this->load->view('public/includes/footer_view');
  }
  
  	public function complete()
	{
		$data['title'] = 'Checkout';
		$data['amount'] = $this->session->userdata('amount');
		

		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/checkout/complete_view', $data);
		$this->load->view('public/includes/footer_view');
	}



	public function authorize() {
		$this->load->model('Merchants_model');
		$merchant_accounts = $this->Merchants_model->get();
		$gateway = $this->LoadGateway($this->FindMerchantAccount($merchant_accounts, $this->session->userdata('merchant_id')));

		$card = new CreditCard($this->session->userdata('customer_information'));
		$request = $gateway->purchase([
		    'amount' => $this->session->userdata('amount'),
		    'card' => $card,
		    'returnUrl' => site_url('checkout/confirm'),
		    'cancelUrl' => site_url('cart')
		])->send();

		if ($request->isSuccessful()) {
			print_r($request);
		} else if ($request->isRedirect()) {
			$this->save_order();
			$request->redirect();
		} else {
			echo $request->getMessage();
		}
	}

	public function save_order() {
		$order_information = array(
			'amount' => $this->session->userdata('amount'),
			'cart' => $this->session->userdata('cart'),
			'merchant_id' => $this->session->userdata('merchant_id')
		);

		$order_information = array_merge($order_information, $this->session->userdata('customer_information'));

		$this->load->model('Orders_model');
		$this->session->set_userdata('order_id', $this->Orders_model->insert($order_information));
	}

	public function process() {
		$this->load->model('Merchants_model');
		$merchant_account = $this->Merchants_model->find($this->session->userdata('merchant_id'));
		$gateway = $this->LoadGateway($merchant_account);

		$request = $gateway->completePurchase([
		    'amount' => $this->session->userdata('amount'),
		    'returnUrl' => site_url('checkout/confirm'),
		    'cancelUrl' => site_url('cart'),
		    'token' => $this->session->userdata('token'),
		    'PayerID' => $this->session->userdata('PayerID')
		])->send();

		if ($request->isSuccessful()) {
			$data = $request->getData();
			$this->update_order($data['PAYMENTINFO_0_TRANSACTIONID']);
			$this->session->set_userdata('transaction_id', $data['PAYMENTINFO_0_TRANSACTIONID']);
			redirect(site_url('checkout/complete'));
		} else if ($request->isRedirect()) {
			$request->redirect();
		} else {
			echo $request->getMessage();
		}
	}

	function update_order($transaction_id) {
		$update_information = array(
			'transaction_id' => $transaction_id,
			'completed' => 1
		);

		$this->load->model('Orders_model');
		$this->Orders_model->update($this->session->userdata('order_id'), $update_information);
	}

	function LoadGateway($merchant_account) {
		switch ($merchant_account->gateway) {
			case 'PayPal_Express':
				return PayPal_Express($merchant_account->username, $merchant_account->password, $merchant_account->signature);
			default:
				break;
		}
	}

	function FindMerchantAccount($accounts, $id) {
		foreach ($accounts as $account_id => $account) {
			if ($account->id == $id) {
				return $account;
			}
		}
		return null;
	}

	function FindNextMerchantAccount($accounts, $tracker) {
		$currentMerchantAccount = $this->FindMerchantAccount($accounts, $tracker);
		$index = array_search($currentMerchantAccount, $accounts);

		if ($index + 1 >= count($accounts)) {
			$index = 0;
		} else {
			$index += 1;
		}
		return $accounts[$index];
	}

	private function total() {
		$items = array_values(unserialize($this->session->userdata('cart')));
		$s = 0;
		foreach ($items as $item) {
			$s += $item['price'] * $item['quantity'];
		}
		return $s;
	}

}