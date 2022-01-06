<?php

 function error($msg)
 {
  $response = array("success" =>false,"message" =>$msg);
  return json_encode($response);
 }

 $email = $_POST['email'];
 $password = $_POST['password'];
 $user = $_POST['user'];
  
  $conn = new mysqli('localhost','root','','registration');

if ($conn -> connect_error){
 die('Connection Failed : '.$conn->connect_error);
}
else{
 $sql = "SELECT  name FROM user WHERE email ='".$email."' and password ='".$password."'";
 $result = $conn->query($sql);
  if ($result->num_rows > 0) {
      echo 'Welcome '.$result->fetch_assoc()["name"];
  }
  else {
      echo 'Wrong Email or Password';
   }
  $conn -> close();
}
?>

