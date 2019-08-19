<?php

use Omnipay\Omnipay;
use Omnipay\Common\CreditCard;

function IsTest() {
	return true;
}

function PayPal_Express_Gateway($username, $password, $signature) {
	$gateway = Omnipay::create('PayPal_Express');
	$gateway->setUsername($username);
	$gateway->setPassword($password);
	$gateway->setSignature($signature);
	$gateway->setTestMode(IsTest());
	return $gateway;
}

function PayPal_Express_Authorize($gateway, $card) {
	$ci =& get_instance();
	return $gateway->purchase([
		    'amount' => $ci->session->userdata('amount'),
		    'currency' => "USD",
		    'card' => $card,
		    'returnUrl' => site_url('checkout/confirm'),
		    'cancelUrl' => site_url('cart/basket')
		])->send();
}

function PayPal_Express_Process($gateway) {
	$ci =& get_instance();
	return $gateway->completePurchase([
		    'amount' => $ci->session->userdata('amount'),
		    'returnUrl' => site_url('checkout/confirm'),
		    'cancelUrl' => site_url('cart'),
		    'token' => $ci->session->userdata('token'),
		    'PayerID' => $ci->session->userdata('PayerID')
		])->send();
}

function Stripe_Gateway($key) {
	$gateway = Omnipay::create('Stripe');
	$gateway->setApiKey($key);
	return $gateway;
}

function Stripe_Process($gateway, $card) {
	$ci =& get_instance();

	return $gateway->purchase([
		    'amount' => $ci->session->userdata('amount'),
		    'currency' => "USD",
		    'token' => $ci->session->userdata('stripeToken')
		])->send();
}


function SagePay_Form_Gateway($vendor, $key) {
	return $gateway = Omnipay::create('SagePay\Form')->initialize([
		'vendor' => $vendor,
		'testmode' => true,
		'encryption_key' => $key,
	]);
}

function SagePay_Form_Authorize($gateway, $card) {
	$ci =& get_instance();
	return $gateway->authorize([
		    'amount' => $ci->session->userdata('amount'),
		    'currency' => "USD",
		    'card' => $card,

	        'notifyUrl' => site_url('checkout/sagepay_notify'),
		    'transactionId' => "sgp_" . date('Y-m-d-H-i-s'),
		    'description' => 'Membreo Purchase',

		    'returnUrl' => site_url('checkout/confirm'),
		    'failureUrl' => site_url('cart/basket')
		])->send();
}






