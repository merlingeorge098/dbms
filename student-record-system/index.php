<?php include 'config.php'; $msg='';
if(isset($_GET['delete'])){ mysqli_query($conn,'DELETE FROM students WHERE roll_no='.(int)$_GET['delete']); }
if($_SERVER['REQUEST_METHOD']=='POST'){
 $roll=(int)$_POST['roll_no']; $name=trim($_POST['name']); $class=trim($_POST['class']); $marks=$_POST['marks'];
 if($roll<=0||$name==''||$class==''||!is_numeric($marks)){ $msg='Enter valid details'; }
 else{ $stmt=mysqli_prepare($conn,'REPLACE INTO students VALUES(?,?,?,?)'); mysqli_stmt_bind_param($stmt,'issd',$roll,$name,$class,$marks); mysqli_stmt_execute($stmt); }
}
$search=$_GET['search']??''; $safe=mysqli_real_escape_string($conn,$search);
$res=mysqli_query($conn,"SELECT * FROM students WHERE name LIKE '%$safe%' OR roll_no LIKE '%$safe%' ORDER BY roll_no");
?>
<!DOCTYPE html><html><head><title>Q11 Student Records</title><link rel="stylesheet" href="style.css"></head><body><div class="container"><h1>Student Record Management</h1><p class="error"><?php echo $msg; ?></p><form method="post"><input name="roll_no" placeholder="Roll No"><input name="name" placeholder="Name"><input name="class" placeholder="Class"><input name="marks" placeholder="Marks"><button>Add/Update</button></form><form method="get"><input name="search" placeholder="Search name or roll no"><button>Search</button></form><table><tr><th>Roll</th><th>Name</th><th>Class</th><th>Marks</th><th>Action</th></tr><?php while($r=mysqli_fetch_assoc($res)){ ?><tr><td><?php echo $r['roll_no']; ?></td><td><?php echo $r['name']; ?></td><td><?php echo $r['class']; ?></td><td><?php echo $r['marks']; ?></td><td><a onclick="return confirmDelete()" href="?delete=<?php echo $r['roll_no']; ?>">Delete</a></td></tr><?php } ?></table></div><script src="script.js"></script></body></html>
