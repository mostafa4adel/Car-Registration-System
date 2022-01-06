<?php

 function error($msg)
 {
  $response = array("success" =>false,"message" =>$msg);
  return json_encode($response);
 }

 $email = $_POST['email'];
 $password = $_POST['password'];
 $name = $_POST['name'];
 $gender = $_POST['gender'];
 $address = $_POST['address'];
 $phoneNumber = $_POST['phoneNumber'];

  $conn = new mysqli('localhost','root','','car_registration');

if ($conn -> connect_error){
 die('Connection Failed : '.$conn->connect_error);
}
else{
 $sql = "SELECT  email FROM user WHERE email ='".$email."'";
 $result = $conn->query($sql);
  if ($result->num_rows > 0) {
      echo 'Used Email';
  }
  else {
     $stmt = $conn -> prepare("insert into user(Email, NAME, PASSWORD,Sex,Address,PhoneNumber) values(?,?,?,?,?,?)");
     $stmt -> bind_param("ssssss",$email,$name,$password,$gender,$address,$phoneNumber);
     $stmt -> execute();
     echo "Registration Successful";
     $stmt -> close();
   }
  
  $conn -> close();
}
?>

