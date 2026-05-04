<?php include 'config.php'; $msg='';
if($_SERVER['REQUEST_METHOD']=='POST'){
    $name=trim($_POST['name']); $email=trim($_POST['email']); $password=$_POST['password']; $phone=trim($_POST['phone']);
    if($name=='' || $email=='' || $password=='' || $phone==''){ $msg='All fields are required'; }
    elseif(!filter_var($email,FILTER_VALIDATE_EMAIL)){ $msg='Invalid email format'; }
    elseif(!preg_match('/^[0-9]{10}$/',$phone)){ $msg='Phone number must be 10 digits'; }
    else{
        $hash=password_hash($password,PASSWORD_DEFAULT); // Hashes password before saving.
        $stmt=mysqli_prepare($conn,'INSERT INTO users(name,email,password,phone) VALUES(?,?,?,?)');
        mysqli_stmt_bind_param($stmt,'ssss',$name,$email,$hash,$phone);
        if(mysqli_stmt_execute($stmt)){ header('Location: welcome.php?name='.urlencode($name)); exit; }
        else{ $msg='Email already exists'; }
    }
}
?>
<!DOCTYPE html><html><head><title>Q10 Registration</title><link rel="stylesheet" href="style.css"></head><body><div class="container"><h1>User Registration</h1><p class="error"><?php echo $msg; ?></p><form id="regForm" method="post"><input name="name" placeholder="Name"><input name="email" placeholder="Email"><input name="password" type="password" placeholder="Password"><input id="phone" name="phone" placeholder="Phone"><button>Register</button></form></div><script src="script.js"></script></body></html>
