<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use Omnipay\Omnipay;
use Omnipay\Common\CreditCard;

class Checkout extends MY_Controller {

	function destroy_session_values() {
		$this->session->unset_userdata('cart');
		$this->session->unset_userdata('amount');
		$this->session->unset_userdata('customer_information');
		$this->session->unset_userdata('merchant_id');
		$this->session->unset_userdata('order_id');
		$this->session->unset_userdata('stripeToken');
	}

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

		$this->session->unset_userdata('customer_information');
		$this->session->set_userdata('customer_information', $customer_information);

		// ROTATE
		$this->load->model('Merchants_model');
		$merchant_accounts = $this->Merchants_model->get_active();
		$tracker = $this->Merchants_model->getTracker();

		$merchant_account = $this->FindMerchantAccount($merchant_accounts, $tracker);

		if ($merchant_account == null) {
			// Fallback
			$tracker = $merchant_accounts[0]->id;
			$merchant_account = $merchant_accounts[0];
		}

		$this->session->unset_userdata('merchant_id');
		$this->session->set_userdata('merchant_id', $tracker);

		$gateway = $this->LoadGateway($merchant_account);
		$data['merchant_tag'] = $merchant_account->tag;
		$data['merchant_gateway'] = $merchant_account->gateway;

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

		if ($merchant_account->gateway == "PayPal_Express") {
			$this->session->set_userdata('token', $this->input->get('token'));
			$this->session->set_userdata('PayerID', $this->input->get('PayerID'));
		}
		if ($merchant_account->gateway == "Stripe") {
			$this->session->set_userdata('stripeToken', $this->input->post('stripeToken'));
		}
		if ($merchant_account->gateway == "SagePay_Form") {
			$data['sagePay'] = $this->load_sagepay();
			$data['vendor'] = $merchant_account->username;
		}

		$data['merchant_gateway'] = $merchant_account->gateway;

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

		$this->destroy_session_values();
	}



	public function authorize() {
		$this->load->model('Merchants_model');
		$merchant_accounts = $this->Merchants_model->get();
		$merchant_account = $this->FindMerchantAccount($merchant_accounts, $this->session->userdata('merchant_id'));
		$gateway = $this->LoadGateway($merchant_account);

		$card = new CreditCard($this->session->userdata('customer_information'));
		$request = $this->LoadRequest($gateway, $merchant_account, $card);

		if ($merchant_account->gateway == "SagePay_Form") {
			$this->save_order();
			redirect(site_url('checkout/confirm'));
		}
		if ($request->isSuccessful()) {
			$this->save_order();
			redirect(site_url('checkout/confirm'));
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

		$request = $this->LoadProcess($gateway, $merchant_account);

		if ($merchant_account->gateway == "SagePay_Form") {
			$transaction_id = $this->sagepay_return();

			$this->update_order($transaction_id);
			$this->session->set_userdata('transaction_id', $transaction_id);
			redirect(site_url('checkout/complete'));
		}
		else if ($request->isSuccessful()) {
			$data = $request->getData();
			$transaction_id = "";
			switch ($merchant_account->gateway) {
				case 'PayPal_Express':
					$transaction_id = $data['PAYMENTINFO_0_TRANSACTIONID'];
					break;
				case 'Stripe':
					$this->save_order();
					$transaction_id = $data['balance_transaction'];
					break;
				default:
					break;
			}
			
			$this->update_order($transaction_id);
			$this->session->set_userdata('transaction_id', $transaction_id);
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

	function LoadRequest($gateway, $merchant_account, $card) {
		switch ($merchant_account->gateway) {
			case 'PayPal_Express':
				return PayPal_Express_Authorize($gateway, $card);
			// case 'Stripe':
			// 	return Stripe_Authorize($gateway, $card);
			case 'SagePay_Form':
				//return SagePay_Form_Authorize($gateway, $card);
			default:
				
				break;
		}
	}

	function LoadProcess($gateway, $merchant_account) {
		switch ($merchant_account->gateway) {
			case 'PayPal_Express':
				return PayPal_Express_Process($gateway);
			case 'Stripe':
				$card = new CreditCard($this->session->userdata('customer_information'));
				return Stripe_Process($gateway, $card);
			default:
				break;
		}
	}


	function LoadGateway($merchant_account) {
		switch ($merchant_account->gateway) {
			case 'PayPal_Express':
				return PayPal_Express_Gateway($merchant_account->username, $merchant_account->password, $merchant_account->signature);
			case 'Stripe':
				return Stripe_Gateway($merchant_account->secret_key);
			case 'SagePay_Form':
				//return SagePay_Form_Gateway($merchant_account->username, $merchant_account->signature);
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

	public function Stripe() {

		$data['title'] = 'Checkout';

		$this->load->model('Merchants_model');
		$p_key = $this->Merchants_model->find($this->session->userdata('merchant_id'))->public_key;
		//$this->session->set_userdata('public_key', $p_key);

		echo "<script>var p_key = '" . $p_key . "';</script>";
		$this->load->view('public/includes/header_view', $data);
		$this->load->view('public/checkout/stripe_view');
		$this->load->view('public/includes/footer_view');
				
	}

	function load_sagepay() {
		require_once ('./includes/sagePay.php');

        $sagePay = new SagePay();
        $sagePay->setCurrency('GBP');
        $sagePay->setAmount($this->dollarsToPounds($this->total()));
        $sagePay->setDescription('Order');

        // Billing Details
        $sagePay->setBillingSurname($this->session->userdata('customer_information')['billingLastName']);
        $sagePay->setBillingFirstnames($this->session->userdata('customer_information')['billingFirstName']);
        $sagePay->setBillingCity($this->session->userdata('customer_information')['billingCity']);
        $sagePay->setBillingPostCode($this->session->userdata('customer_information')['billingPostcode']);
        $sagePay->setBillingAddress1($this->session->userdata('customer_information')['billingAddress1']);
        $sagePay->setBillingAddress2($this->session->userdata('customer_information')['billingAddress2']);
        $sagePay->setBillingCountry($this->session->userdata('customer_information')['billingCountry']);
        $sagePay->setBillingState($this->session->userdata('customer_information')['billingState']);
        $sagePay->setBillingPhone($this->session->userdata('customer_information')['billingPhone']);

        // Delivery Details
        if ($this->input->post('isDeliverySame')) {
            $sagePay->setDeliverySameAsBilling();
        } else {
            $sagePay->setDeliverySurname($this->session->userdata('customer_information')['shippingLastName']);
            $sagePay->setDeliveryFirstnames($this->session->userdata('customer_information')['shippingFirstName']);
            $sagePay->setDeliveryCity($this->session->userdata('customer_information')['shippingCity']);
            $sagePay->setDeliveryPostCode($this->session->userdata('customer_information')['shippingPostcode']);
            $sagePay->setDeliveryAddress1($this->session->userdata('customer_information')['shippingAddress1']);
            $sagePay->setDeliveryAddress2($this->session->userdata('customer_information')['shippingAddress2']);
            $sagePay->setDeliveryCountry($this->session->userdata('customer_information')['shippingCountry']);
            $sagePay->setDeliveryState($this->session->userdata('customer_information')['shippingState']);
            $sagePay->setDeliveryPhone($this->session->userdata('customer_information')['shippingPhone']);
        }
        // Customer Details
        $sagePay->setCustomerName($sagePay->getDeliveryFirstnames() . ' ' . $sagePay->getDeliverySurname());
        $sagePay->setCustomerEmail($this->session->userdata('customer_information')['email']);


        $total_items = 0;
        $basket_line = array();
        foreach (array_values(unserialize($this->session->userdata('cart'))) as $key => $item) {
            $total_items ++;
            array_push($basket_line, ':'.$item['name'].':'.$item['quantity'].':'.$item['price'].':'.'0'.':'.$item['price'] * $item['quantity'].':'.$item['price'] * $item['quantity']);
        }
        // Create the basket in the correct format
        $formatted_basket = $total_items;
        foreach ($basket_line as $key => $line) {
            $formatted_basket .= $line;
        }

        $sagePay->setBasket($formatted_basket);

        $sagePay->setSuccessURL(base_url('checkout/process'));
        $sagePay->setFailureURL(base_url('checkout/process'));

        return $sagePay;
	}

	public function sagepay_return() {
		$crypt = (explode("=", $_SERVER['QUERY_STRING']));
        require_once ('./includes/sagePay.php');
        $sagepay = new Sagepay();

        if ($_SERVER['QUERY_STRING']) {
            $responseArray = $sagepay->decode($crypt[1]);
            $this->session->set_userdata('response', $responseArray);

            //Check status of response
            if($responseArray["Status"] === "OK"){
                // Success
                
                return $responseArray['VendorTxCode'];
            }elseif($responseArray["Status"] === "ABORT"){
                // Payment Cancelled
                redirect(site_url('cart'));
            }else{
                // Payment Failed
                // throw new \Exception($responseArray["StatusDetail"]);
                redirect(site_url('checkout/unsuccessful'));
            }
            exit;
        }
	}

	function dollarsToPounds($value) {
		return number_format($value * 0.83, 2);
	}

	public function unsuccessful() {
		echo "Checkout unsuccessful";
	}

}