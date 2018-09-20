<?php
       $first_name = trim(strip_tags($_POST['first_name']));
       $last_name = trim(strip_tags($_POST['last_name']));
       $email = trim(strip_tags($_POST['email']));
       $message = htmlentities($_POST['message']);

       $subject = "Contact form submitted!";
       $to = 'jeff.kushner@me.com';

       $body = <<<HTML
$message
HTML;

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // send the email
       mail($to, $subject, $body, $headers);

       alert("Contact Form Submitted! Thank you!");
       
       // redirect afterwords, if needed
       header('Location: thanks.html');
?>