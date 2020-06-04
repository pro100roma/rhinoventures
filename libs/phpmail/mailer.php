<?php
// error_reporting(E_ALL ^ E_NOTICE);
if ($_SERVER["REQUEST_METHOD"] == "POST") {

// Get Data
$name = trim($_POST['namezzmphchw']);
$email = trim($_POST['emailzoomablki']);
$subject = "Interest From Website";
$message = trim($_POST['messagefqotvmxzk']);
$date = date('d F Y');
$timestamp 	= date("h:iA.", time());
$mailto = 'info@rhinoventures.asia'; 

// Get Geodata
require_once('../geodata/geoplugin.class.php');
$geoplugin = new geoPlugin();
$geoplugin->locate();

// Construct Message
$message_content = 'This email was sent to you by a person who completed the form on the Rhino Ventures website.' . "\r\n";
$message_content .= 'Kindly respond back to them as soon as possible.'. "\r\n\r\n";
$message_content .= 'NAME: ' . trim($name) . "\r\n";
$message_content .= 'E-MAIL: ' . trim($email) . "\r\n";
$message_content .= 'DATE: ' . $date . "\r\n"; 
$message_content .= 'TIME: ' . $timestamp . "\r\n\r\n";
$message_content .= 'MESSAGE: '  . "\r\n";
$message_content .= stripslashes($message) . "\r\n\r\n";
$message_content .= 'GEO DATA: ' . "\r\n";
$message_content .= 'Senders IP: ' . $geoplugin->ip . "\r\n";
$message_content .= 'Senders Country Name: ' . $geoplugin->countryName . "\r\n";
$message_content .= 'Senders City Name: ' .  $geoplugin->city . "\r\n";
$message_content .= 'Senders Region: ' . $geoplugin->regionName . "\r\n";
$message_content .= 'Senders Time Zone: ' . $geoplugin->timezone . "\r\n";

// Construct Headers
$headers = 'From: ' .  $name . "<$email>" . "\r\n";
$headers .= "Cc: limelite.online@gmail.com" . "\r\n";
$headers .= "Reply-To:" . $email . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . "\r\n";

mail($mailto, $subject, $message_content, $headers);
}
?>
