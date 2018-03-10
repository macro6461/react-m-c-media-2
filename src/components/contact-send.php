<?php


if(isset($_POST['submit'])){
  $msg = 'Name: ' . $_POST['firstname'] . $_POST['lastname']
  . 'Email: ' . $_POST['email']
  . 'Phone: ' . $_POST['phone']
  . 'Content: ' . $_POST['message'];
  mail('mattcroak718@gmail.com', 'New Message', $msg);
  header('location: /contact');
} else {
  header('location: /contact');
}

 ?>
