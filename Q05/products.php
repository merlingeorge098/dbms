<?php
header('Content-Type: application/json');
$products = ['Mobiles','Laptops','Headphones','Keyboards','Mouse','Printer','Smart Watch','Tablet'];
$q = strtolower($_GET['q'] ?? '');
$result = [];
foreach($products as $p){ if($q === '' || strpos(strtolower($p),$q) !== false){ $result[] = $p; } }
echo json_encode($result);
?>
