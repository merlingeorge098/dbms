<?php
header('Content-Type: application/json');
$file='votes.json';
$options=['HTML','CSS','JavaScript'];
if(!file_exists($file)){ file_put_contents($file,json_encode([0,0,0])); }
$votes=json_decode(file_get_contents($file),true);
if(($_POST['action'] ?? $_GET['action'] ?? '')==='vote'){
    $op=(int)$_POST['option']; if(isset($votes[$op])) $votes[$op]++;
    file_put_contents($file,json_encode($votes));
}
echo json_encode(['question'=>'Which web technology do you like most?','options'=>$options,'votes'=>$votes]);
?>
