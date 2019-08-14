<?php

use Omnipay\Omnipay;
use Omnipay\Common\CreditCard;

function IsTest() {
	return true;
}

function PayPal_Express($username, $password, $signature) {
	$gateway = Omnipay::create('PayPal_Express');
	$gateway->setUsername($username);
	$gateway->setPassword($password);
	$gateway->setSignature($signature);
	$gateway->setTestMode(IsTest());
	return $gateway;
}

function PayPal_Authorize() {
	
}
