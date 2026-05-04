<?php
// Database connection file. Change username/password only if your XAMPP uses different values.
$conn = mysqli_connect('localhost','root','','q10_registration');
if(!$conn){ die('Database connection failed: '.mysqli_connect_error()); }
?>
