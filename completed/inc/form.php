<?php
if ($_POST) {

	$expected = array('full_name', 'email');
	$validation = array(
		'full_name' => 'Please provide your full name',
		'email'		=> 'Please provide your valid email address'
	);
	$errors = array();
	$output = array();

	foreach($expected as $key) {
		
		if (array_key_exists($key, $_POST)) {
			if (empty($_POST[$key])) {
				$errors[$key] = $validation[$key];
			} else {
				$output[$key] = $_POST[$key];
			}
		} else {
			$errors[$key] = $validation[$key];
		}
	
	}
	
	if (!empty($errors)) {
		$array = array('error' => true, 'fields' => $errors);
	} else {
	
		// PROCESS FORM
	
		$message = '<h3>You have successfully subscribed to our newsletter</h3>';
		$array = array('error' => false, 'message' => $message);
	}
	
	
	echo json_encode($array);


}