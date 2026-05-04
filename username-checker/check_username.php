<?php
// Simple backend simulation for username checking.
header('Content-Type: application/json');
$taken = ['admin','test','merlin','student'];
$username = strtolower(trim($_POST['username'] ?? ''));
if(in_array($username,$taken)){
    echo json_encode(['message'=>'Taken','class'=>'taken']);
}else{
    echo json_encode(['message'=>'Available','class'=>'available']);
}
?>
